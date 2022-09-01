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

            <div className="grid grid-cols-4 gap-5 ">
                <div className="col-span-6"><h1 className="text-5xl">LA CARRERA EMPIEZA EN:</h1></div>
                <div className="col-span-1  grid grid-rows-4 gap-4">
                    <div className="row-span-3"><h2 className="text-8xl">{days}</h2></div>
                    <div className="row-span-4 text-second-color"><h1 className='text-3xl'>DIAS</h1></div>
                </div>
                <div className="col-span-1  grid grid-rows-4 gap-4">
                    <div className="row-span-3"><h2 className="text-8xl">{hours}</h2></div>
                    <div className="row-span-4 text-second-color"><h1 className='text-3xl'>HORAS</h1></div>
                </div>
                <div className="col-span-1 grid grid-rows-4 gap-4">
                    <div className="row-span-3"><h2 className="text-8xl">{minutes}</h2></div>
                    <div className="row-span-4 text-second-color"><h1 className='text-3xl'>MINUTOS</h1></div>
                </div>
                <div className="col-span-1  grid grid-rows-4 gap-4">
                    <div className="row-span-3"><h2 className="text-8xl">{seconds}</h2></div>
                    <div className="row-span-4 text-second-color"><h1 className='text-3xl'>SEGUNDOS</h1></div>
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