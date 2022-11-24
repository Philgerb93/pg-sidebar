<template>
  <Sidebar>
    <template #content>
      <SidebarHeader title="Dashboard"/>
      <SidebarButton label="Home" to="/">
        <span class="material-icons">face</span>
      </SidebarButton>
      <SidebarButton label="About" to="/about" />
      <SidebarButton label="Home" to="/" />
      <SidebarButton label="About" to="/about" />
      <SidebarHeader title="Dashboard"/>
      <SidebarButton label="Home" to="/" />
      <SidebarButton label="About" to="/about" />
      <SidebarButton label="Home" to="/" />
      <SidebarButton label="About" to="/about" />
    </template>
    <template #bottom>
      <SidebarButton label="Settings" to="/settings">
        <span class="material-icons">face</span>
      </SidebarButton>
    </template>
  </Sidebar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
    };
  },
});
</script>


<style lang="scss">
body {
  margin: 0;
}

#app {
  padding: 0;
  // display: flex;

  // main {
  //   flex: 1 1 0;
  //   padding: 2rem;

  //   @media (max-width: 768px) {
  //     padding: 6rem;
  //   }
  // }
}
</style>
