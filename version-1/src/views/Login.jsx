import Plantilla from "../components/Plantilla"

import { useNavigate } from "@solidjs/router";

import Auth from "../lib/Auth"

export default function Login() {
    const auth = new Auth()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        const login = await auth.login(username, password);
        if (login.Status == 200){ navigate("/", { replace: true }); }
    };

    return (
        <main className="flex absolute inset-0">
            <div className="mx-auto p-8 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 justify-self-center place-self-center">
                <div className="text-center text-3xl text-gray-800 dark:text-white mb-6">
                    Iniciar Sesión
                </div>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="mb-6">
                        <input
                            placeholder="Nombre de usuario"
                            type="text"
                            id="username"
                            className="lg-input bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:ring-blue-800 focus:border-blue-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-800" required>
                        </input>
                    </div>
                    <div className="mb-6">
                        <input
                            placeholder="Contraseña"
                            type="password"
                            id="password"
                            className="lg-input bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:ring-blue-800 focus:border-blue-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-800" required>
                        </input>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-800  hover:bg-blue-900  focus:ring-4 focus:outline-none focus:bg-blue-900 font-medium text-lg w-full w-auto px-5 py-2.5 text-center dark:bg-blue-800  dark:hover:bg-blue-900  dark:focus:ring-red-600">
                        Ingresar
                    </button>
                </form>
            </div>
        </main>
    )
}