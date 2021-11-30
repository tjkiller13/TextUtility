import React,{useState} from 'react'

// props.alert && is used to check first condition and if its true then show second condition

export default function Alert(props) {

    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (            
            props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}! </strong> {props.alert.msg}
                
            </div>
            
        
    )
}
