
export default function Educacion({ setData, setTab, data }: { setData: any, setTab: any, data: any }) {

    function handleChange(e: any) {
        const { name, value } = e.target
        //@ts-ignore
        setData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-[#0a7764] sm:text-4xl">Educación</h2>
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
                <div className="mt-10">
                    <button onClick={() => setTab(2)} type="submit" className="block w-full rounded-md bg-[#19947b] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Siguiente</button>
                </div>
            </form>
        </div>
    )
}
