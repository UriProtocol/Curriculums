
export default function ExperienciaProfesional({ setData, setTab, data }: { setData: any, setTab: any, data: any }) {

    function handleChange(e: any) {
        const { name, value } = e.target
        //@ts-ignore
        setData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-[#0a7764] sm:text-4xl">Experiencia profesional</h2>
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
                <div className="mt-10">
                    <button onClick={() => setTab(3)} type="submit" className="block w-full rounded-md bg-[#19947b] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Siguiente</button>
                </div>
            </form>
        </div>
    )
}
