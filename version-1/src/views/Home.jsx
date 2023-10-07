import Plantilla from "../components/Plantilla"
import { MagnifyingGlassIcon, SparklesIcon } from "../components/Icons"
export default function Home() {
    return (
        <Plantilla>
            <div class="grid grid-rows-3 grid-flow-col gap-4">
                <div class="mx-auto grid grid-cols-4 row-span-3 gap-4 border p-6">
                    <form class="col-span-3">
                        <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <MagnifyingGlassIcon class="h-4" aria-hidden="true" />
                            </div>
                            <input type="search" id="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search now!" required />
                            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <MagnifyingGlassIcon class="w-4 h-4" aria-hidden="true" />
                            </button>
                        </div>
                    </form>
                    <button class="flex gap-2 items-center justify-center w-full px-4 text-md font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Create
                        <SparklesIcon class="w-4 h-4" aria-hidden="true" />
                    </button>
                </div>
                <div class="border p-4 col-span-2"></div>
            </div>
        </Plantilla>
    )
}