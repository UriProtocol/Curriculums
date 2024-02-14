import { useLayoutEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gsap from 'gsap'


const initData2 = {
    nombre: 'Juana',
    apellido: 'Díaz',
    nacimiento: '01-01-2000',
    email: 'juanadiaz@gmail.com',
    telefono: '',
    calle: '',
    colonia: '',
    cp: '',
    ciudad: '',
    sexo: 'femenino',
    estado: '',
    descripcion_profesional: "",
    educacion: [
        {
            institucion: "",
            titulo: "",
            campo_estudio: "",
            graduacion: ""
        }
    ],
    experiencia_profesional: [
        {
            nombre_empresa: '',
            puesto: '',
            fecha_inicio: '',
            fecha_fin: '',
            descripcion: '',
        }
    ],
    aptitudes: [
        ""
    ],
    idiomas: [
        {
            nativo: false,
            nombre: "",
            nivel: ""
        }
    ],
    redes_sociales: [
        {
            nombre: "",
            usuario: ""
        }
    ],
    userImgBlob: '',
    fecha_creacion: '03-02-2024',
    terminado: false
}


export default function Navbar({isLoggedIn}:{isLoggedIn: boolean}) {
    const [showSidebar, setShowSidebar] = useState(false)

    const navigate = useNavigate()

    function toggleSidebar() {
        setShowSidebar(!showSidebar)
    }

    function AddUnfinished(){
        localStorage.setItem("cvs", JSON.stringify([{...initData2}]))
        navigate('/')
    }

    const container = useRef(null)

    useLayoutEffect(() =>{
        const ctx = gsap.context(() =>{
            const timeline = gsap.timeline()
            timeline.from("#logo", {
                xPercent: "-80",
                opacity: 0
            }).to("#logo", {
                xPercent: "0",
                duration: 1,
                opacity: 1
            })

            timeline.from("#login", {
                xPercent: "80",
                opacity: 0,
                delay: -1
            }).to("#login", {
                xPercent: "0",
                duration: 1,
                opacity: 1
            })
        }, container)

        return () => ctx.revert()
    }, [])


    return (
        <header className="absolute inset-x-0 top-0 z-50" ref={container}>
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 cursor-pointer" onClick={AddUnfinished} id='logo'>
                        <span className="sr-only">Yu Ti Di</span>
                        <img className="h-8 w-auto" src="https://i0.wp.com/utd.edu.mx/wp-content/uploads/2022/07/LOGO-UTD-NUEVO-2022_solo-01.png?fit=768%2C290&ssl=1" alt="" />
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={toggleSidebar}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to="login" className="text-sm font-semibold leading-6 text-gray-900 opacity-0" id='login'>Iniciar sesión <span aria-hidden="true">&rarr;</span></Link>
                </div>
            </nav>
            {/*<!-- Mobile menu, show/hide based on menu open state. -->*/}
            <div className={`${showSidebar ? 'lg:hidden' : 'hidden'}`} role="dialog" aria-modal="true">
                {/*<!-- Background backdrop, show/hide based on slide-over state. -->*/}
                <div className="fixed inset-0 z-50"></div>
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Yu Ti Di</span>
                            <img className="h-8 w-auto" src="https://i0.wp.com/utd.edu.mx/wp-content/uploads/2022/07/LOGO-UTD-NUEVO-2022_solo-01.png?fit=768%2C290&ssl=1" alt="" />
                        </a>
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={toggleSidebar}>
                            <span className="sr-only">Close menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="py-6">
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Iniciar sesión</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
