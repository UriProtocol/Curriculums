import { useEffect, useState } from "react"
import CurriculumCard from "../../../components/curriculums/CurriculumCard1"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import { FaLongArrowAltRight } from "react-icons/fa";

export default function CurriculumsView() {
    const [cvs, setCvs] = useState([])
    useEffect(() => {
        //getCvs()
        getCvsFromLocal()
    }, [])
    //async function getCvs(){
    //    const response = await axios.get('http://localhost:5000/curriculum/ver')
    //    console.log(response)
    //    setCvs(response.data.result)
    //}
    //async function handleDelete(id: number){
    //    const response = await axios.delete(`http://localhost:5000/curriculum/eliminar/${id}`)
    //    console.log(response)
    //    getCvs()
    //}
    function getCvsFromLocal() {
        const cvs = JSON.parse(localStorage.getItem("cvs") || "[]")
        setCvs(cvs)
    }
    console.log(cvs)

    const navigate = useNavigate()
    return (
        <div className='mt-28'>
            <ul role="list" className="divide-y divide-gray-100 w-[min(800px,80%)] mx-auto bg-white p-8 isolate rounded-md shadow-md">
                {
                    cvs.map((cv: any, index) => {
                        return (
                            <li className="flex justify-between gap-x-6 py-5 cursor-pointer bg-white p-4 hover:translate-y-1 hover:bg-zinc-100 rounded transition" onClick={() => navigate(`/curriculums/${index}`, { state: { cv, cvs, cvIndex: index } })}>
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">{cv.nombre} {cv.apellido}</p>
                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{cv.email}</p>
                                    </div>
                                </div>
                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm leading-6 text-gray-900">Terminado: {cv.terminado ? <span className=" text-green-500">Si</span> : <span className=" text-red-500">No</span>}</p>
                                    <p className="mt-1 text-xs leading-5 text-gray-500">Creación: <time>{cv.fecha_creacion}</time></p>
                                </div>
                            </li>
                        )
                    })
                }
                {
                    cvs.length == 0 ? (
                        <>
                            <p className=" text-center mb-2 font-medium">No tienes ningun currículum!</p>
                            <Link to={'/curriculums/create'}>
                                <button className=" mx-auto mt-6 rounded-md bg-[#19947b] px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:brightness-95 hover:scale-[1.01] flex gap-4 items-center group">
                                    Crear mi primer curriculum
                                    <FaLongArrowAltRight 
                                        className="text-xl group-hover:translate-x-2 transition"
                                    />
                                </button>
                            </Link>
                        </>
                    ) : null
                }
            </ul>
        </div>
    )
}
