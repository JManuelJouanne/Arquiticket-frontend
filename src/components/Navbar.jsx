import classNames from "classnames"

export const Navbar = ({status, endSesion}) => {

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-800 py-2 flex justify-end">
            <div className="flex mr-4">
                <button
                    type="button"
                    onClick={() => {if (status) endSesion()}}
                    className={classNames(
                        "text-white flex bg-gray-700 py-1 px-3 rounded-lg ",
                        status ? "hover:bg-gray-600" : "dark:bg-gray-800 cursor-default"
                    )}
                >
                    {status ? "Cerrar Sesión" :"Inicio de Sesión"}
                </button>
            </div>
        </nav>
    )
}