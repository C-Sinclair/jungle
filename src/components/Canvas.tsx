import * as React from 'react'
import { useState } from 'react'

const Canvas = () => {

    const [ times, setTimes ] = useState({
        moonHours: 0,
        moonMins: 0,
        moonSecs: 0
    })

    // need to better calculate the start of the lunar day
    const calculate = () => {
        let now = new Date()
        let midnight = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            0, 0, 0
        )
        let earthSeconds = now.getTime() - midnight.getTime()
        let moonSeconds = earthSeconds / 27.322 

        let secs = moonSeconds.toFixed(0).slice(-2)
        let mins = (moonSeconds / 60).toFixed(0).slice(-2)
        let hours = (moonSeconds / 3600).toFixed(0).slice(-2)
        
        setTimes({
            moonHours: parseInt(hours),
            moonMins: parseInt(mins),
            moonSecs: parseInt(secs)
        })
    }

    calculate()

    return (
        <section className="content">
            <label>The Moon Time is</label>
            <h1>{ `${times.moonHours}:${times.moonMins}:${times.moonSecs}` }</h1>
        </section>
    )
}

export default Canvas