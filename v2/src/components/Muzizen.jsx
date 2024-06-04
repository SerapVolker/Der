import React from 'react'
import styled from 'styled-components'
import Rock from '../images/MUZIK.jpg'
import Notrock from '../images/ZENSHINA.jpg'
const Muzzen = styled.div`
display: flex;
`
const Muz = styled.div`
    text-align: center;
    p{
        font-size: 36px;
        border:2px solid rgb(134, 133, 133);
        background:white;
    }
   img{
    width: 610;
    height: 720;
   }
`
const Zen = styled.div`
  text-align: center;
  p{
    font-size: 36px;
        border:2px solid rgb(134, 133, 133);
        border-collapse: 100px;
        background:white;
  }
  img{
    width: 610;
    height: 720;
   }
`
const Muzizen = () => {
  return (
    <Muzzen>
        <Muz> 
            <img src={Rock} alt=''/>
            <p>Мужская одежда</p>
        </Muz>
        <Zen>
          <p>Женская одежда</p>
          <img src={Notrock} alt=''/>
        </Zen>
    </Muzzen>
  )
}

export default Muzizen
