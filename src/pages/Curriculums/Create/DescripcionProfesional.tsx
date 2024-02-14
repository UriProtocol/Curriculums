import { useState } from "react"
import { FaTrash, FaPlus } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import fotoCv from '../../../assets/fotoCv.jpg'
import fotoCv2 from '../../../assets/md.avif'

const initData = {
    institucion: "",
    titulo: "",
    campo_estudio: "",
    graduacion: ""
}
interface InitData {
    institucion: string;
    titulo: string;
    campo_estudio: string;
    graduacion: string;
}

const cv = {
    nombre: 'Juan',
    apellido: 'Díaz',
    nacimiento: '30-10-2000',
    email: 'juand@gmail.com',
    telefono: '+52 618-123-1234',
    calle: 'Zona centro #1264',
    colonia: 'Colonia',
    cp: '30000',
    ciudad: 'Durango',
    sexo: 'masculino',
    estado: 'Durango',
    descripcion_profesional: "Como estudiante en prácticas, ofrezco mi dedicación y entusiasmo para aprender y contribuir en un ambiente laboral dinámico y desafiante. Poseo habilidades de comunicación efectiva, capacidad analítica y orientación al logro.",
    educacion: [
        {
            institucion: "UTD",
            titulo: "Desarrollador de Software",
            campo_estudio: "Técnico",
            graduacion: "2024"
        },
        {
            institucion: "Normal",
            titulo: "Profesor de preparatoria",
            campo_estudio: "Enseñanza",
            graduacion: "En curso"
        }
    ],
    experiencia_profesional: [
        {
            nombre_empresa: 'Software dgo',
            puesto: 'Desarrollador Front End',
            fecha_inicio: 'Febrero del 2021',
            fecha_fin: 'En curso',
            descripcion: 'Trabajo como desarrollador de front end en varios proyectos de la empresa, utilizando tecnologías como react, angular, laravel y vue',
        },
        {
            nombre_empresa: 'Aplicaciones dgo',
            puesto: 'Desarrollador móvil',
            fecha_inicio: 'Agosto del 2018',
            fecha_fin: 'Noviembre del 2020',
            descripcion: 'Trabajé como desarrollador móvil multiplataforma utilzando tecnologías como flutter, react native y swift',
        },
    ],
    aptitudes: [
        "Trabajo bajo presión",
        "Trabajo en equipo",
        "Resolución de problemas"
    ],
    idiomas: [
        {
            nativo: true,
            nombre: "Español",
            nivel: ""
        },
        {
            nativo: false,
            nombre: "Inglés",
            nivel: "C1"
        },
        {
            nativo: false,
            nombre: "Francés",
            nivel: "B1"
        }
    ],
    redes_sociales: [
        {
            nombre: "Facebook",
            usuario: "JuanDíaz"
        },
        {
            nombre: "LinkedIn",
            usuario: "Juan Díaz Sw"
        },
    ],
    userImgBlob: fotoCv2,
    fecha_creacion: '03-02-2024',
    terminado: true
}

export default function DescripcionProfesional({ /* setData, setTab, data */setTab }: { setData: any, setTab: any, data: any }) {

    //const { educacion: educacionData } = data

    const [data, setData] = useState(initData)
    const [educacion, setEducacion] = useState<InitData[]>([])
    const [showForm, setShowForm] = useState(false)

    const navigate = useNavigate()

    function handleChange(e: any) {
        const { name, value } = e.target
        //@ts-ignore
        setData(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        const cvs = JSON.parse(localStorage.getItem("cvs")  ?? "[]")
        const newCvs = [...cvs, cv]
        localStorage.setItem("cvs", JSON.stringify(newCvs))
        navigate("/curriculums")
    }

    return (
        <div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-[#0a7764] sm:text-4xl mb-8">Descripción profesional</h2>
            </div>
            <form action="" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-6">
                    <div className='col-span-6'>
                        <label htmlFor="institucion" className="block text-sm font-semibold leading-6 text-gray-900">Descripción profesional</label>
                        <div className="mt-2.5">
                            <textarea name="institucion" onChange={handleChange} id="institucion" value={data.institucion} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div >
                <div className="mt-10">
                    <button type="submit" className="block w-full rounded-md bg-[#19947b] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Terminar</button>
                </div>
            </form>
        </div>
    )
}
