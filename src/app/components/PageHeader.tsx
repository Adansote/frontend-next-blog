import React from 'react'
import { text } from 'stream/consumers'


interface Prop {
    text: string;
}
const PageHeader = ({ text }: Prop) => {
    return (
        <h1 className="text-4xl text-center font-extrabold dark:text-white flex justify-center items-center ">{text}</h1>
    )
}

export default PageHeader
