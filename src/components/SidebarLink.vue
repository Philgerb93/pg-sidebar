<template>
    <router-link @click="onClick" v-ripple class="sidebar-link" :class="{ expanded: isExpanded }" :to="to">
        <div class="wrapper">
            <span class="sidebar-link-icon"><slot></slot></span>
            <span class="sidebar-link-text">{{ label }}</span>
        </div>
    </router-link>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
    props: {
        label: {
            type: String,
            required: true,
        },
        to: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isExpanded: inject("isExpanded") as boolean,
            collapseFromChild: inject("collapseFromChild") as (source: string) => void,
        }
    },
    methods: {
        onClick() {
            this.collapseFromChild("link");
        }
    }
});
</script>

<style lang="scss" scoped>
$text-color: #bebfc0;
$background-color: #1a2233;
$accent-color: #3c9a7f;
$icon-size: 24px;
$sidebar-padding: calc((60px - $icon-size) / 2);
$hover-anim-speed: 0.2s;
$expand-anim-speed: 0.2s;
$active-border-width: 6px;

.sidebar-link {
    height: 48px;
    text-decoration: none;
    padding: 0 $sidebar-padding;
    cursor: pointer;

    &.router-link-exact-active {
        border-left: $active-border-width solid $accent-color;
        background-color: lighten($color: $background-color, $amount: 5%);
        cursor: default;
        padding-left: calc($sidebar-padding - $active-border-width);

        .sidebar-button-icon :slotted(*),
        .sidebar-button-text {
            color: $accent-color;
        }
    }

    .wrapper {
        display: flex;
        align-items: center;
        height: 100%;
        transition: margin $hover-anim-speed ease-out;

        &:hover {
            margin-left: 8px;
        }
    }

    .sidebar-link-icon {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .sidebar-link-icon :slotted(*) {
        font-size: $icon-size;
        height: $icon-size;
        width: $icon-size;
        color: white;
        transition: margin $expand-anim-speed ease-out;
    }

    .sidebar-link-text {
        color: $text-color;
        opacity: 0;
        transition: opacity $expand-anim-speed ease-out;
        white-space: nowrap;
        user-select: none;
        line-height: 24px;
    }

    &.expanded {
        .sidebar-link-icon :slotted(*) {
            margin-right: 1rem;
        }

        .sidebar-link-text {
            opacity: 1;
        }
    }
}
</style>