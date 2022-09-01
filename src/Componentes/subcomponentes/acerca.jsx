import React, { Component } from "react";

class Acerca extends Component {
    render() {
        return (
            <div className="rounded-t-2xl p-10 ">
                <div className="grid grid-cols-1 gap-5 p-5 px-24 text-center">
                    <div className="col-span-1 border-b-4 border-second-color border-dotted pb-[60px]">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="col-span-1 grid grid-rows-3 ">
                                <div className="row-span-1  text-left self-center ">
                                    <h1 className="text-6xl text-white "> Premios </h1>
                                </div>
                                <div className="row-span-1  text-center self-center">
                                    <h1 className="text-8xl text-second-color  "> Generales  </h1>
                                </div>
                                <div className="row-span-1 text-right self-center">
                                    <h1 className="text-6xl text-white  "> En efectivo </h1>
                                </div>
                            </div>
                            <div className="col-span-1 grid grid-rows-3 ">

                                <div className="row-span-1 grid grid-cols-2 gap-0 self-center border-b-4 border-second-color border-solid pb-5">
                                    <div className="col-span-1 text-white">
                                        <h3 className="text-6xl text-white ">
                                            34Km
                                        </h3>
                                    </div>
                                    <div className="row-span-1 col-span-1 text-white">
                                        <h3 className="text-6xl text-white ">
                                            $250
                                        </h3>
                                    </div>
                                </div>

                                <div className="row-span-1 grid grid-cols-2 gap-0 self-center border-b-4 border-second-color border-solid pb-5">
                                    <div className="col-span-1 text-white ">
                                        <h3 className="text-6xl text-white ">
                                            21Km
                                        </h3>
                                    </div>
                                    <div className="col-span-1 text-white">
                                        <h3 className="text-6xl text-white ">
                                            $150
                                        </h3>
                                    </div>
                                </div>

                                <div className="row-span-1 grid grid-cols-2 gap-0 self-center pb-5">
                                    <div className="col-span-1 text-white ">
                                        <h3 className="text-6xl text-white ">
                                            10Km
                                        </h3>
                                    </div>
                                    <div className="col-span-1 text-white">
                                        <h3 className="text-6xl text-white ">
                                            $100
                                        </h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 py-[41px]">
                        <h3 className="mb-14 text-6xl text-white ">
                            Categor&iacute;as disponibles
                        </h3>
                        <div className="grid grid-cols-6 gap-7 text-center text-white">
                            <div className="col-span-2">
                                <div className="grid grid-rows-3 text-2xl border-l-second-color border-l-4 border-dotted border-r-second-color ">
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-4xl">Categor&iacute;a</p>
                                    </div>
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-7xl  text-second-color">Open</p>
                                    </div>
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-4xl">18 - 29 A&ntilde;os</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-span-2">
                                <div className="grid grid-rows-3 text-2xl border-l-second-color border-l-4 border-dotted">
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-4xl">Categor&iacute;a</p>
                                    </div>
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-7xl  text-second-color">Master A</p>
                                    </div>
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-4xl">30 - 40 A&ntilde;os</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-2">
                                <div className="grid grid-rows-3 text-2xl border-second-color border-l-4 border-r-4 border-dotted ">
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-4xl">Categor&iacute;a</p>
                                    </div>
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-7xl  text-second-color">Master B</p>
                                    </div>
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-4xl">41 - 50 A&ntilde;os</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-3">
                                <div className="grid grid-rows-3 text-2xl border-l-second-color border-l-4 border-dotted ">
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-4xl">Categor&iacute;a</p>
                                    </div>
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-7xl  text-second-color">Master C</p>
                                    </div>
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-4xl">51 - 60 A&ntilde;os</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-span-3">

                                <div className="grid grid-rows-3 text-2xl border-l-second-color border-r-4 border-l-4 border-dotted border-r-second-color ">
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-4xl">Categor&iacute;a</p>
                                    </div>
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-7xl  text-second-color">Master D</p>
                                    </div>
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-4xl">61 - 65+ A&ntilde;os</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Acerca;