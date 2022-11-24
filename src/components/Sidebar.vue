<template>
  <aside class="sidebar" :class="{ expanded: isExpanded }" @mouseover="expand" @mouseleave="collapse">
    <div class="top" v-if="hasTopSlot">
      <slot name="top"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="bottom" v-if="hasBottomSlot">
      <slot name="bottom"></slot>
    </div>
  </aside>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      timer: 0,
      isExpanded: false,
      delayInMilliseconds: 50
    };
  },
  computed: {
    hasTopSlot() {
      return this.$slots.top != undefined;
    },
    hasBottomSlot() {
      return this.$slots.bottom != undefined;
    }
  },
  methods: {
    expand() {
      if (this.timer == 0) {
        this.timer = setTimeout(() => {
          this.isExpanded = true;
        }, this.delayInMilliseconds);
      }
    },
    collapse() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = 0;
      }
      this.isExpanded = false;
    }
  },
});
</script>
  
  
<style lang="scss" scoped>
$sidebar-width: 300px;
$text-color: #bebfc0;
$header-color: darken(#bebfc0, 20%);
$background-color: #1a2233;
$divider-color: lighten($background-color, 10%);
$accent-color: #3c9a7f;
$icon-size: 24px;
$sidebar-padding: 1.2rem;

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc($sidebar-padding * 2 + $icon-size); // Padding + icon width
  min-height: 100vh;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  position: fixed;
  z-index: 99;

  background-color: $background-color;
  color: white;

  transition: 0.2s ease-out;

  .content, .top, .bottom {
    display: flex;
    flex-direction: column;
  }

  .content {
    overflow-y: auto;
    overflow-x: hidden;
    flex: 1;
  }

  .top {
    border-bottom: 1px solid $divider-color;
  }

  .bottom {
    border-top: 1px solid $divider-color;
  }

  :slotted(.sidebar-header) {
    opacity: 0;
    transition: 0.3s ease-out;
    user-select: none;
    color: $header-color;
    font-size: 0.875rem;
    margin: 2rem $sidebar-padding 0.5rem $sidebar-padding;
    text-transform: uppercase;

    &:hover {
      color: white;
    }
  }

  :slotted(.sidebar-button) {
    display: flex;
    align-items: center;
    text-decoration: none;

    padding: 0.5rem $sidebar-padding;
    transition: 0.2s ease-out;
    cursor: pointer;

    .router-link-exact-active {
      border-right: 5px solid $accent-color;
      background-color: lighten($color: $background-color, $amount: 5%);
      cursor: default;
      font-weight: bold;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .icon * {
      font-size: $icon-size;
      height: $icon-size;
      width: $icon-size;
      color: white;
    }

    .text {
      color: $text-color;
      opacity: 0;
      transition: 0.2s ease-out;
      white-space: nowrap;
      user-select: none;
      line-height: 24px;
    }

    &:hover {
      background-color: lighten($color: $background-color, $amount: 5%);
      border-right: 5px solid $accent-color;

      .icon *, .text {
        color: $accent-color;
      }
    }
  }

  &.expanded {
    width: $sidebar-width;

    :slotted(.sidebar-header) {
      opacity: 1;
    }

    :slotted(.sidebar-button) {
      .icon * {
        margin-right: 1rem;
      }

      .text {
        opacity: 1;
      }
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