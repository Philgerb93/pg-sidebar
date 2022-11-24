<template>
    <router-link class="sidebar-button" :to="to">
        <span class="icon"><slot></slot></span>
        <span class="text">{{ label }}</span>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
});
</script>

<style lang="scss" scoped>

</style>