
import { FaUserTie } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from 'axios'

export default function CurriculumCard({ cv, handleDelete }: { cv: any, handleDelete: any }) {

    const idiomas = cv.idiomas?.split(', ')

    return (
        <div className=' w-[min(1000px,85%)] mx-auto my-10 isolate relative bg-white p-12 pb-5 rounded-md shadow-md'>
            <FaUserTie className=" text-5xl absolute right-14 top-12" />
            <div className="px-4 sm:px-0">
                <h3 className="text-xl font-semibold leading-7 text-gray-900">{cv.nombre}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">{cv.nacimiento}</p>
            </div>
            <div className="mt-4 border-t border-b border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Calle, colonia y CP</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cv.calle}, {cv.colonia}, {cv.cp}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cv.email}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Número de telefono</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cv.celular}</dd>
                    </div>
                </dl>
            </div>
            <div className="px-4 sm:px-0">
                <h3 className="text-xl font-semibold leading-7 text-gray-900 mt-4">Educación</h3>
            </div>
            <div className="mt-4 border-t border-b border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Insitución educativa</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cv.institucion}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Título</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cv.titulo}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Campo de estudio</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cv.campo_estudio}</dd>
                    </div>
                    {
                        cv.graduacion ? (
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Año de graduación</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cv.graduacion}</dd>
                            </div>
                        ) : null
                    }
                </dl>
            </div>
            <div className="px-4 sm:px-0">
                <h3 className="text-xl font-semibold leading-7 text-gray-900 mt-4">Experiencia profesional</h3>
            </div>
            <div className="mt-4 border-t border-b border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Nombre de la empresa</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cv.nombre_empresa}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Puesto</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cv.puesto}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Fecha de inicio</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cv.fecha_inicio}</dd>
                    </div>
                    {
                        cv.fecha_fin ? (
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Fecha de fin</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cv.fecha_fin}</dd>
                            </div>
                        ) : null
                    }
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Descripción</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cv.descripcion}</dd>
                    </div>
                </dl>
            </div>
            <div className="px-4 sm:px-0">
                <h3 className="text-xl font-semibold leading-7 text-gray-900 mt-4">Datos adicionales</h3>
            </div>
            <div className="mt-4 border-t border-b border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Competencias</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cv.competencias}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Hobbies</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cv.hobbies}</dd>
                    </div>
                    {
                        cv.certificaciones ? (
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Certificaciones</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cv.certificaciones}</dd>
                            </div>
                        ) : null
                    }
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Valores</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cv.valores}</dd>
                    </div>
                </dl>
            </div>
            <div className="px-4 sm:px-0">
                <h3 className="text-xl font-semibold leading-7 text-gray-900 mt-4">Idiomas</h3>
            </div>
            <ul className="list-disc ml-8 text-sm text-gray-700 mt-3">
                {
                    idiomas.map((i: string) => {
                        return (
                            <li>{i}</li>
                        )
                    })
                }
            </ul>
            {
                cv.facebook || cv.twitter || cv.linkedIn || cv.instagram ? (
                    <>
                        <div className="px-4 sm:px-0">
                            <h3 className="text-xl font-semibold leading-7 text-gray-900 mt-4">Redes sociales</h3>
                        </div>
                        <div className="mt-4 border-t border-b border-gray-100">
                            <dl className="divide-y divide-gray-100">
                                {
                                    cv.facebook ? (
                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium leading-6 text-gray-900">Facebook</dt>
                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cv.facebook}</dd>
                                        </div>
                                    ) : null
                                }
                                {
                                    cv.twitter ? (
                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium leading-6 text-gray-900">Twitter</dt>
                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cv.twitter}</dd>
                                        </div>
                                    ) : null
                                }
                                {
                                    cv.instagram ? (
                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium leading-6 text-gray-900">Instagram</dt>
                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cv.instagram}</dd>
                                        </div>
                                    ) : null
                                }
                                {
                                    cv.linkedIn ? (
                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                            <dt className="text-sm font-medium leading-6 text-gray-900">LinkedIn</dt>
                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cv.linkedIn}</dd>
                                        </div>
                                    ) : null
                                }
                            </dl>
                        </div>
                    </>
                ) : null
            }
            <div className="flex justify-end gap-4 mt-4">
                {/*<button className="flex justify-between items-center gap-2 rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                    Ver
                    <FaEye className=" text-lg"/>
                </button>*/}
                <Link to={`/curriculums/edit/${cv.id}`}>
                    <button className="flex justify-between items-center gap-2 rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                        Editar
                        <MdEdit className=" text-lg"/>
                    </button>
                </Link>
                <button onClick={() => handleDelete(cv.id)} className="flex justify-between items-center gap-2 rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                    Borrar
                    <MdDelete className=" text-lg"/>
                </button>
            </div>
        </div>
    )
}
