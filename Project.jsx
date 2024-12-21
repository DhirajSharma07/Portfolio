import React from 'react'



function Project() {
    return (
        <>
            <div className='  py-24 ' id='project'>
                <section className=" pt-20 ">
                    <div className="flex items-center justify-center w-full text-center px-1">
                        <div className="w-full max-w-lg">
                            <h1 className="text-4xl font-bold uppercase tracking-widest">Project</h1>
                            <p className="my-8 ">
                                <span className="text-sm w-full  flex items-center justify-center  px-1">
                                Here you will find some of the personal portfolio and starbucks projects that I created with each project containing its own case study
                                </span>
                            </p>
                        </div>
                    </div>

                    <section className=' flex  flex-col justify-center items-center gap-y-6'>
                        {/* 1 project */}
                        <div className="container flex flex-col gap-6 pt-10  px-5 justify-evenly lg:flex-row  w-full lg:px-40  ">
                            <div className=" lg:w-1/2  flex items-center justify-center  ">


                                <div className=" h-72  flex ">
                                    <img
                                        src="/port.jpg"
                                        alt=""
                                        className="w-full   bg-cover bg-no-repeat mix-blend-difference"
                                    />
                                </div>
                            </div>

                            <div className=" lg:w-1/2  flex flex-col gap-6  items-center justify-center   ">
                                <h3 className=' text-2xl font-bold'>personal portfolio</h3>
                                <p className=' text-sm font-medium px-20 '>Developed a personal portfolio to showcase a collection of projects, skills, Designed an interactive and responsive user interface to ensure compatibility across all devices.  </p>
                                <button
                                    className="py-3 px-10 mt-6 rounded-md bg-orange-600 text-white font-bold uppercase tracking-wider text-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" >
                                    view project
                                </button>
                            </div>
                        </div>

                        {/* 2 project */}
                       
                        <div className="container flex flex-col gap-6  px-5 justify-evenly lg:flex-row  w-full lg:px-40  ">
                            <div className=" lg:w-1/2  flex items-center justify-center  ">
                                <div className=" h-72  flex ">
                                    <img
                                        src="/barist.jpg"
                                        alt=""
                                        className="w-full   bg-cover bg-no-repeat mix-blend-screen"
                                    />
                                </div>



                            </div>
                            <div className=" lg:w-1/2  flex flex-col gap-10  items-center   ">
                                <h3 className=' text-2xl font-bold'>Starbucks UI</h3>
                                <p className=' text-sm font-medium'>Developed a personal portfolio to showcase a collection of projects, skills, Designed an interactive and responsive user interface to ensure compatibility across all devices.  </p>
                                <button
                                    className="py-3 px-10 mt-10 rounded-md bg-orange-600 text-white font-bold uppercase tracking-wider text-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" >
                                    view project
                                </button>
                            </div>


                        </div>
                        {/* 3 project */}
                        {/* <hr className=' border-orange-600 border-2 w-full' /> */}
                        {/* <div className="container flex flex-col gap-6 h-96  px-5 justify-evenly lg:flex-row  w-full lg:px-40  ">
                            <div className=" lg:w-1/2  flex items-center justify-center  ">


                            <div className="flex justify-center h-48 lg:h-72 w-48 lg:w-72 items-center bg-orange-600 overflow-y-hidden">
                                    <img
                                        src=""
                                        alt="Example"
                                        className="w-full h-auto object-contain "
                                    />
                                </div>




                            </div>
                    

                            <div className=" lg:w-1/2  flex items-center justify-center ">
                                <h3 className=' text-2xl capitalize font-bold'>project detail</h3>


                            </div>

                        </div> */}
                    </section>

                </section>

            </div>
        </>
    )
}

export default Project
