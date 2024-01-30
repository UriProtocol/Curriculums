import { useState } from 'react'
import DatosGenerales from './DatosGenerales'
import ExperienciaProfesional from './ExperienciaProfesional'
import Educacion from './Educacion'
import DatosAdicionales from './DatosAdicionales'
import RedesSociales from './RedesSociales'
import axios from 'axios'

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

export default function CreateCurriculum() {
    const [tab, setTab] = useState(0)
    const [data, setData] = useState(initData)

    const curTab = tab === 0 ? 
        <DatosGenerales setData={setData} setTab={setTab}data={data}/> : 
        tab === 1 ? <Educacion setData={setData} setTab={setTab}data={data}/> : 
        tab === 2 ? <ExperienciaProfesional setData={setData} setTab={setTab}data={data}/> : 
        tab === 3 ? <DatosAdicionales setData={setData} setTab={setTab}data={data}/> :
        tab === 4 ? <RedesSociales setData={setData} setTab={setTab} data={data}/> :
        null

    console.log(data)
    console.log(Object.keys(data))

    return (
        <div className="isolate px-6 py-12 lg:px-8 bg-white  w-[min(1000px,85%)] mx-auto mt-28 shadow-md rounded-md">
            {curTab}
        </div>
    )
}
