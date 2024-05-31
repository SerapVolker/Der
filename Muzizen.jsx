import React from 'react'
import styled from 'styled-components'
import Rock from '../images/MUZIK.jpg'
const Muzzen = styled.div`

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
const Muzizen = () => {
  return (
    <Muzzen>
        <Muz> 
            <img src={Rock} alt=''/>
            <p>Мужская одежда</p>
        </Muz>
    </Muzzen>
  )
}

export default Muzizen
