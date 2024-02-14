
//import { FaUserTie } from "react-icons/fa";
//import { MdEdit } from "react-icons/md";
//import { MdDelete } from "react-icons/md";
//import { Link } from "react-router-dom";
import NoImage from '../../assets/NoImage.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { IoMale, IoFemale } from "react-icons/io5";

export default function CurriculumCard({ cv }: { cv: any }) {

    const { educacion, aptitudes, experiencia_profesional, idiomas, redes_sociales } = cv


    return (
        <div className=' w-[min(700px,80%)] mx-auto my-10 isolate relative bg-white text-white rounded-md'>
            <div className=" grid grid-cols-[1fr,2fr]">
                <div className="bg-[#cce4f4] relative">
                    <img src={cv.userImgBlob || NoImage} className=" my-8 m-auto rounded-[50%] w-40 h-40 object-cover" />
                    {
                        cv.sexo == "masculino" ? (
                            <IoMale className=' text-blue-600 absolute right-4 bottom-4 text-5xl opacity-60' />
                        ) : (
                            <IoFemale className=' text-pink-600 absolute right-4 bottom-4 text-5xl opacity-60' />
                        )
                    }
                </div>
                <div className="bg-[#0079c8] p-8">
                    <p className=" text-3xl font-bold">
                        {cv.nombre} {cv.apellido}
                    </p>
                    <hr className=" border-[#495e6c] my-4 w-1/3" />
                    <p>
                        {cv.descripcion_profesional}
                    </p>
                </div>
            </div>
            <div className=" grid grid-cols-[1fr,2fr]">
                <div className="bg-[#cce4f4] border-t-[1px] border-[#a3ceeb] text-gray-700 p-6 overflow-hidden flex flex-col gap-2">
                    {/*Sección de contacto*/}
                    <p className="font-semibold mb-2">CONTACTO</p>
                    <div className="flex gap-3 overflow-hidden">
                        <FaLocationDot className='mt-0.5' />
                        <p className='text-sm'>
                            {cv.calle}, {cv.colonia}, {cv.cp}. {cv.ciudad}, {cv.estado}
                        </p>
                    </div>
                    <br />
                    <div className="flex gap-3  overflow-hidden">
                        <MdAlternateEmail className='mt-0.5' />
                        <p className='text-sm text-ellipsis'>
                            {cv.telefono}
                        </p>
                    </div>
                    <br />
                    <div className="flex gap-3  overflow-hidden">
                        <FaPhoneAlt className='mt-0.5' />
                        <p className='text-sm text-ellipsis'>
                            {cv.email}
                        </p>
                    </div>
                    <br />
                    <hr className=' border-gray-900 border-t-[1px] -mt-4 mb-2' />
                    <p className="font-semibold">APTITUDES</p>
                    <ul className=' text-sm list-disc ml-4 mt-2 '>
                        {
                            aptitudes?.map((ap: string) => (
                                <li>{ap}</li>
                            ))
                        }
                    </ul>
                    <hr className=' border-gray-900 border-t-[1px] my-4' />
                    <p className="font-semibold">IDIOMAS</p>
                    <ul className=' text-sm list-disc ml-4 mt-2 '>
                        {
                            idiomas?.map((i: any) => (
                                <li><span className=' font-bold'>{i.nombre}</span>: {i.nivel} <span className=' italic'>{i.nativo ? "Nativo" : ""}</span></li>
                            ))
                        }
                    </ul>
                    <hr className=' border-gray-900 border-t-[1px] my-4' />
                    <p className='font-semibold'>Redes sociales</p>
                    <ul className=' text-sm list-disc ml-4 mt-2 '>
                        {
                            redes_sociales?.map((r: any) => (
                                <li><span className=' font-bold'>{r.nombre}</span>: {r.usuario}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="p-6 text-gray-700">
                    <p className="font-semibold">FORMACIÓN</p>
                    {
                        educacion?.map((ed: any) => (
                            <>
                                <div className="flex gap-3 mt-2 overflow-hidden">
                                    <p className='text-sm'>
                                        Institución: {ed.institucion}
                                    </p>
                                </div>
                                <div className="flex gap-3 mt-2 overflow-hidden">
                                    <p className='text-sm'>
                                        Titulo: {ed.titulo}
                                    </p>
                                </div>
                                <div className="flex gap-3 mt-2 overflow-hidden">
                                    <p className='text-sm'>
                                        Campo de estudio: {ed.campo_estudio}
                                    </p>
                                </div>
                                <div className="flex gap-3 mt-2 overflow-hidden mb-4">
                                    <p className='text-sm'>
                                        Fecha de graduación: {ed.graduacion}
                                    </p>
                                </div>
                            </>
                        ))
                    }
                    <hr className=' border-gray-900 border-t-[1px] my-4' />
                    <p className="font-semibold">HISTORIAL LABORAL</p>
                    {
                        experiencia_profesional?.map((e: any) => (
                            <>
                                <div className="flex gap-3 mt-2 overflow-hidden">
                                    <p className='text-sm'>
                                        Empleo: {e.empleo}
                                    </p>
                                </div>
                                <div className="flex gap-3 mt-2 overflow-hidden">
                                    <p className='text-sm'>
                                        Puesto: {e.puesto}
                                    </p>
                                </div>
                                <div className="flex gap-3 mt-2 overflow-hidden">
                                    <p className='text-sm'>
                                        Descripción: {e.descripcion}
                                    </p>
                                </div>
                                <div className="flex gap-3 mt-2 overflow-hidden mb-4">
                                    <p className='text-sm'>
                                        Fecha de inicio: {e.fecha_inicio}
                                    </p>
                                </div>
                                <div className="flex gap-3 mt-2 overflow-hidden mb-4">
                                    <p className='text-sm'>
                                        Fecha de finalización: {e.fecha_fin}
                                    </p>
                                </div>
                            </>
                        ))
                    }
                    <hr className=' border-gray-900 border-t-[1px] my-4' />
                </div>
            </div>
        </div>
    )
}
