import * as React from 'react'
import { useState } from 'react'
import { timer } from 'rxjs';

const Canvas = () => {

    const moonMillisecond = 29.53059

    // need to better calculate the start of the lunar day

    let now = new Date()
    let midnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0, 0, 0
    )
    let earthSeconds = now.getTime() - midnight.getTime()

    const [ moonMillis, setTimes ] = useState(0)

    const calculate = elapsed => {
        let millis = earthSeconds / moonMillisecond + elapsed
        console.log(millis)
        setTimes(millis)
    }

    const TimeH1 = () => {

        console.log(moonMillis)
    
        let milliseconds = (moonMillis % 1000) / 100,
            seconds = Math.floor((moonMillis / 1000) % 60),
            minutes = Math.floor((moonMillis / (1000 * 60)) % 60),
            hours = Math.floor((moonMillis / (1000 * 60 * 60)) % 24);
    
        console.log(`${(hours < 10) ? "0" + hours : hours}
        :
        ${(minutes < 10) ? "0" + minutes : minutes}
        :
        ${(seconds < 10) ? "0" + seconds : seconds}
        :
        ${milliseconds}`)
    
        return (
            <h1>
                {(hours < 10) ? "0" + hours : hours}
                :
                {(minutes < 10) ? "0" + minutes : minutes}
                :
                {(seconds < 10) ? "0" + seconds : seconds}
                :
                {milliseconds}
            </h1>
        ) 
    }
    
    timer(moonMillisecond).subscribe(n => calculate(n + 1))

    return (
        <section className="content">
            <label>The Moon Time is</label>
            <TimeH1 />    
        </section>
    )
}

export default Canvas