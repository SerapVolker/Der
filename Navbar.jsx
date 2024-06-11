import React from 'react'
import styled from 'styled-components'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LensIcon from '@mui/icons-material/Lens';
import Logo from '../public/Photo.jpg';
import Banner from  '../public/Ban.jpg';
import Photo2 from '../public/Man.jpg';
import Button2 from '../public/Butt.jpg';
import Photo3 from '../public/Woman.jpg';
import Button3 from '../public/Butt.jpg';
import Photo4 from '../public/Tyt.jpg';
import Bored from '../public/Butt2.jpg';
import Borod from '../public/Dress.jpg';
import Hody from '../public/Hoddy.jpg';
import Instag from '../public/instagram.svg';
import Vkon from '../public/VK.svg';
import Twit from '../public/Twitter.svg';
import Faceb from '../public/Face.svg';
import Yout from '../public/Youtube.svg';
 

const Container = styled.div`


`
const Wrapper =styled.div`
color: #ffffff;
padding: 10px px;
font-size: 25px;
display: flex;
justify-content:space-between;
height: 60px;
margin-top: -10px;
background-color: rgb(0, 0, 0);
`
const Right = styled.div`
flex:4;
text-align: center;

`

const News = styled.div`
    text-align: center;
    padding: 20px;
`
const Us = styled.div`
    flex:1;
    text-align: center;
    padding: 20px;
`
const New = styled.div`
    flex:1;
    text-align: center;
    padding: 20px;
`
const Contact = styled.div`
    flex:1; 
    text-align: center;
    padding: 20px;
 `
 const Basket =styled.div`
 margin-top: 5px;
 text-align: center;
`
const Left = styled.div`
  
`
const Ban = styled.div`
margin-top: 60px;
padding: 60px;
text-align: end;
`

const Rofef = styled.div`
margin-top: 18px;
  margin-left: 50%;
  margin-right: -65%;
`

const Photo = styled.div`
display: flex;
margin-top: 10px;
`
const Text = styled.div`
 font-size: 50px;
 margin-top: -50%;
 text-align: center;
`

const Catalog = styled.div`
text-align: center;
margin-top: 60px;
`
const TextLink = styled.a`
  color: #ffffff;
  font-size: 30px;  
  padding-left: 40px;
  padding-right: 40px;
padding-top: 20px;
padding-bottom: 20px;
background-color: rgb(0, 0, 0);
text-decoration: none;
`
const Con = styled.div`
margin-top: 8%;
 display: flex;
margin-left: 14%;
`
const Back = styled.div`
`
const Text3 = styled.div`
  margin-top: -65px;
text-align: center;
font-size: 35px;
`

const Sem = styled.div`

`
const But = styled.div`
margin-top: -4px;
text-align: center;
`
const Text2  = styled.div`
margin-top: -65px;
text-align: center;
font-size: 35px;
`

const Bit = styled.div`
margin-top: 20px;
margin-left: 1px;
`
const Oln = styled.div`
margin-top: 10%;
text-align: center;
font-size: 50px;
`
const Block = styled.div`
display: flex;
margin-top: 5%;
`
const Jeans = styled.div`
margin-left: 15%;
`
const Dress = styled.div`
margin-left: 5%;
`
const Butte = styled.div`
`
const Hoody = styled.div`
margin-left: 5%;
`
const Baner = styled.div`
  
`
const Text4 = styled.div`
  font-size: 25px;
  margin-top: -20%;
  margin-left: 20%;
`
const Text5 = styled.div`
  font-size: 25px;
  margin-left: 40%;
`
const Text6 = styled.div`
  font-size: 25px;
  text-align: center;
  margin-top: -20%;
`
const Text7 = styled.div`
font-size: 25px;
text-align: center;
`
const Bet = styled.div`
  
`
const Text8 = styled.div`
font-size: 25px;
margin-left: 34%;
margin-top: -20%;
`
const Text9 = styled.div`
font-size: 25px;
margin-left: 40%;
`
const Podval = styled.div`
margin-top: 10%;
background-color: #000000;
height: 400px;
color: #ffffff;
  
`
const Number = styled.div`
color: aliceblue ;
font-size: 30px;
padding-top: 5%;
padding-left: 5%;
`
const Number2 = styled.div`
  padding-top: 40px;
`
const Blocktext = styled.div`
  padding-left: 30%;
  font-size: 30px;
`
const Sev = styled.div`
  margin-top: -110px;

`
const Dev = styled.div`

  margin-top: 45px;
`
const Gev = styled.div`
 margin-top: 4%;
`
const Textset = styled.div`
text-align:center;
font-size:30px;
`
const Rev = styled.div`
  margin-top: -10%;
`
const Nev = styled.div`
  margin-top:45px;
`
const Icons = styled.div`
  display:flex;
  margin-left: 70%;
  margin-top: -8%;
`
const A1 = styled.div`

 margin-left :-60px ;
`
const A2 = styled.div`
margin-left: 20px;
`
const A3 = styled.div`
  margin-left: 20px;
`
const A4 = styled.div`
  margin-left: 20px;
`
const A5 = styled.div`
  margin-left: 20px;
`
const Link = styled.a`
  color:aliceblue;
  display: flex;
  margin-top: 20px;
  text-decoration: none;
`
const Navbar = () => {
  return (
   
    <Container>
    <Wrapper>
      <Right> 
       
      </Right> 
    <News>новости</News>
    <Us> о нас </Us>
    <New> новинки </New> 
    <Contact> контакты</Contact> 
    <Link href="/">
   
    <Basket>
        <ShoppingBasketIcon/>
         </Basket> корзина</Link>
        </Wrapper>    
      <Left>

      </Left>
    <Photo>  
        <Rofef>
          <img src={Logo} alt='Photo'/>
        </Rofef>
      <Ban>  
        <img src={Banner} alt='Ban'/>
        <Text><p>СТИЛЬНАЯ МУЖСКАЯ</p>
        <p>И ЖЕНСКАЯ ОДЕЖДА</p></Text>
             <Catalog>
            <TextLink href="/shop">СМОТРЕТЬ КАТАЛОГ</TextLink>
             </Catalog>
          
      </Ban>
    </Photo>
  <Con>
    <Sem>
      <img src={Photo2} alt='Photo'/>
      <But>
        <img src={Button2} alt='Button'/>
       <Text2><p>МУЖСКАЯ ОДЕЖДА</p></Text2> 
      </But>
    </Sem>
    <Back>
    <img src={Button3} alt='Button3'/>
    <Text3><p>ЖЕНСКАЯ ОДЕЖДА</p></Text3>
      <Bit>
   <img src={Photo3} alt=''/>
      </Bit>
   </Back>
    </Con>  
    <Oln>
    <p>ПОПУЛЯРНЫЕ ТОВАРЫ</p>
    </Oln>
    <Block>
    <Jeans>
      <img src={Photo4} alt='' />
      <Baner>
      <img src={Bored} alt=''/>
      <Text4> <p>Мужские Джинсы </p></Text4>
         <Text5><p>3000 ₽</p> </Text5> 
      </Baner>
    </Jeans>
    <Dress>
      <img src={Borod} alt=''/>
      <Butte>
        <img src={Bored} alt=''/>
        <Text6><p>Платье</p></Text6>
        <Text7><p>4000 ₽</p></Text7>
      </Butte>
    </Dress>
    <Hoody>
      <img src={Hody} alt=''/>
      <Bet>
        <img src={Bored} alt=''/>
        <Text8><p>Толстовка</p></Text8>
        <Text9><p>1600 ₽</p></Text9>
      </Bet>
    </Hoody>
    </Block>
    <Podval>
      <Number><p>Пн-Вс 10:00-19:00</p>
      <Number2>
         <p>+(996)703-717-108</p>
      </Number2>
     </Number>
     <Blocktext>
      
      <Sev><p>Мужчинам</p></Sev>
      <Dev><p>Женщинам</p></Dev>
      <Gev><p>Новинки</p></Gev>
      </Blocktext>
      <Textset>
        <Rev><p>Оплата</p></Rev>
        <Nev><p>Доставка</p></Nev>
      </Textset>
      <Icons>
        <A1>
          <img src={Instag}alt=''/>
        </A1>
        <A2>
            <img src={Vkon} alt=''/>
        </A2>
        <A3>
          <img src={Twit}/>        
          </A3>
          <A4>
          <img src={Faceb}/>    
          </A4>
          <A5>
          <img src={Yout}/>    
          </A5>
      </Icons>
    </Podval>
    </Container>
  
    );
    
}


export default Navbar;