import React from 'react'

export default function BasicInfo(info) {

    //debugger
    return (
        <ul>
            <li>{info.info.name}</li>
            <li>{info.info.lastName}</li>
            <li>{info.info.age}</li>
        </ul>
    )
}