
export default function DatosGenerales({ setData, setTab, data }: { setData: any, setTab: any, data: any }) {

    function handleChange(e: any) {
        const { name, value } = e.target
        //@ts-ignore
        setData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-[#0a7764] sm:text-4xl">Datos generales</h2>
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
                <div className="mt-10">
                    <button onClick={() => setTab(1)} type="submit" className="block w-full rounded-md bg-[#19947b] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Siguiente</button>
                </div>
            </form>
        </div>
    )
}
