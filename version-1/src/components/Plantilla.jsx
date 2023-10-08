import { A, useLocation } from "@solidjs/router";
import { HomeIcon, SquaresPlusIcon, MagnifyingGlassIcon } from "./Icons";

function Header() {
    return (
        <nav class="bg-white border-b dark:bg-gray-900">
            <div class="max-w-screen-xl p-4">
                <A href="/" class="flex sm:ml-64">
                    <img src="/NASA_logo.svg" class="h-10 mr-3" alt="Science Interlinked" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Science Interlinked</span>
                </A>
            </div>
        </nav>

    )
}

function Sidebar({ children }) {
    const location = useLocation();
    const menu = [
        { name: "Home", href: "/", icon: <HomeIcon class="h-8" /> },
        { name: "My projects", href: "/projects", icon: <SquaresPlusIcon class="h-8" /> },
        { name: "Explore", href: "/explore", icon: <MagnifyingGlassIcon class="h-8" /> }
    ]
    return (
        <div>
            <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul class="space-y-2 font-semibold text-2xl">
                        {
                            menu.map((item) => (
                                <li class="flex items-center w-full">
                                    <A href={item.href} class={
                                        location.pathname == item.href ?
                                            "flex items-center p-2 text-gray-100 rounded-lg dark:text-white bg-blue-900 dark:bg-gray-700 group w-full"
                                            :
                                            "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full"}>
                                        {item.icon}
                                        <span class="ml-3">{item.name}</span>
                                    </A>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </aside>
            <div class="p-4 sm:ml-64">
                {children}
            </div>
        </div>
    )
}

const Plantilla = (props) => {
    return (
        <div class={props.class}>
            <Header />
            <Sidebar>
                {props.children}
            </Sidebar>

        </div>
    );
};
export default Plantilla;
