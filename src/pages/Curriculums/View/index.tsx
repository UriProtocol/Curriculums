import { useEffect, useState } from "react"
import CurriculumCard from "../../../components/curriculums/CurriculumCard"
import axios from 'axios'

export default function CurriculumsView() {
    const [cvs, setCvs] = useState([])
    useEffect(() =>{
        getCvs()
    }, [])
    async function getCvs(){
        const response = await axios.get('http://localhost:5000/curriculum/ver')
        console.log(response)
        setCvs(response.data.result)
    }
    async function handleDelete(id){
        const response = await axios.delete(`http://localhost:5000/curriculum/eliminar/${id}`)
        console.log(response)
        getCvs()
    }
    return (
        <div className='mt-28'>
            {
                cvs.map((cv, index) =>{
                    return (
                        <CurriculumCard key={cv.id || index} cv={cv} handleDelete={handleDelete}/>
                    )
                })
            }
        </div>
    )
}
