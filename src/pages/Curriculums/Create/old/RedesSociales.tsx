
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function RedesSociales({ setData, setTab, data }: { setData: any, setTab: any, data: any }) {
    const navigate = useNavigate()

    function handleChange(e: any) {
        const { name, value } = e.target
        //@ts-ignore
        setData(prev => ({ ...prev, [name]: value }))

    }
    async function handleSubmit(e: any) {
        e.preventDefault()
        const response = await axios.post('http://localhost:5000/curriculum/agregar', {
            nombre: data.nombre,
            apellido: data.apellido,
            nacimiento: data.nacimiento,
            email: data.email,
            celular: data.celular,
            calle: data.calle,
            colonia: data.colonia,
            cp: data.cp,
            sexo: data.sexo,
            institucion: data.institucion,
            titulo: data.titulo,
            campo_estudio: data.campo_estudio,
            graduacion: data.graduacion,
            nombre_empresa: data.nombre_empresa,
            puesto: data.puesto,
            fecha_inicio: data.fecha_inicio,
            fecha_fin: data.fecha_fin,
            descripcion: data.descripcion,
            competencias: data.competencias,
            hobbies: data.hobbies,
            certificaciones: data.certificaciones,
            valores: data.valores,
            idiomas: data.idiomas,
            facebook: data.facebook,
            instagram: data.instagram,
            twitter: data.twitter,
            linkedIn: data.linkedIn
        })
        console.log(response)
        alert('Curriculum añadido!')
        //navigate('/curriculums')
    }

    return (
        <div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-[#0a7764] sm:text-4xl">Redes sociales</h2>
            </div>
            <form method="POST" className="mx-auto mt-16 max-w-xl sm:mt-8" onSubmit={handleSubmit}>
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
                <div className="mt-10">
                    {/*<Link to={'/curriculums'}>*/}
                    <button type="submit" className="block w-full rounded-md bg-[#19947b] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Completar</button>
                    {/*</Link>*/}
                </div>
            </form>
        </div>
    )
}
