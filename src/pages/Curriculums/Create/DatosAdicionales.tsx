
export default function DatosAdicionales({ setData, setTab, data }: { setData: any, setTab: any, data: any }) {
    function handleChange(e: any) {
        const { name, value } = e.target
        //@ts-ignore
        setData(prev => ({ ...prev, [name]: value }))
    }
    return (
        <div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-[#0a7764] sm:text-4xl">Datos adicionales</h2>
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
                <div className="mt-10">
                    <button onClick={() => setTab(4)} type="submit" className="block w-full rounded-md bg-[#19947b] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Siguiente</button>
                </div>
            </form>
        </div>
    )
}
