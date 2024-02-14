import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {

    const container = useRef(null)

    useLayoutEffect(() =>{
        const ctx = gsap.context(() =>{
            const timeline = gsap.timeline()
            timeline.from("#title", {
                yPercent: "-80",
                opacity: 0
            }).to("#title", {
                yPercent: "0",
                duration: 0.5,
                opacity: 1
            }).from("#subtitle", {
                yPercent: "+=50",
                opacity: 0,
            }).to("#subtitle", {
                yPercent: "0",
                opacity: 1,
                duration: 0.5
            }).from("#btn-1", {
                opacity: 0,
                xPercent: "-40",
                //delay: -0.5
            }).to("#btn-1", {
                opacity: 1,
                xPercent: "0",
                duration: 1
            }).from("#btn-2", {
                opacity: 0,
                xPercent: "-40",
                delay: -0.5
            }).to("#btn-2", {
                opacity: 1,
                xPercent: "0",
                duration: 1
            })
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8 ">
               
                <div className="mx-auto max-w-2xl py-24 sm:py-34 lg:py-34">
                    <div className="text-center" ref={container}>
                        <h1 className="text-4xl font-bold tracking-tight text-[#0a7764] sm:text-6xl" id="title">Crea tu propio curriculum</h1>
                        <p className="mt-8 text-lg leading-8 text-gray-600 opacity-0" id="subtitle">Con este módulo podrás crear y manejar tu(s) propio(s) CV en cuestión de minutos.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link to="/curriculums/create" className="rounded-md bg-[#19947b] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" id="btn-1">Crear mi curriculum</Link>
                            <Link to='/curriculums' className="text-sm font-semibold leading-6 text-gray-900 group flex items-center gap-2 opacity-0" id="btn-2">Ver mis curriculums <FaLongArrowAltRight className="text-gray-700 group-hover:translate-x-1 transition"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
