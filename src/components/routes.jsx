import Ejemplo from "../pages/ejemplo";
import Home from "../pages/home";
import TodoClassSGC from "../pages/todoClassSGC";
import Layout from "./Layout";

export const childrenRouterList = [
    {
        index: true,
        Component: Home,
        text: "Home"
    },
    {
        path: "login",
        Component: Ejemplo,
        text: "Ejemplo"
    },
    {
        path: "todo-class-sgc",
        Component: TodoClassSGC,
        text: "Todo Class SGC"
    }
]