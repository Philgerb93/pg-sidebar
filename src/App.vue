<template>
  <Sidebar topHeight="60px" topSeparator="background" bottomSeparator="border" collapseOnLink>
    <template #top>
      <SidebarCard title="PG Sidebar" subtitle="The Cleanest Sidebar" :iconBorder="false" >
        <img src="https://media.istockphoto.com/id/1276731827/vector/leaf-vector-illustration-design-template-vector-eps-10.jpg?s=612x612&w=0&k=20&c=OGhPX91RW78rogpHfg9VzDBpMl3pPsML7fkLr0rA3rA="/>
      </SidebarCard>
    </template>
    <template #content>
      <SidebarSection>
        <SidebarLink label="Home" to="/">
          <span class="material-icons">face</span>
        </SidebarLink>
        <SidebarLink label="About" to="/about">
          <span class="material-icons">face</span>
        </SidebarLink>
      </SidebarSection>
      <SidebarSection title="Dashboard" collapsable>
        <SidebarButton label="Button" @click="onClick">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Button" @click="onClick">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Button" @click="onClick">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Button" @click="onClick">
          <span class="material-icons">face</span>
        </SidebarButton>
      </SidebarSection>
      
      <SidebarSection title="Reports" collapsable collapsed>
        <SidebarButton label="Button" @click="onClick">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Button" @click="onClick">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Button" @click="onClick">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Button" @click="onClick">
          <span class="material-icons">face</span>
        </SidebarButton>
      </SidebarSection>

      <SidebarSection title="Reports">
        <SidebarButton label="Button" @click="onClick">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Button" @click="onClick">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Button" @click="onClick">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Button" @click="onClick">
          <span class="material-icons">face</span>
        </SidebarButton>
      </SidebarSection>

      <SidebarSection title="Reports">
        <SidebarButton label="Button" @click="onClick">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Button" @click="onClick">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Button" @click="onClick">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Button" @click="onClick">
          <span class="material-icons">face</span>
        </SidebarButton>
      </SidebarSection>

      <SidebarSection title="Reports">
        <SidebarButton label="Button" @click="onClick">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Button" @click="onClick">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Button" @click="onClick">
          <span class="material-icons">face</span>
        </SidebarButton>
        <SidebarButton label="Button" @click="onClick">
          <span class="material-icons">face</span>
        </SidebarButton>
      </SidebarSection>
    </template>
    <template #bottom>
      <SidebarButton label="Settings" @click="onClick">
        <span class="material-icons">face</span>
      </SidebarButton>
    </template>
  </Sidebar>
  <router-view class="main"></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SidebarSection } from "./components";

export default defineComponent({
    data() {
        return {};
    },
    components: { SidebarSection },
    methods: {
        onClick() {
            console.log("clicked");
        },
    },
});
</script>


<style lang="scss">
.main {
  margin-left: 60px;
  box-sizing: border-box;
  border: 4px solid red;
  height: 100vh;
  width: calc(100vw - 60px);
}
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
