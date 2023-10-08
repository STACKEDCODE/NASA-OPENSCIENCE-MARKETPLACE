import { createSignal, createEffect, For, Show } from 'solid-js';
import axios from 'axios';

import { createProject } from "../lib/api/Project";
import Storage from "../lib/Storage";

export function Trendlist() {
    const trends = [
        {
            title: "#ComputerScience",
            mentions: "18k mentions",
            metadata: "Popular with your interests",
        },
        {
            title: "#SpaceApps2023",
            mentions: "220k mentions",
            metadata: "Recommended by NASA",
        },
        {
            title: "#ArtemisII",
            mentions: "7.5k mentions",
            metadata: "Recommended by CSA",
        },
        {
            title: "#Astrophysics",
            mentions: "33k mentions",
            metadata: "Following"
        }
    ]
    return (
        <div class="gap-1 border p-4">
            <h1 class="text-4xl font-ligth text-gray-800 dark:text-white">Trends for you</h1>
            <hr class="p-1 mt-4"></hr>
            {
                trends.map((trend) => (
                    <div class="flex flex-col gap-1">
                        <h1 class="text-2xl font-semibold text-gray-800 dark:text-white">{trend.title}</h1>
                        <span class="text-md text-gray-500 dark:text-gray-300">{trend.mentions}</span>
                        <h3 class="text-xl text-gray-800 dark:text-white">{trend.metadata}</h3>
                        <hr class="p-1 mt-4"></hr>
                    </div>
                ))
            }
        </div>
    )
}

export function Posting() {
    const posts = [
        {
            author: "Sebastian Morales",
            avatar: "https://placehold.co/150x150.png",
            project: "GoodPeople Project",
            date: "2021-10-10",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae dui in risus suscipit facilisis nec sit amet libero. Suspendisse potenti. Nullam dictum sollicitudin purus ac vestibulum. Nullam at nulla venenatis, auctor nisl nec, vulputate ipsum. Etiam molestie tempor sollicitudin. Phasellus eu accumsan arcu, sed iaculis libero. Fusce ultricies turpis sed est ornare, quis vulputate magna vestibulum. Praesent pulvinar vitae lorem sed venenatis. Quisque et mauris justo. #Diversity&Equity",
        },
        {
            author: "Yerko Olave",
            avatar: "https://placehold.co/150x150.png",
            project: "TecnoNext Automation",
            date: "2021-10-09",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae dui in risus suscipit facilisis nec sit amet libero. Suspendisse potenti. Nullam dictum sollicitudin purus ac vestibulum. #SpaceExploration",
            media: "https://placehold.co/600x400.png"
        }
    ]
    return (
        <div class="flex flex-col gap-4 py-4">
            {
                posts.map((post) => (
                    <div class="p-4 bg-white border dark:bg-gray-800">
                        <div class="flex items-start justify-between">
                            <div class="grid grid-cols-4 gap-3">
                                <div>
                                    {
                                        post.avatar && <img class="w-12 h-12 rounded-full" src={post.avatar} alt="avatar" />
                                    }
                                </div>
                                <div class="col-span-3">
                                    <h1 class="text-lg font-semibold text-gray-800 dark:text-white">{post.author}</h1>
                                    <span class="text-md text-gray-500 dark:text-gray-300">{post.project}</span>
                                </div>
                            </div>
                        </div>
                        <p class="mt-2 text-gray-800 dark:text-white">{post.content}</p>
                        {post.media && <img class="mt-2 w-full h-96 object-cover" src={post.media} alt="media" />}
                        <span class="text-md text-gray-500 dark:text-gray-300 py-2">{post.date}</span>
                    </div>
                ))
            }

        </div>
    )
}

export function ProjectModal() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const summary = e.target.summary.value;
        const result = await createProject({ name, summary });
        if (result) {
            document.getElementById("createProject").close();
            window.location.reload();
        }
    }
    return (
        <dialog id="createProject" class="bg-white border rounded-md w-96 p-4">
            <h1 class="text-4xl font-ligth text-gray-800 dark:text-white">Create a new project</h1>
            <hr class="p-1 mt-4"></hr>
            <form onSubmit={handleSubmit} autoComplete="off">
                <div class="mb-6">
                    <input
                        placeholder="Project name"
                        type="text"
                        id="name"
                        class="lg-input bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:ring-blue-800 focus:border-blue-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-800" required>
                    </input>
                </div>
                <div class="mb-6">
                    <input
                        placeholder="Project summary"
                        type="text"
                        id="summary"
                        class="lg-input bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:ring-blue-800 focus:border-blue-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-800" required>
                    </input>
                </div>
                <button
                    type="submit"
                    class="text-white bg-blue-800  hover:bg-blue-900  focus:ring-4 focus:outline-none focus:bg-blue-900 font-medium text-lg w-full w-auto px-5 py-2.5 text-center dark:bg-blue-800  dark:hover:bg-blue-900  dark:focus:ring-red-600">
                    Create
                </button>
            </form>
        </dialog>
    )
}

const getProjects = async ({ type }) => {
    const storage = new Storage();
    if (type == "@me") {
        const result = await axios.get(`https://172.16.68.153:7227/api/Project/@me`,
            {
                headers: {
                    Authorization: `Bearer ${storage.get("token")}`
                }
            }
        ).then((res) => { return res.data.Data });
        return result;
    }
    else {
        const result = await axios.get(`https://172.16.68.153:7227/api/Project`,
            {
                headers: {
                    Authorization: `Bearer ${storage.get("token")}`
                }
            }
        ).then((res) => { return res.data.Data });
        return result;
    }

}

export function Projectlist({ type }) {
    const [projects, setProjects] = createSignal([{}])
    createEffect(async () => {
        const result = await getProjects(type);
        setProjects(result);
    })
    return (
        <div>
            <ProjectModal />
            <div class="pb-4">
                <button
                    onClick={() => { document.getElementById("createProject").showModal(); }}
                    class="text-white bg-blue-800  hover:bg-blue-900  focus:ring-4 focus:outline-none focus:bg-blue-900 font-medium text-lg w-full w-auto px-5 py-2.5 text-center dark:bg-blue-800  dark:hover:bg-blue-900  dark:focus:ring-red-600">
                    Create a new project
                </button>
            </div>
            {
                !projects()
                &&
                <div class="flex flex-col items-center justify-center">
                    <h1 class="text-4xl font-ligth text-gray-800 dark:text-white">You don't have any project yet</h1>
                    <hr class="p-1 mt-4"></hr>
                </div>
            }
            <Show when={projects()}>
                <For each={projects()}>
                    {
                        (project) => project && (project.Name || project.Summary) &&
                            <div class="p-4 gap-4 bg-white border dark:bg-gray-800 grid grid-cols-4">
                                {
                                    project.image && <img class="w-full h-full" src={project.image} alt="avatar" />
                                }
                                <div class="col-span-3 flex-row">
                                    <h1 class="text-4xl pb-2 font-semibold text-gray-800 dark:text-white">{project.Name}</h1>
                                    <span class="text-xl text-gray-500 dark:text-gray-300">{project.Summary}</span>
                                </div>
                            </div>
                    }
                </For>
            </Show>
        </div>
    )
}