import { createApp } from 'vue'
import App from './App.vue'
import { Sidebar, SidebarButton, SidebarCard, SidebarMenu } from './components'

import './assets/main.css'
import './assets/reset.css'

const app = createApp(App);
app.component("Sidebar", Sidebar);
app.component("SidebarButton", SidebarButton);
app.component("SidebarCard", SidebarCard);
app.component("SidebarMenu", SidebarMenu);

app.mount('#app')
