import 'react'

interface TimerProps {
    elapsed: number
}

const Timer = (props: TimerProps) => {
    const { elapsed } = props
    return (
        <div className="timer">
            <strong>{elapsed}</strong>
        </div>
)}

export default Timer