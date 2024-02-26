import React from 'react'
import './ArticleCard.Styled.css'
import BuyButton from '../Button/BuyButton';

export default function ArticleCard(props) {
  return (
    <div className='card'>
      <img src="/hqdefault.jpg" alt="" className='card-image' />

      <div className="card-body">
      <h1 className='card-title'>{props.title}</h1>
      <p className='card-paragraph'>Campana chidota color chido. a buen precio, con otras 17 de regalo y una imagen de sna judas tadeo y 7 cadenitas de la virgen de guadalupe</p>
      <BuyButton title={'Comprar ahora'}/>
      <p className='card-paragraph-quote'>Envios a toda la republica mexicana</p>
      </div>

    </div>
  )
}
