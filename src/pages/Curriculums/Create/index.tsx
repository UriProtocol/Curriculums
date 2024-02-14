import { useState } from 'react'
import DatosGenerales from './DatosGenerales'
import ExperienciaProfesional from './ExperienciaProfesional'
import Educacion from './Educacion'
import Aptitudes from './Aptitudes'
import RedesSociales from './RedesSociales'
import axios from 'axios'
import Imagen from './Imagen'
import Idiomas from './Idiomas'
import DescripcionProfesional from './DescripcionProfesional'

const initDataEmpty = {
    nombre: '',
    apellido: '',
    nacimiento: '',
    email: '',
    telefono: '',
    calle: '',
    colonia: '',
    cp: '',
    ciudad: '',
    sexo: '',
    estado: '',
    descripcion_profesional: '',
    educacion: [
    ],
    experiencia_profesional: [
    ],
    aptitudes: [],
    idiomas: [
    ],
    redes_sociales: [
    ],
    userImgBlob: '',
    fecha_creacion: '',
    terminado: false
};

//const initData2 = {
//    nombre: 'Juan',
//    apellido: 'Díaz',
//    nacimiento: '01-01-2000',
//    email: 'juandiaz@gmail.com',
//    telefono: '',
//    calle: '',
//    colonia: '',
//    cp: '',
//    ciudad: '',
//    sexo: 'masculino',
//    estado: '',
//    descripcion_profesional: "",
//    educacion: [
//        {
//            institucion: "",
//            titulo: "",
//            campo_estudio: "",
//            graduacion: ""
//        }
//    ],
//    experiencia_profesional: [
//        {
//            nombre_empresa: '',
//            puesto: '',
//            fecha_inicio: '',
//            fecha_fin: '',
//            descripcion: '',
//        }
//    ],
//    aptitudes: [
//        ""
//    ],
//    idiomas: [
//        {
//            nativo: false,
//            nombre: "",
//            nivel: ""
//        }
//    ],
//    redes_sociales: [
//        {
//            nombre: "",
//            usuario: ""
//        }
//    ],
//    userImgBlob: '',
//    fecha_creacion: '03-02-2024',
//    terminado: false
//}
//localStorage.setItem("cvs", JSON.stringify([{...initData}, {...initData2}]))

export default function CreateCurriculum() {
    const [tab, setTab] = useState(0)
    const [data, setData] = useState(initDataEmpty)

    console.log(data)

    const curTab = tab === 0 ? 
        <DatosGenerales setData={setData} setTab={setTab}data={data}/> : 
        tab === 1 ? <Imagen setTab={setTab} data={data} setData={setData}/> : 
        tab === 2 ? <Educacion setData={setData} setTab={setTab}data={data}/> : 
        tab === 3 ? <ExperienciaProfesional setData={setData} setTab={setTab}data={data}/> : 
        tab === 4 ? <Aptitudes setData={setData} setTab={setTab}data={data}/> :
        tab === 5 ? <RedesSociales setData={setData} setTab={setTab} data={data}/> :
        tab === 6 ? <Idiomas setData={setData} setTab={setTab} data={data}/> :
        tab === 7 ? <DescripcionProfesional setData={setData} setTab={setTab} data={data}/> :
        null

    console.log(data)

    return (
        <div className="isolate px-6 py-12 lg:px-8 bg-white  w-[min(1000px,85%)] mx-auto mt-28 shadow-md rounded-md">
            {curTab}
        </div>
    )
}
