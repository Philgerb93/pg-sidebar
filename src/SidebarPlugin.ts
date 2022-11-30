import type {App} from "vue";
import { Sidebar, SidebarButton, SidebarMenu } from "@/components";

export default {
    install: (app: App) => {
        app.component("Sidebar", Sidebar);
        app.component("SidebarButton", SidebarButton);
        app.component("SidebarMenu", SidebarMenu);
    }
}

export { Sidebar, SidebarButton, SidebarMenu };