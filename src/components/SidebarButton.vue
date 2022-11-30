<template>
    <router-link class="sidebar-button" :class="{ expanded: isExpanded }" :to="to">
        <span class="icon"><slot></slot></span>
        <span class="text">{{ label }}</span>
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

.sidebar-button {
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

    .icon :slotted(*) {
        font-size: $icon-size;
        height: $icon-size;
        width: $icon-size;
        color: white;
        transition: 0.2s ease-out;
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

        .icon :slotted(*),
        .text {
            color: $accent-color;
        }
    }

    &.expanded {
        .icon :slotted(*) {
            margin-right: 1rem;
        }

        .text {
            opacity: 1;
        }
    }
}
</style>