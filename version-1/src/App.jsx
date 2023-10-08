import { Route, Routes, useNavigate, useLocation } from "@solidjs/router";
import { onMount } from "solid-js";

import Landing from './views/Landing';
import Login from './views/Login';
import Settings from "./views/Settings";

import Home from './views/Home';
import Projects from "./views/Projects";
import Explore from "./views/Explore";

import Chat from "./views/Chat";

export default function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const token = sessionStorage.getItem("token");
    onMount(() => { if (location.pathname != "login" && !token) { navigate("/login", { replace: true }); } });
    return (
        <Routes>
            <Route path="/" component={token ? Home : Landing} />
            <Route path="/login" component={Login} />
            <Route path="/projects" component={Projects} />
            <Route path="/explore" component={Explore} />
            <Route path="/settings" component={Settings} />
            <Route path="/chat" component={Chat} />
            <Route path="/chat/*" component={Chat} />
        </Routes>
    )
}