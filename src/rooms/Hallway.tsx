import * as React from 'react'
import { useState } from 'react'
import { navigate } from '@reach/router'
import { db, collectionData } from '../Firebase';

const Hallway = props => {

    const [ rooms, setRooms ] = useState([{}])

    collectionData(
        db.collection('rooms'),
        'id'
    ).subscribe(rooms => {
        setRooms(rooms)
    })

    const selectRoom = room => {
        // update room contents in the db


        // go to room
        navigate(room.url)
    }

    return (
        <div>
            <h1>Which room will you enter?</h1>
            <ul>
                { rooms.map(room => (
                    <li onClick={_ => selectRoom(room)}>
                        {room}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Hallway