import React from 'react';
import { useTimer } from 'react-timer-hook';
import moment from 'moment';

function MyTimer({ expiryTimestamp }) {
    const {
        seconds,
        minutes,
        hours,
        days,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    return (
        <div className='font-Skia'>

            <div className="pc:grid pc:grid-cols-4 pc:gap-5 tab:grid tab:grid-cols-4 tab:gap-3 mob:grid mob:grid-cols-4 mob:gap-2 xmob:grid xmob:grid-cols-4 xmob:gap-1">
                <div className="col-span-6"><h1 className="lg:text-2xl xl:text-5xl 2xl:text-5xl  tab:text-5xl mob:text-2xl">LA CARRERA EMPIEZA EN:</h1></div>
                <div className="col-span-1 grid grid-rows-4 gap-4 ">
                    <div className="row-span-3"><h2 className="lg:text-7xl xl:text-8xl 2xl:text-8xl tab:text-8xl mob:text-5xl xmob:text-3xl">{days}</h2></div>
                    <div className="row-span-4 text-second-color"><h1 className='lg:text-xl xl:text-3xl 2xl:text-3xl tab:text-3xl mob:text-lg xmob:text-base'>DIAS</h1></div>
                </div>
                <div className="col-span-1  grid grid-rows-4 gap-4">
                    <div className="row-span-3"><h2 className="lg:text-7xl xl:text-8xl 2xl:text-8xl tab:text-8xl mob:text-5xl xmob:text-3xl">{hours}</h2></div>
                    <div className="row-span-4 text-second-color"><h1 className='lg:text-xl xl:text-3xl 2xl:text-3xl tab:text-3xl mob:text-lg xmob:text-base'>HORAS</h1></div>
                </div>
                <div className="col-span-1 grid grid-rows-4 gap-4">
                    <div className="row-span-3"><h2 className="lg:text-7xl xl:text-8xl 2xl:text-8xl tab:text-8xl mob:text-5xl xmob:text-3xl">{minutes}</h2></div>
                    <div className="row-span-4 text-second-color"><h1 className='lg:text-xl xl:text-3xl 2xl:text-3xl  tab:text-3xl mob:text-lg xmob:text-base'>MINUTOS</h1></div>
                </div>
                <div className="col-span-1  grid grid-rows-4 gap-4">
                    <div className="row-span-3"><h2 className="lg:text-7xl xl:text-8xl 2xl:text-8xl tab:text-8xl mob:text-5xl xmob:text-3xl">{seconds}</h2></div>
                    <div className="row-span-4 text-second-color"><h1 className='lg:text-xl xl:text-3xl 2xl:text-3xl tab:text-3xl mob:text-lg xmob:text-base'>SEGUNDOS</h1></div>
                </div>
            </div>

        </div>
    );
}

export default function Temporizador() {

    const fin = moment('2022-10-29 04:30:00').format('YYYY-MM-DD HH:mm:ss');
    const act = moment().format('YYYY-MM-DD HH:mm:ss');
    const res = moment(fin).diff(act, 'seconds');
    const time = new Date();
    time.setSeconds(time.getSeconds() + res);
    return (
        <div>
            <MyTimer expiryTimestamp={time} />
        </div>
    );
}