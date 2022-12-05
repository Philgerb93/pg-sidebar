<template>
    <div class="sidebar-logo" :class="{ expanded: isExpanded }">
        <div class="sidebar-logo-icon" :class="{ border: iconBorder }">
            <slot></slot>
        </div>
        <div class="sidebar-logo-info">
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
        iconBorder: {
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
$text-color: #bebfc0;
$accent-color: #3c9a7f;
$icon-size: 44px;
$inner-icon-size: 24px;
$sidebar-padding: calc((60px - $icon-size) / 2);

.sidebar-logo {
    display: flex;
    padding: 0 $sidebar-padding;

    .sidebar-logo-icon {
        width: 44px;
        min-width: 44px;
        height: 44px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.2s ease-out;

        & :slotted(*) {
            width: $icon-size;
            height: $icon-size;
            font-size: $icon-size;
        }

        & :slotted(img) {
            border-radius: 8px;
        }

        &.border {
            background-color: $accent-color;

            & :slotted(*) {
                width: $inner-icon-size;
                height: $inner-icon-size;
                font-size: $inner-icon-size;
            }
        }
    }

    .sidebar-logo-info {
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
        .sidebar-logo-icon {
            margin-right: 1rem;
        }

        .sidebar-logo-info {
            opacity: 1;
        }
    }
}
</style>