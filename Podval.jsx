import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color:  #1D1A1A;
  height:315px;
  width: 1440px;
`
const Wrapper = styled.div`
  justify-content: space-between;
  display: flex;
`
const B1 = styled.div`
 flex:1;
 color: white;
 padding-top: 60px;
 padding-left: 99px;
 font-size: 24px;
 font-family: "Roboto", sans-serif;
`
const B2 = styled.div`
  flex:1;
  color: white;
 font-size: 24px;
 font-family: "Roboto", sans-serif;
 padding-top: 60px;
 padding-left: 98px;
 padding-bottom: 36;
`

const B3 = styled.div`
 flex:1;
 color: white;
 font-size: 24px;
 font-family: "Roboto", sans-serif;
 padding-top: 60px;
 padding-left: 74px;
 padding-bottom: 36px;
`
const B4 = styled.div`
  flex:2;

`
const Podval = () => {
  return (
<Container>
<Wrapper>
  <B1>
    <p>Пн-Вс 10:00-19:00</p>
    <p>+(996)703-717-108</p>
  </B1>
  <B2>
    <p>Мужчинам</p>
    <p>Женщинам</p>
    <p>Новинки</p>
  </B2>
  <B3>
    <p>Оплата</p>
    <p>Доставка</p>
  </B3>
</Wrapper>
</Container>
  )
}

export default Podval
