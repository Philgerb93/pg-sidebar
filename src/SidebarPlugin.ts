import type {App} from "vue";
import { Sidebar, SidebarButton, SidebarMenu, SidebarCard } from "@/components";

export default {
    install: (app: App) => {
        app.component("Sidebar", Sidebar);
        app.component("SidebarButton", SidebarButton);
        app.component("SidebarMenu", SidebarMenu);
        app.component("SidebarCard", SidebarCard);
    }
}

export { Sidebar, SidebarButton, SidebarMenu, SidebarCard };