import React from 'react'

type Props = {}

export default function BackArrow({ }: Props) {
    const text = "<---";
    return (
        <a className='backarrow' href='/'>{text}</a>
    )
}