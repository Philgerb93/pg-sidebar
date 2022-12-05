<template>
  <aside class="sidebar" :style="{ width: currentWidth, top: topOffset, height: currentHeight, minHeight: currentHeight, maxHeight: currentHeight }" :class="{ expanded: isExpanded }" @mouseover="expand" @mouseleave="collapse">
    <div class="top" v-if="hasTopSlot" :style="{ height: topHeight }" :class="{ border: topSeparator === 'border', background: topSeparator === 'background' }">
      <slot :collapse="collapse" name="top"></slot>
    </div>
    <div class="content">
      <slot :collapse="collapse" name="content"></slot>
    </div>
    <div class="bottom" v-if="hasBottomSlot" :style="{ height: bottomHeight }" :class="{ border: bottomSeparator === 'border', background: bottomSeparator === 'background' }">
      <slot :collapse="collapse" name="bottom"></slot>
    </div>
  </aside>
  <transition v-if="background" name="fade-bg">
    <div v-if="isExpanded" class="expanded-background"></div>
  </transition>
</template>
  
<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    topHeight: {
      type: String,
      required: false,
      default: "unset"
    },
    bottomHeight: {
      type: String,
      required: false,
      default: "unset"
    },
    bottomPadding: {
      type: Boolean,
      required: false,
      default: true
    },
    topSeparator: {
      type: String,
      required: false,
      default: "none"
    },
    bottomSeparator: {
      type: String,
      required: false,
      default: "none"
    },
    expandedWidth: {
      type: String,
      required: false,
      default: "240px"
    },
    collapseOnButton: {
      type: Boolean,
      required: false,
      default: false
    },
    collapseOnLink: {
      type: Boolean,
      required: false,
      default: false
    },
    iconSize: {
      type: String,
      required: false,
      default: "L"
    },
    background: {
      type: Boolean,
      required: false,
      default: false
    },
    topOffset: {
      type: String,
      required: false,
      default: "0"
    }
  },
  provide() {
    return {
      isExpanded: computed(() => this.isExpanded),
      iconSize: computed(() => this.iconSize),
      collapseFromChild: (source: string) => this.collapseFromChild(source)
    };
  },
  data() {
    return {
      timer: 0,
      isExpanded: false,
      delayInMilliseconds: 200,
      disabledExpand: false,
    };
  },
  computed: {
    hasTopSlot(): boolean {
      return this.$slots.top != undefined;
    },
    hasBottomSlot(): boolean {
      return this.$slots.bottom != undefined;
    },
    currentWidth(): string {
      return this.isExpanded ? this.expandedWidth : "60px";
    },
    currentHeight(): string {
      console.log(window.innerHeight / 100);
      return (window.innerHeight - parseInt(this.topOffset, 10)) + 'px';
    }
  },
  methods: {
    expand() {
      if (this.disabledExpand) return;
      this.isExpanded = true;
    },
    collapse() {
      this.isExpanded = false;

      this.disabledExpand = true;
      this.timer = setTimeout(() => {
        this.disabledExpand = false;
        }, this.delayInMilliseconds);
    },
    collapseFromChild(source: string) {
      if (source === "button" && this.collapseOnButton || source === "link" && this.collapseOnLink) {
        this.collapse();
      }
    }
  },
});
</script>
  
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
$collapsed-width: 60px;
$background-color: #1a2233;
$divider-color: lighten($background-color, 10%);
$accent-color: #3c9a7f;
$expand-anim-speed: 0.2s;

.sidebar {
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: $collapsed-width;
  min-height: 100vh;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  position: fixed;
  z-index: 99;
  text-align: start;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: $background-color;
  color: white;
  transition: width $expand-anim-speed ease-out;

  .content, .top, .bottom {
    display: flex;
    flex-direction: column;
  }

  .top,
  .bottom {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .content {
    overflow-y: hidden;
    overflow-x: hidden;
    flex: 1;
    padding: 24px 0;
  }

  .top.border {
    border-bottom: 1px solid $divider-color;
  }

  .bottom.border {
    border-top: 1px solid $divider-color;
  }

  .top.background,
  .bottom.background {
    background-color: $divider-color;
  }

  &.expanded {
    .content {
      overflow-y: auto;
    }
  }
}

::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: darken($color: $background-color, $amount: 10%);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $accent-color;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: $accent-color;
}

.expanded-background {
  background-color: rgba(black, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: z(popup-bg);
}

.fade-enter-active,
.fade-leave-active {
  transition: all calc($expand-anim-speed / 4) ease;
}

.fade-enter-active {
  transition-delay: calc($expand-anim-speed / 4);
}

.fade-enter-from,
.fade-leave-to,
.fade-bg-enter-from,
.fade-bg-leave-to {
  opacity: 0;
}

.fade-bg-enter-active,
.fade-bg-leave-active {
  transition: all $expand-anim-speed ease-out;
}
</style>