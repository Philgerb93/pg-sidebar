import { createApp } from 'vue'
import App from './App.vue'
import SidebarPlugin from './SidebarPlugin'

import './assets/main.css'
import './assets/reset.css'

const app = createApp(App);
app.use(SidebarPlugin);

app.mount('#app')
