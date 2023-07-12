import * as React from 'react'


import {
    callButton
} from './textInput.module.css'

const TextInput = () => {

    const textRef = React.useRef(null)
    var textValue = "BR"
    const updateQuery = () => {
        textValue = textRef.value
        console.log(textValue)
    }

    return (
        <div>
            <input ref={textRef} defaultValue={"Enter a 2 digit country code"} onChange={updateQuery}/>
        </div>
    )
}

export default TextInput