import Plantilla from "../components/Plantilla"
import { MagnifyingGlassIcon, SparklesIcon } from "../components/Icons"
import { Trendlist, Posting } from "../components/ContentList"
export default function Home() {
    return (
        <Plantilla>
            <div class="grid grid-cols-4 gap-4">
                <div class="col-span-3 px-4">
                    <div class="grid grid-cols-4">
                        <form class="col-span-3">
                            <label for="search" class="mb-2 text-md font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                                <input type="search" id="search" class="block w-full p-4 text-lg text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search now!" required />
                                <button type="submit" class="text-white absolute right-0 top-0 bottom-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-md px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <MagnifyingGlassIcon class="h-6" aria-hidden="true" />
                                </button>
                            </div>
                        </form>
                        <button class="col-span-1 text-white bg-blue-800  hover:bg-blue-900  focus:ring-4 focus:outline-none focus:bg-blue-900 font-medium text-lg w-full w-auto px-5 py-2.5 text-center dark:bg-blue-800  dark:hover:bg-blue-900  dark:focus:ring-red-600">
                            Create
                        </button>
                    </div>
                    {/*  */}
                    <Posting />
                    {/*  */}
                </div>
                <Trendlist />
            </div>

        </Plantilla>
    )
}