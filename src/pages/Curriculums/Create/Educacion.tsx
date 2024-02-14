import { useState } from "react"
import {FaTrash, FaPlus} from 'react-icons/fa'

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

export default function Educacion({ /* setData, setTab, data */setTab }: { setData: any, setTab: any, data: any }) {

    //const { educacion: educacionData } = data

    const [data, setData] = useState(initData)
    const [educacion, setEducacion] = useState<InitData[]>([])
    const [showForm, setShowForm] = useState(false)
    const [finished, setFinished] = useState(false)

    function handleChange(e: any) {
        const { name, value } = e.target
        //@ts-ignore
        setData(prev => ({ ...prev, [name]: value }))
    }

    function handleAdd(){
        setShowForm(true)
    }

    function handleAddEducacion(e: any){
        e.preventDefault()
        if(finished){
            data.graduacion = 'En curso'
        }
        const newEducacion = [...educacion, data]
        setEducacion(newEducacion)
        setShowForm(false)
        setData(initData)
    }

    function handleNext(){
        setTab(3)
    }

    function handleDelete(index: number){
        const newEducacion = [...educacion]
        newEducacion.splice(index, 1)
        setEducacion(newEducacion)
    }

    console.log(educacion)

    const view = educacion.length > 0 && !showForm ? (
        <>
            {
                educacion.map((ed: any, index: number)=>{
                    return (
                        <div className="my-4 rounded-md border border-[#0a776460] cursor-pointer hover:border-[#0a776490] hover:scale-[1.01] transition p-6 relative">
                            <button className=" z-20 absolute right-6 top-6" onClick={() => handleDelete(index)}>
                                <FaTrash className="text-red-500"/>
                            </button>
                            <p className=" text-lg text-[#0a7764] font-bold ml-4">{ed.institucion}, <span className=" font-semibold">{ed.titulo}</span></p>
                            <p className=" text-base text-[#0a7764] font-thin ml-6 mt-2">{ed.campo_estudio}, | <span className=" font-medium">{ed.graduacion}</span></p>
                        </div>
                    )
                })
            }
            <div onClick={handleAdd} className="my-4 rounded-md border-2 border-dashed border-[#0a776460] cursor-pointer hover:border-[#0a776490] hover:scale-[1.01] transition p-6 relative flex justify-center items-center">
                <FaPlus className=" text-[#0a7764] text-xl mr-2 mt-0.5"/>
                <p className=" text-[#0a7764] font-semibold text-xl">Añadir otro título</p>
            </div>
            <div className="mt-10">
                <button onClick={handleNext} type="submit" className="block w-full rounded-md bg-[#19947b] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Continuar</button>
            </div>
        </>
    ) : (
        <form action="" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-8" onSubmit={handleAddEducacion}>
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
                    <label htmlFor="graduacion" className="block text-sm font-semibold leading-6 text-gray-900">Fecha de graduación</label>
                    <div className="mt-2.5">
                        <input disabled={finished} type="date" name="graduacion" onChange={handleChange} id="graduacion" value={data.graduacion} className="block mb-2 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        <label htmlFor="finished" className="text-sm mr-4">Sigo estudiando</label><input type="checkbox" checked={finished} onChange={() => setFinished(!finished)} id="finished" className="translate-y-0.5"  />
                    </div>
                </div>
            </div >
            <div className="mt-10">
                <button type="submit" className="block w-full rounded-md bg-[#19947b] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Añadir</button>
            </div>
        </form>
    )

    return (
        <div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-[#0a7764] sm:text-4xl mb-8">Educación</h2>
            </div>
            {view}
        </div>
    )
}
