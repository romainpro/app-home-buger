import React from 'react'
import Illustration from "../../media/images/background/bg-food.jpg"
import Container from '../elements/Container'
import Header from './pagesSections/Header'



export default function HeroTop() {
  return (
    <div className='bg-primary w-full h-screen '>
        <div className="bg-repeat w-full h-full" style={{backgroundImage:`url(${Illustration})`}}>
           <Container>
            <Header />
           </Container>
        </div>
    </div>
  )
}
