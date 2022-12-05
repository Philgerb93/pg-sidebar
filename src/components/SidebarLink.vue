<template>
    <router-link @click="onClick" class="sidebar-link" :class="{ expanded: isExpanded }" :to="to">
        <div class="wrapper">
            <span class="sidebar-link-icon" :class="iconSize">
                <slot></slot>
            </span>
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
            iconSize: inject("iconSize") as string,
        }
    },
    methods: {
        onClick(event: MouseEvent) {
            this.handleRipple(this.$el, event);
            this.collapseFromChild("link");
        },
        handleRipple(element: any, ev: any) {
            const rippleElement = document.createElement("span");
            let currentDiameter = 1;
            let currentOpacity = 0.65;
            let animSpeed = 5;
            let animationHandler = setInterval(animateRippleSpread, animSpeed);
            applyRippleStyle();

            function applyRippleStyle() {
                const elementCoordinates = element.getBoundingClientRect();
                const offsetY = ev.clientY - elementCoordinates.y;
                const offsetX = ev.clientX - elementCoordinates.x;

                rippleElement.style.position = "absolute";
                rippleElement.style.height = "5px";
                rippleElement.style.width = "5px";
                rippleElement.style.borderRadius = "100%";
                rippleElement.style.backgroundColor = "#FFFFFF33";
                rippleElement.style.left = `${offsetX}px`;
                rippleElement.style.top = `${offsetY}px`;
                ev.target.appendChild(rippleElement);
            }

            function animateRippleSpread() {
                const maximalDiameter = 50;
                if (currentDiameter <= maximalDiameter) {
                    currentDiameter++;
                    currentOpacity -= 0.65 / maximalDiameter;
                    rippleElement.style.transform = `scale(${currentDiameter})`;
                    rippleElement.style.opacity = `${currentOpacity}`;
                } else {
                    rippleElement.remove();
                    clearInterval(animationHandler);
                }
            }
        }
    }
});
</script>

<style lang="scss" scoped>
$text-color: #bebfc0;
$background-color: #1a2233;
$accent-color: #3c9a7f;
$icon-size: 24px;
$icon-size-small: 16px;
$icon-size-medium: 20px;
$sidebar-padding: calc((60px - $icon-size) / 2);
$hover-anim-speed: 0.2s;
$expand-anim-speed: 0.2s;
$active-border-width: 6px;

.sidebar-link {
    font-family: 'Source Sans Pro', sans-serif;
    height: 48px;
    text-decoration: none;
    padding: 0 $sidebar-padding;
    cursor: pointer;
    font-size: 1rem;
    overflow: hidden; // For the ripple animation
    position: relative; // For the ripple animation

    &.router-link-exact-active {
        border-left: $active-border-width solid $accent-color;
        background-color: lighten($color: $background-color, $amount: 5%);
        cursor: default;
        padding-left: calc($sidebar-padding - $active-border-width);
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
        height: $icon-size;
        width: $icon-size;
        min-width: $icon-size;
        transition: margin $expand-anim-speed ease-out;

        & :slotted(*) {
            color: white;
        }
    
        &.S :slotted(*) {
            font-size: $icon-size-small;
            height: $icon-size-small;
            width: $icon-size-small;
        }

        &.M :slotted(*) {
            font-size: $icon-size-medium;
            height: $icon-size-medium;
            width: $icon-size-medium;
        }

        &.L :slotted(*) {
            font-size: $icon-size;
            height: $icon-size;
            width: $icon-size;
        }
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
        .sidebar-link-icon {
            margin-right: 1rem;
        }

        .sidebar-link-text {
            opacity: 1;
        }
    }
}
</style>