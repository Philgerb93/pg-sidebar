<template>
    <div class="sidebar-header">
        {{ title }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        }
    }
});
</script>