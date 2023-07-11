import * as React from 'react'



import {
    callButton
} from './textInput.module.css'

const TextInput = () => {
    return (
        <div>
            <input />
            <button className={callButton} onClick={getCountry}>Refresh</button>
        </div>
    )
}

const getCountry = () => {

}

export default TextInput