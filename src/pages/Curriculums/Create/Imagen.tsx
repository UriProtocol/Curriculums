import React, { useEffect, useState } from 'react'
import NoImage from '../../../assets/NoImage.jpg'


export default function Imagen({ setTab, data, setData }: { setTab: any, data: any, setData: any }) {

    const [userImg, setUserImg] = useState<string | ArrayBuffer | null>(null)
    //const [userImgBlob, setUserImgBlob] = useState<Blob | null>(null)

    function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {

        const file = event.target.files?.[0];
        if (file) {
            // Read the selected image file and update state
            const reader = new FileReader();
            reader.onloadend = () => {
                //@ts-ignore
                setUserImg(reader.result);
                //@ts-ignore
                setData(({ ...data, userImgBlob: file }));
                return
            };
            reader.readAsDataURL(file);
        }
    }
    function handleSubmit() {
        setTab(2)
    }

    useEffect(() => {
        if (data.userImgBlob) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setUserImg(reader.result);
                return
            }
            reader.readAsDataURL(data.userImgBlob)

        }
    }, [])

    return (
        <div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-[#0a7764] sm:text-4xl">Imagen</h2>
            </div>
            <form method="POST" className="mx-auto mt-16 max-w-xl sm:mt-8" onSubmit={handleSubmit}>
                <div className='flex flex-col justify-center items-center'>
                    <div className=''>
                        <label className='link'>
                            {/* @ts-ignore*/}
                            <img src={userImg || NoImage} className=' h-40 w-40 mb-4 rounded-[50%] overflow-hidden object-cover' />
                            <p className='w-full text-center'>Subir imagen</p>
                            <input type='file' accept='image/*' style={{ display: 'none' }} onChange={e => handleImageUpload(e)} />
                        </label>
                    </div>
                </div>
                <div className={`mt-10 grid grid-cols-2 gap-4`}>
                    {/*<Link to={'/curriculums'}>*/}
                    <button onClick={() => setTab(0)} type="submit" className="block w-full rounded-md bg-gray-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Volver
                    </button>
                    {
                        !userImg ? (
                            <button type="submit" className="block w-full rounded-md bg-[#dca901] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Saltar
                            </button>
                        ) : (
                            <button type="submit" className="block w-full rounded-md bg-[#19947b] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Siguiente
                            </button>
                        )
                    }
                    {/*</Link>*/}
                </div>
            </form>
        </div>
    )
}
