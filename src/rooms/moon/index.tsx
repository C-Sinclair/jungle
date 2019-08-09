import * as React from 'react'
import { useState } from 'react'
import Canvas from './Canvas'
import { db, auth } from '../../Firebase'
import MembersList from '../../components/MembersList'
import Board from './Board'

const MoonRoom = props => {

    const [ data, setData ] = useState({
        id: "",
        name: "",
        members: []
    })
    const [ showMembers, setShowMembers ] = useState(false)

    db.collection('rooms')
        .where('name', '==', 'Moon')
        .get()
        .then(snapshot => {
            snapshot.docs.map(doc => {
                const moonRoom = doc.data() as Room
                setData(moonRoom)
                db.collection('rooms').doc(data.id).update({
                    members: moonRoom.members.push(auth.currentUser)
                })
            })
        })
    
    return (
        <div>
            <Canvas />
            <Board room={data} />
            { showMembers ? (
                <MembersList members={data.members}/>
            ) : (
                <button
                    style={{
                        borderRadius: "25px",
                        backgroundColor: "#41F"
                    }}
                    onClick={_ => setShowMembers(!showMembers)}>

                </button>
            )}
        </div>
    )
}

export default MoonRoom