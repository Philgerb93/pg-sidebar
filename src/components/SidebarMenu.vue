<template>
    <div class="sidebar-menu">
        <p v-if="title" class="sidebar-menu-header" :class="{ expanded: isExpanded, collapsable: collapsable }" @click="onClick">
            {{ title }} <i v-if="collapsable" class="arrow" :class="{ right: isMenuCollapsed, down: !isMenuCollapsed }"></i>
        </p>
        <div class="sidebar-menu-content" :class="{ isCollapsed: isMenuCollapsed }">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
    props: {
        title: {
            type: String,
            required: false
        },
        collapsable: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            isExpanded: inject("isExpanded") as boolean,
            isMenuCollapsed: false,
        }
    },
    methods: {
        onClick() {
            if (this.collapsable) {
                this.isMenuCollapsed = !this.isMenuCollapsed;
            }
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
$sidebar-padding: 1.4rem;

.sidebar-menu {
    &:not(:last-of-type) {
        margin-bottom: 1rem;
    }

    .sidebar-menu-header {
        opacity: 0;
        transition: 0.3s ease-out;
        user-select: none;
        color: $header-color;
        font-size: 0.875rem;
        text-transform: uppercase;
        margin: 0 $sidebar-padding 4px $sidebar-padding;
        white-space: nowrap;

        &:hover {
            color: white;

            .arrow {
                border-color: white;
            }
        }

        &.expanded {
            opacity: 1;
        }

        &.collapsable {
            cursor: pointer;
        }
    }

    .sidebar-menu-content {
        display: flex;
        flex-direction: column;

        &.isCollapsed {
            display: none;
        }
    }
}

.arrow {
    border: solid $header-color;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 2.5px;
    transition: transform 0.1s ease-out, border 0.3s ease-out;
    margin-left: .4rem;

    &.right {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        margin-bottom: 1px;
    }
    
    &.down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        margin-bottom: 3px;
    }
}
</style>