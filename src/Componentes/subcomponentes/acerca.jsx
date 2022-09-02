import React, { Component } from "react";

class Acerca extends Component {
    render() {
        return (
            <div className="rounded-t-2xl p-10  ">
                <div className="grid grid-cols-1 gap-5 p-5 px-24 text-center">
                    <div className="col-span-1 border-b-4 border-second-color border-dotted pb-[60px]">
                        <div className="pc:grid pc:grid-cols-2 pc:gap-5 tab:grid tab:grid-cols-2 tab:gap-5 mob:grid mob:grid-cols-2 mob:gap-3 xmob:grid xmob:grid-cols-2 xmob:gap-3">
                            {/* 
                                //* ---------------------------------------------------------------------------------------------------------------
                            */}
                            <div className="pc:col-span-1 tab:col-span-2 grid grid-rows-3 mob:col-span-2 xmob:col-span-2">
                                <div className="row-span-1  pc:text-left tab:text-center mob:text-center xmob:text-center self-center ">
                                    <h1 className="pc:text-6xl text-white tab:text-4xl mob:text-2xl xmob:text-2xl"> Premios </h1>
                                </div>
                                <div className="row-span-1  pc:text-center tab:text-center mob:text-center xmob:text-center self-center">
                                    <h1 className="pc:text-8xl text-second-color  tab:text-6xl mob:text-4xl xmob:text-4xl"> Generales  </h1>
                                </div>
                                <div className="row-span-1 pc:text-right tab:text-center mob:text-center xmob:text-center self-center">
                                    <h1 className="pc:text-6xl text-white  tab:text-4xl mob:text-2xl xmob:text-2xl"> En efectivo </h1>
                                </div>
                            </div>
                            {/* 
                                //* ---------------------------------------------------------------------------------------------------------------
                            */}
                            <div className="pc:col-span-1 tab:col-span-2 grid grid-rows-3 mob:col-span-2 xmob:col-span-2">
                                <div className="row-span-1 grid grid-cols-2 gap-3 self-center border-b-2 border-second-color border-solid pb-5">
                                    <div className="pc:col-span-1 tab:col-span-1 mob:col-span-3 xmob:col-span-3 text-white">
                                        <h3 className="pc:text-6xl text-white tab:text-4xl mob:text-2xl xmob:text-2xl">
                                            34Km
                                        </h3>
                                    </div>
                                    <div className="pc:col-span-1 tab:col-span-1 mob:col-span-3 xmob:col-span-3 text-white">
                                        <h3 className="pc:text-6xl text-white tab:text-4xl mob:text-2xl xmob:text-2xl">
                                            $250
                                        </h3>
                                    </div>
                                </div>

                                <div className="row-span-1 grid grid-cols-2 gap-3 self-center border-b-2 border-second-color border-solid pb-5">
                                    <div className="pc:col-span-1 tab:col-span-1 mob:col-span-3 xmob:col-span-3 text-white ">
                                        <h3 className="pc:text-6xl text-white tab:text-4xl mob:text-2xl xmob:text-2xl">
                                            21Km
                                        </h3>
                                    </div>
                                    <div className="pc:col-span-1 tab:col-span-1 mob:col-span-3 xmob:col-span-3 text-white">
                                        <h3 className="pc:text-6xl text-white tab:text-4xl mob:text-2xl xmob:text-2xl">
                                            $150
                                        </h3>
                                    </div>
                                </div>

                                <div className="row-span-1 grid grid-cols-2 gap-3 self-center pb-5">
                                    <div className="pc:col-span-1 tab:col-span-1 mob:col-span-3 xmob:col-span-3 text-white ">
                                        <h3 className="pc:text-6xl text-white tab:text-4xl mob:text-2xl xmob:text-2xl">
                                            10Km
                                        </h3>
                                    </div>
                                    <div className="pc:col-span-1 tab:col-span-1 mob:col-span-3 xmob:col-span-3 text-white">
                                        <h3 className="pc:text-6xl text-white tab:text-4xl mob:text-2xl xmob:text-2xl">
                                            $100
                                        </h3>
                                    </div>
                                </div>

                            </div>
                            {/* 
                                //* ---------------------------------------------------------------------------------------------------------------
                            */}
                        </div>
                    </div>
                    {/* 
                        //* ---------------------------------------------------------------------------------------------------------------
                    */}
                    <div className="col-span-1 py-[41px]">
                        <h3 className="mb-14 text-6xl mob:text-4xl xmob:text-4xl text-white ">
                            Categor&iacute;as disponibles
                        </h3>
                        {/* 
                            //* ---------------------------------------------------------------------------------------------------------------
                        */}
                        <div className="all:grid all:grid-cols-6 all:gap-7 text-center text-white">

                            {/* 
                                //* ---------------------------------------------------------------------------------------------------------------
                            */}
                            <div className="pc:col-span-2 tab:col-span-7 mob:col-span-7 xmob:col-span-7">
                                <div className="grid grid-rows-3 text-2xl  pc:border-l-4 border-dotted border-second-color tab:border-b-4 mob:border-b-4 xmob:border-b-4">
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-4xl mob:text-2xl xmob:text-2xl">Categor&iacute;a</p>
                                    </div>
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-7xl  text-second-color mob:text-5xl xmob:text-5xl">Open</p>
                                    </div>
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-4xl mob:text-2xl xmob:text-2xl">18 - 29 A&ntilde;os</p>
                                    </div>
                                </div>
                            </div>

                            {/* 
                                //* ---------------------------------------------------------------------------------------------------------------
                            */}
                            <div className="pc:col-span-2 tab:col-span-7 mob:col-span-7 xmob:col-span-7">
                                <div className="grid grid-rows-3 text-2xl border-second-color pc:border-l-4 border-dotted tab:border-b-4 mob:border-b-4 xmob:border-b-4">
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-4xl mob:text-2xl xmob:text-2xl">Categor&iacute;a</p>
                                    </div>
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-7xl mob:text-5xl xmob:text-5xl text-second-color">Master A</p>
                                    </div>
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-4xl mob:text-2xl xmob:text-2xl">30 - 40 A&ntilde;os</p>
                                    </div>
                                </div>
                            </div>
                            {/* 
                                //* ---------------------------------------------------------------------------------------------------------------
                            */}
                            <div className="pc:col-span-2 tab:col-span-7 mob:col-span-7 xmob:col-span-7">
                                <div className="grid grid-rows-3 text-2xl border-second-color pc:border-l-4 pc:border-r-4 border-dotted tab:border-b-4 mob:border-b-4 xmob:border-b-4">
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-4xl mob:text-2xl xmob:text-2xl">Categor&iacute;a</p>
                                    </div>
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-7xl  text-second-color mob:text-5xl xmob:text-5xl">Master B</p>
                                    </div>
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-4xl mob:text-2xl xmob:text-2xl">41 - 50 A&ntilde;os</p>
                                    </div>
                                </div>
                            </div>
                            {/* 
                                //* ---------------------------------------------------------------------------------------------------------------
                            */}
                            <div className="pc:col-span-3 tab:col-span-7 mob:col-span-7 xmob:col-span-7">
                                <div className="grid grid-rows-3 text-2xl border-second-color pc:border-l-4 border-dotted tab:border-b-4 mob:border-b-4 xmob:border-b-4">
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-4xl mob:text-2xl xmob:text-2xl">Categor&iacute;a</p>
                                    </div>
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-7xl  text-second-color mob:text-5xl xmob:text-5xl">Master C</p>
                                    </div>
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-4xl mob:text-2xl xmob:text-2xl">51 - 60 A&ntilde;os</p>
                                    </div>
                                </div>
                            </div>
                            {/* 
                                //* ---------------------------------------------------------------------------------------------------------------
                            */}
                            <div className="pc:col-span-3 tab:col-span-7 mob:col-span-7 xmob:col-span-7">

                                <div className="grid grid-rows-3 text-2xl border-second-color pc:border-r-4 pc:border-l-4 border-dotted">
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-4xl mob:text-2xl xmob:text-2xl">Categor&iacute;a</p>
                                    </div>
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-7xl  text-second-color mob:text-5xl xmob:text-5xl">Master D</p>
                                    </div>
                                    <div className="row-span-1 text-center self-center">
                                        <p className="text-4xl mob:text-2xl xmob:text-2xl">61 - 65+ A&ntilde;os</p>
                                    </div>
                                </div>

                            </div>
                            {/* 
                                //* ---------------------------------------------------------------------------------------------------------------
                            */}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Acerca;