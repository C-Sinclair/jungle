import * as React from 'react'

const MembersList = members => {

    return (
        <ol>
            { members.map(member => (
                <li>{member.name}</li>
            ))}
        </ol>
    )
}

export default MembersList