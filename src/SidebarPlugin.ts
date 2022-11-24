import type {App} from "vue";
import {Sidebar, SidebarButton, SidebarHeader} from "@/components";

export default {
    install: (app: App) => {
        app.component("Sidebar", Sidebar);
        app.component("SidebarButton", SidebarButton);
        app.component("SidebarHeader", SidebarHeader);
    }
}

export {Sidebar, SidebarButton, SidebarHeader};