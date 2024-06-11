import React from 'react'
import styled from 'styled-components'
import Noz from '../public/jinz.jpg'
import Insta from '../public/insta2.svg'
import VK from '../public/VK2.svg'
import Tweet from '../public/Twitter2.svg'
import Diamond from '../public/Youtube.svg'
import Emerald from '../public/VK.svg'
import Redstone from '../public/instagram.svg'
import Coal from '../public/Twitter.svg'
import Iron from '../public/Face.svg'
import Black from '../public/Dark.jpg'
import Sas from '../public/DWD.jpg'
import QwQ1 from '../public/QWQ.jpg'
import UwU from '../public/OPO.jpg'
import Iui from '../public/Uiu.jpg'
import Ser from '../public/NMN.jpg'
import Qer from '../public/IOII.jpg'
import Kerry from '../public/Mento.jpg'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
const Height = styled.div`
height: 60px;
padding-top: 10px;
background-color: rgb(0, 0, 0);
width: 200%;
color: aliceblue;
display: flex;
`
const Light = styled.div`
    
`
const News =styled.div`
margin-top: 10px;
margin-left: 17%;
`
const Us =styled.div`
   margin-left: 5%;
   margin-top: 10px;
`
const New =styled.div`
   margin-left: 5%;
   margin-top: 10px;
`
const Contacs =styled.div`
       margin-left: 5%;
       margin-top: 10px;
`
const Corzin = styled.a`
    color: aliceblue;
    margin-top: 10px;
    margin-left: 4%;
    display: flex;
    text-decoration: none;
`
const D2 = styled.div`
    margin-top: 4px;
`
const Korobka = styled.div`
    font-size: 24px;
    background-color: white;


`


const Center = styled.div`
    margin-top: 100;
    img{
    width: 610px;
    height: 878px; 
    }
    padding-left: 415px;
`
const Right = styled.div`
    padding-left:  100px;
    p{
        font-size: 36px;
        display: flex;
    }
    
`
const Knopka = styled.div`
padding-top: 118px;
    button{
        background-color: black;
        width: 295px;
        height: 96px;
        font-size: 24px;
        color: white;
    }
`
const Tew = styled.div`
    margin-top: 10px;
`
const Kruzki1 = styled.div`
    display: flex;
    p{
        border: invinsible;
        background-color: #c4c4c4;
        border-radius: 50%;
        padding: 20px;
        margin-left: 60px;
        margin-top: 20px;
    }
`
const Kruzki2 = styled.div`
    display: flex;
    p{
        border: invinsible;
        background-color: #c4c4c4;
        border-radius: 50%;
        padding: 20px;
        margin-left: 40px;
        margin-left: 60px;
        margin-top: 20px;
    }
`
const Kruzki3 = styled.div`
    img{
        margin-left: 46px;
        padding-top: 140px;
    }
`
const Tovari = styled.div`
    padding-left: 81px;
    padding-top: 103px;
    font-size: 36px;
    img{
        width: 295px;
        height: 316px;
        padding-top: 39px;
        padding-right: 20px;
        padding-bottom: 19px;
    }
`
const Korobka2 = styled.div`
display: flex;

`
const Container = styled.div`
  background-color:  #1D1A1A;
  height:315px;
  width: 100%;
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
 padding-left: 18px;
 padding-bottom: 36;
`

const B3 = styled.div`
 flex:1;
 color: white;
 font-size: 24px;
 font-family: "Roboto", sans-serif;
 padding-top: 60px;
 padding-left: 14px;
 padding-bottom: 36px;
`
const B4 = styled.div`
  flex:2;
  padding-top: 75px;
  padding-right: 892;
  img{
    margin-right: 50px;
  }
`
const Rut = styled.div`
margin-left:13%;
`
const Rat = styled.div`
    margin-left:13%;
`
const B16 = styled.div`
margin-top: 20px;
`
const B17 = styled.div`
    margin-top: 20px;
`
const B18 = styled.div`
    margin-top: 20px;
`
const B19 = styled.div`
    margin-top: 20px;
`
const Ver = styled.a`
     color: aliceblue;
     text-decoration: none;
`
const Tovar = () => {
  return (
    <Korobka>

<Height>
<Light>

</Light>
<News>новости</News>
<Us>о нас</Us>
<New>новинки</New>
<Contacs>контакты</Contacs>
<Corzin href="/">
<D2><ShoppingBasketIcon/></D2> корзина</Corzin>
</Height>
    <Korobka2>
        <Center>
    <img src={Noz} alt=''/>
    </Center>
    <Right>
        <p>Джинсы</p> <p>Цена:  1500 ₽</p>
        
        <Knopka>
        <button><Ver href="/Tovar">Добавить в корзину</Ver></button>
        </Knopka>
        
        <Tew><p>Размеры:</p></Tew>
        <Kruzki1>
            <p>50</p>
            <p>52</p>
            <p>54</p>
        </Kruzki1>
        <Kruzki2>
            <p>56</p>
            <p>58</p>
            <p>60</p>
        </Kruzki2>
        <Kruzki3>
            <img src={Insta} alt=''/>
            <img src={VK} alt=''/>
            <img src={Tweet} alt=''/>
        </Kruzki3>
    </Right>
</Korobka2>
    
    <Tovari>
        <p>С этим товаром покупают</p>
        <Rut>
        <img src={Black} alt=''/>
        <img src={Sas} alt=''/>
        <img src={QwQ1} alt=''/>
        <img src={UwU} alt=''/>
            </Rut>
            <Rat>
        <img src={Iui} alt=''/>
        <img src={Ser} alt=''/>
        <img src={Qer} alt=''/>
        <img src={Kerry} alt=''/>
            </Rat>
       
    </Tovari>
    <Container>
<Wrapper>
  <B1>
    <p>Пн-Вс 10:00-19:00</p>
    <B18>
        <p>+(996)703-717-108</p>
    </B18>
    
  </B1>
  <B2>
    <p>Мужчинам</p>
    
<B16>
    <p>Женщинам</p>
</B16>
 <B17>
     <p>Новинки</p>
    </B17>   
</B2>
   
  
  <B3>
    <p>Оплата</p>
    <B19>
    <p>Доставка</p>
    </B19>

  </B3>
  <B4>
  <img src={Redstone} />
  <img src={Emerald} />
  <img src={Coal} />
  <img src={Iron} />
  <img src={Diamond} />
  </B4>
</Wrapper>
</Container>
    </Korobka>
    
    
  )
}

export default Tovar