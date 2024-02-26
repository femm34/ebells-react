import React from 'react'
import './BuyButton.styled.css'

export default function Button(props) {
  return (
    <button className='buyButton'>
        {props.title}
    </button>
  )
}
