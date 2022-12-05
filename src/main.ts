import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { Sidebar, SidebarLink, SidebarButton, SidebarCard, SidebarSection } from './components'

import './assets/main.css'
// import './assets/reset.css'

const app = createApp(App);
app.component("Sidebar", Sidebar);
app.component("SidebarLink", SidebarLink);
app.component("SidebarButton", SidebarButton);
app.component("SidebarCard", SidebarCard);
app.component("SidebarSection", SidebarSection);

app.use(router);
app.mount('#app')
