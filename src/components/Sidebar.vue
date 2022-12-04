<template>
  <aside class="sidebar" :style="{ width: currentWidth }" :class="{ expanded: isExpanded }" @mouseover="expand" @mouseleave="collapse">
    <div class="top" v-if="hasTopSlot" :class="{ padding: topPadding, border: topBorder }">
      <slot :collapse="collapse" name="top"></slot>
    </div>
    <div class="content">
      <slot :collapse="collapse" name="content"></slot>
    </div>
    <div class="bottom" v-if="hasBottomSlot" :class="{ padding: bottomPadding, border: bottomBorder }">
      <slot :collapse="collapse" name="bottom"></slot>
    </div>
  </aside>
</template>
  
<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    topPadding: {
      type: Boolean,
      required: false,
      default: true
    },
    bottomPadding: {
      type: Boolean,
      required: false,
      default: true
    },
    topBorder: {
      type: Boolean,
      required: false,
      default: true
    },
    bottomBorder: {
      type: Boolean,
      required: false,
      default: true
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
  },
  provide() {
    return {
      isExpanded: computed(() => this.isExpanded),
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
$collapsed-width: 60px;
$background-color: #1a2233;
$divider-color: lighten($background-color, 10%);
$accent-color: #3c9a7f;
$expand-anim-speed: 0.2s;

.sidebar {
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

    &.padding {
      padding: 16px 0;
    }
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

  &.expanded {
    // width: $sidebar-width;

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
</style>