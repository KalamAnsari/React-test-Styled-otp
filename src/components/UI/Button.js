import React from 'react'
import Styles from '../UI/Button.module.css'

const Button = (props) => {
  return (
    <div className={Styles.button}>

     <button onClick={props.hide()}>hide</button>    
    </div>
  )
}

export default Button