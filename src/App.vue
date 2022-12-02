<template>
  <Sidebar :bottomPadding="false">
    <template #top>
      <SidebarCard title="PG Sidebar" subtitle="The Cleanest Sidebar" :border="false" >
        <img src="https://media.istockphoto.com/id/1276731827/vector/leaf-vector-illustration-design-template-vector-eps-10.jpg?s=612x612&w=0&k=20&c=OGhPX91RW78rogpHfg9VzDBpMl3pPsML7fkLr0rA3rA="/>
        <!-- <span class="material-icons">face</span> -->
      </SidebarCard>
    </template>
    <template #content>
      <SidebarMenu title="Dashboard" collapsable>
        <SidebarButton label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarButton>
      </SidebarMenu>
      
      <SidebarMenu title="Reports" collapsable collapsed>
        <SidebarButton label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarButton>
      </SidebarMenu>

      <SidebarMenu title="Reports">
        <SidebarButton label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarButton>
      </SidebarMenu>

      <SidebarMenu title="Reports">
        <SidebarButton label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarButton>
      </SidebarMenu>

      <SidebarMenu title="Reports">
        <SidebarButton label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarButton>
      </SidebarMenu>
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
