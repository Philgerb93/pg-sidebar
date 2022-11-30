<template>
    <div class="sidebar-card" :class="{ expanded: isExpanded }">
        <div class="sidebar-card-icon" :class="{ border: border }">
            <slot></slot>
        </div>
        <div class="sidebar-card-info">
            <p class="title">{{ title }}</p>
            <p class="subtitle">{{ subtitle }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false
        },
        border: {
            type: Boolean,
            required: false,
            default: false
        }
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

.sidebar-card {
    display: flex;
    padding: 0 calc($sidebar-padding / 2);

    .sidebar-card-icon {
        width: 46px;
        min-width: 46px;
        height: 46px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.2s ease-out;

        & :slotted(*) {
            width: $icon-size;
            height: $icon-size;
        }

        & :slotted(img) {
            width: 46px;
            height: 46px;
            border-radius: 8px;
        }

        &.border {
            background-color: $accent-color;

            & :slotted(*) {
                width: $icon-size;
                height: $icon-size;
            }
        }
    }

    .sidebar-card-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        opacity: 0;
        transition: 0.2s ease-out;

        .title,
        .subtitle {
            user-select: none;
            white-space: nowrap;
        }

        .title {
            margin: 0;
        }

        .subtitle {
            margin-top: 4px;
            margin-bottom: 0;
            color: $text-color;
            font-size: .875rem;
        }
    }

    &.expanded {
        .sidebar-card-icon {
            margin-right: 1rem;
        }

        .sidebar-card-info {
            opacity: 1;
        }
    }
}
</style>