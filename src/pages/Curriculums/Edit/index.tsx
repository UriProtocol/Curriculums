import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const initData = {
    nombre: '',
    apellido: '',
    email: '',
    celular: '',
    calle: '',
    colonia: '',
    cp: '',
    sexo: 'hombre',
    institucion: '',
    titulo: '',
    campo_estudio: '',
    graduacion: '',
    nombre_empresa: '',
    puesto: '',
    fecha_inicio: '',
    fecha_fin: '',
    descripcion: '',
    competencias: '',
    hobbies: '',
    certificaciones: '',
    valores: '',
    idiomas: '',
    facebook: '',
    instagram: '',
    twitter: '',
    linkedIn: '',
}

export default function EditarCurriculum() {

    const [data, setData] = useState(initData)

    const {id} = useParams()

    const navigate = useNavigate()


    function handleChange(e: any) {
        const { name, value } = e.target
        //@ts-ignore
        setData(prev => ({ ...prev, [name]: value }))
    }

    async function getCurriculum(){
        const response = await axios.get(`http://localhost:5000/curriculum/ver/${id}`)
        console.log(response.data)
        setData(response.data.result[0])
    }

    async function handleSubmit(){
        const response = await axios.put(`http://localhost:5000/curriculum/modificar/${id}`, data)
        console.log(response.data)
        navigate('/curriculums')
    }

    useEffect(() =>{
        getCurriculum()
    }, [])

    return (
        <div className="isolate px-6 py-12 lg:px-8 bg-white  w-[min(1000px,85%)] mx-auto mt-28 shadow-md rounded-md">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-[#0a7764] sm:text-4xl">Editar curriculum</h2>
                <h3 className=" font-bold tracking-tight text-gray-900 sm:text-2xl mt-4">Datos generales</h3>
            </div>
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-6">
                    <div className='sm:col-span-3 col-span-6'>
                        <label htmlFor="nombre" className="block text-sm font-semibold leading-6 text-gray-900">Nombre(s)</label>
                        <div className="mt-2.5">
                            <input type="text" name="nombre" onChange={handleChange} id="nombre" value={data.nombre} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className='sm:col-span-3 col-span-6'>
                        <label htmlFor="apellido" className="block text-sm font-semibold leading-6 text-gray-900">Apellido(s)</label>
                        <div className="mt-2.5">
                            <input type="text" name="apellido" onChange={handleChange} id="apellido" value={data.apellido} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className='col-span-6'>
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                        <div className="mt-2.5">
                            <input type="email" name="email" onChange={handleChange} id="email" value={data.email} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className='col-span-6'>
                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Telefono celular</label>
                        <div className="relative mt-2.5">
                            <div className="absolute inset-y-0 left-0 flex items-center">
                                <label htmlFor="country" className="sr-only">Country</label>
                                <select id="country" name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-0 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                    <option>US</option>
                                    <option>CA</option>
                                    <option>EU</option>
                                </select>
                                {/*<svg className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>*/}
                            </div>
                            <input type="tel" name="celular" onChange={handleChange} id="phone-number" value={data.celular} className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="calle" className="block text-sm font-semibold leading-6 text-gray-900">Calle</label>
                        <div className="mt-2.5">
                            <input type="text" name="calle" onChange={handleChange} id="calle" value={data.calle} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="colonia" className="block text-sm font-semibold leading-6 text-gray-900">Colonia</label>
                        <div className="mt-2.5">
                            <input type="text" name="colonia" onChange={handleChange} id="colonia" value={data.colonia} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="cp" className="block text-sm font-semibold leading-6 text-gray-900">Código postal</label>
                        <div className="mt-2.5">
                            <input type="text" name="cp" onChange={handleChange} id="cp" value={data.cp} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="sm:col-span-3">
                        <label htmlFor="sexo" className="block text-sm font-semibold leading-6 text-gray-900">Sexo</label>
                        <div className="mt-2.5">
                            <select name="sexo" onChange={handleChange} id="sexo" value={data.sexo} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value={'Hombre'}>Hombre</option>
                                <option value={'Mujer'}>Mujer</option>
                                <option value={'Otro'}>Otro</option>
                            </select>
                        </div>
                    </ div>
                </div>
            </form>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl mt-8">Educación</h2>
            </div>
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-6">
                    <div className='col-span-6'>
                        <label htmlFor="institucion" className="block text-sm font-semibold leading-6 text-gray-900">Institución educativa</label>
                        <div className="mt-2.5">
                            <input type="text" name="institucion" onChange={handleChange} id="institucion" value={data.institucion} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className='col-span-6'>
                        <label htmlFor="titulo" className="block text-sm font-semibold leading-6 text-gray-900">Título</label>
                        <div className="mt-2.5">
                            <input type="text" name="titulo" onChange={handleChange} id="titulo" value={data.titulo} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <label htmlFor="campo_estudio" className="block text-sm font-semibold leading-6 text-gray-900">Campo de estudio</label>
                        <div className="mt-2.5">
                            <input type="text" name="campo_estudio" onChange={handleChange} id="campo_estudio" value={data.campo_estudio} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <label htmlFor="graduacion" className="block text-sm font-semibold leading-6 text-gray-900">Año de graduación</label>
                        <div className="mt-2.5">
                            <input type="text" name="graduacion" onChange={handleChange} id="graduacion" value={data.graduacion} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div >
            </form>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl mt-8">Experiencia profesional</h2>
            </div>
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-6">
                    <div className='col-span-6'>
                        <label htmlFor="nombre_empresa" className="block text-sm font-semibold leading-6 text-gray-900">Empresa</label>
                        <div className="mt-2.5">
                            <input type="text" name="nombre_empresa" onChange={handleChange} id="nombre_empresa" value={data.nombre_empresa} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className='col-span-6'>
                        <label htmlFor="puesto" className="block text-sm font-semibold leading-6 text-gray-900">Puesto</label>
                        <div className="mt-2.5">
                            <input type="text" name="puesto" onChange={handleChange} id="puesto" value={data.puesto} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <label htmlFor="fecha_inicio" className="block text-sm font-semibold leading-6 text-gray-900">Fecha de inicio</label>
                        <div className="mt-2.5">
                            <input type="date" name="fecha_inicio" onChange={handleChange} id="fecha_inicio" value={data.fecha_inicio} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <label htmlFor="fecha_fin" className="block text-sm font-semibold leading-6 text-gray-900">Fecha de finalización</label>
                        <div className="mt-2.5">
                            <input type="date" name="fecha_fin" onChange={handleChange} id="fecha_fin" value={data.fecha_fin} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className='col-span-6'>
                        <label htmlFor="descripcion" className="block text-sm font-semibold leading-6 text-gray-900">Descripción</label>
                        <div className="mt-2.5">
                            <textarea name="descripcion" onChange={handleChange} id="descripcion" value={data.descripcion} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div >
            </form>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl mt-8">Datos adicionales</h2>
            </div>
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-6">
                    <div className='col-span-6'>
                        <label htmlFor="competencias" className="block text-sm font-semibold leading-6 text-gray-900">Competencias</label>
                        <div className="mt-2.5">
                            <input type="text" name="competencias" onChange={handleChange} id="competencias" value={data.competencias} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className='col-span-6'>
                        <label htmlFor="hobbies" className="block text-sm font-semibold leading-6 text-gray-900">Hobbies</label>
                        <div className="mt-2.5">
                            <input type="text" name="hobbies" onChange={handleChange} id="hobbies" value={data.hobbies} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className='col-span-6'>
                        <label htmlFor="certificaciones" className="block text-sm font-semibold leading-6 text-gray-900">Certificaciones</label>
                        <div className="mt-2.5">
                            <input type="text" name="certificaciones" onChange={handleChange} id="certificaciones" value={data.certificaciones} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className='col-span-6'>
                        <label htmlFor="valores" className="block text-sm font-semibold leading-6 text-gray-900">Valores</label>
                        <div className="mt-2.5">
                            <input type="text" name="valores" onChange={handleChange} id="valores" value={data.valores} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className='col-span-6'>
                        <label htmlFor="idiomas" className="block text-sm font-semibold leading-6 text-gray-900">Idiomas</label>
                        <div className="mt-2.5">
                            <input type="text" name="idiomas" onChange={handleChange} id="idiomas" value={data.idiomas} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div >
            </form>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl mt-8">Redes sociales</h2>
            </div>
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-6">
                    <div className='col-span-3'>
                        <label htmlFor="facebook" className="block text-sm font-semibold leading-6 text-gray-900">Facebook</label>
                        <div className="mt-2.5">
                            <input type="text" name="facebook" onChange={handleChange} id="facebook" value={data.facebook} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <label htmlFor="twitter" className="block text-sm font-semibold leading-6 text-gray-900">Twitter</label>
                        <div className="mt-2.5">
                            <input type="text" name="twitter" onChange={handleChange} id="twitter" value={data.twitter} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <label htmlFor="instagram" className="block text-sm font-semibold leading-6 text-gray-900">Instagram</label>
                        <div className="mt-2.5">
                            <input type="text" name="instagram" onChange={handleChange} id="instagram" value={data.instagram} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <label htmlFor="linkedIn" className="block text-sm font-semibold leading-6 text-gray-900">LinkedIn</label>
                        <div className="mt-2.5">
                            <input type="text" name="linkedIn" onChange={handleChange} id="linkedIn" value={data.linkedIn} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div >
            </form>
            <div className='flex justify-center mt-8'>
                <button onClick={handleSubmit} className="flex  items-center gap-2 rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                    Guardar cambios
                </button>
            </div>
        </div>
    )
}
