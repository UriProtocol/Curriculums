import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CurriculumCard from '../../../components/curriculums/CurriculumCard1'
//import generatePDF, { Resolution, Margin, Options } from "react-to-pdf";
//@ts-ignore
import html2pdf from 'html2pdf.js'


export default function SingleCurriculumView() {
    const location = useLocation()
    const cv = location?.state?.cv || {}
    const cvs = location?.state?.cvs || []
    const cvIndex = location?.state?.cvIndex

    const navigate = useNavigate()

    function handleDelete(){
        cvs.splice(cvIndex, 1)
        localStorage.setItem("cvs", JSON.stringify(cvs))
        navigate(-1)
    }

    //const options: Options = {
    //    filename: "cv.pdf",
    //    method: "save",
    //    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    //    // increases the image quality but also the size of the PDF, so be careful
    //    // using values higher than 10 when having multiple pages generated, it
    //    // might cause the page to crash or hang.
    //    resolution: Resolution.EXTREME,
    //    page: {
    //        // margin is in MM, default is Margin.NONE = 0
    //        margin: Margin.SMALL,
    //        // default is 'A4'
    //        format: "letter",
            
    //        // default is 'portrait'
    //        // orientation: "landscape"
    //    },
    //    canvas: {
    //        // default is 'image/jpeg' for better size performance
    //        mimeType: "image/png",
    //        qualityRatio: 1,
    //    },
    //    // Customize any value passed to the jsPDF instance and html2canvas
    //    // function. You probably will not need this and things can break,
    //    // so use with caution.
    //    overrides: {
    //        // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
    //        pdf: {
    //            compress: true,
    //        },
    //        // see https://html2canvas.hertzen.com/configuration for more options
    //        canvas: {
    //            useCORS: true,
    //        },
    //    },
    //};

    // you can also use a function to return the target element besides using React refs
    //const getTargetElement = () => document.getElementById("container");

    function savePdf(){
        const element = document.getElementById('container')
        var opt = {
            margin:       0,
            filename:     'cv.pdf',
            image:        { type: 'png', quality: 1 },
            html2canvas:  { scale: 1 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait'},
          };
           
          // New Promise-based usage:
          html2pdf().from(element).set(opt).save();
    }

    return (
        <div className='flex justify-center items-center flex-col'>
            <div id='container' className=' overflow-hidden w-full'>
                <CurriculumCard cv={cv} />
            </div>
            <div className='flex gap-4 justify-center w-[min(800px,80%)] relative mb-8'>
                <button onClick={() => navigate(-1)} className="cursor-pointer hover:scale-105 transition block rounded-md bg-gray-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Volver
                </button>
                <button onClick={savePdf} className="cursor-pointer hover:scale-105 transition block rounded-md bg-[#19947b] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Descargar pdf
                </button>
                <button onClick={handleDelete} className="cursor-pointer hover:scale-105 transition block rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Eliminar
                </button>
            </div>
        </div>
    )
}
