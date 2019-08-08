import * as React from 'react'
import { timer } from 'rxjs'

// maybe do it in moon seconds?
// the moon rotates around rhe earth once every 27.322 days

const Timer = () => {
    let elapsed = 0
    const moonSecs = 1000 * 27.322
    timer(moonSecs).subscribe(_ => {
        elapsed++
    })
    return (
        <div className="timer">
            <p>Moon Seconds</p>
            <strong>{elapsed}</strong>
        </div>
)}

export default Timer