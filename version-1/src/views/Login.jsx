import { A } from "@solidjs/router";
import { useNavigate } from "@solidjs/router";

import Auth from "../lib/Auth"


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


export default function Login() {
    const auth = new Auth()

    const navigate = useNavigate();
    const handleSubmit = async (e) => {

        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        const login = await auth.login(username, password);
        if (login.Status == 200) { navigate("/") }
    };

    return (
        <>
            <Header />
            <main className="flex absolute inset-0">
                <div className="mx-auto p-8 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 justify-self-center place-self-center">
                    <div className="text-center text-3xl text-gray-800 dark:text-white mb-6">
                        Science Interlinked
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        class="text-center px-6"
                    >
                        <div className="mb-6">
                            <input
                                placeholder="Username or email"
                                type="text"
                                id="username"
                                className="lg-input bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:ring-blue-800 focus:border-blue-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-800" required>
                            </input>
                        </div>
                        <div className="mb-6">
                            <input
                                placeholder="Password"
                                type="password"
                                id="password"
                                className="lg-input bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:ring-blue-800 focus:border-blue-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-800" required>
                            </input>
                        </div>
                        <div className="mb-6">
                            <A href="/register" className="mb-4 text-blue-800 hover:text-blue-900 dark:text-blue-800 dark:hover:text-blue-900">
                                Forgot password? Click here
                            </A>
                        </div>
                        <div class="google-btn mx-auto my-auto mb-4" onClick={console.log("Google :D")}>
                            <div class="google-icon-wrapper">
                                <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                            </div>
                            <p class="btn-text"><b>Sign in with google</b></p>
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-blue-800  hover:bg-blue-900  focus:ring-4 focus:outline-none focus:bg-blue-900 font-medium text-lg w-full w-auto px-5 py-2.5 text-center dark:bg-blue-800  dark:hover:bg-blue-900  dark:focus:ring-red-600">
                            Sign in
                        </button>
                    </form>
                </div>
            </main >
        </>
    )
}
