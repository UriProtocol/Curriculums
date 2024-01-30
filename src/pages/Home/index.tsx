import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8 ">
               
                <div className="mx-auto max-w-2xl py-24 sm:py-34 lg:py-40">
                    {/*<div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>*/}
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-[#0a7764] sm:text-6xl">Crea tu propio curriculum</h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">Con este módulo podrás crear y manejar tu(s) propio(s) CV en cuestión de minutos.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link to="/curriculums/create" className="rounded-md bg-[#19947b] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Crear mi curriculum</Link>
                            <Link to='/curriculums' className="text-sm font-semibold leading-6 text-gray-900">Ver mis curriculums <span aria-hidden="true">→</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
