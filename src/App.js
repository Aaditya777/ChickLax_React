
import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import './App.css';
import Header from "./Components/Header"
import MenuContainer from "./Components/MainContainer"
import BannerName from './Components/BannerName';
import React, { useEffect, useState } from "react";
import masalaChick from './Components/images/masalaChick.jpg'
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from './Components/MenuCard';
import { MenuItems, Items } from './Components/Data'
import ItemCard from './Components/ItemCard';
import DebitCard from './Components/DebitCard';
import CartItem from './Components/CartItem';
import { useStateValue } from './Components/StateProvider';



function App() {

  //Main dish state
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === 'buger01')
  )
  const [{cart}, dispatch] = useStateValue();
  useEffect(() => {
    const MenuLi = document.querySelectorAll("#menu li");
    
    function setMenuActive(){
      MenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
   
    MenuLi.forEach((n) => n.addEventListener("click", setMenuActive));

     //Menu Card Active toggle
    const menuCards = document.querySelector(".rowContainer")
    .querySelectorAll(".rowMenuCard");

    function setMenuCardActive(){
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCards.forEach((n) => n.addEventListener("click",setMenuCardActive));

  },[isMainData, cart]);

  //set main dish item on filter
  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId))
  }
 
  return (
    <div className="App">
      {/* Header Section */}
      <Header />


      {/*  Main Container */}
      <main>
        <div className="mainContainer">

          {/* Banner */}
          <div className='banner'>
            <BannerName name={"Aaditya"} discount={"20"} link={"#"}/>
            <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
             alt='' className='deliveryPic'/>
          </div>



          {/* dishContainer   */} 
          
          <div className='dishContainer'>
            <div className='menuCard'>
              <SubMenuContainer name={"Menu Category"}/>
            </div>
            <div className='rowContainer'>
              {MenuItems && MenuItems.map((data) => (
                <div key={data.id} onClick={() => setData(data.itemId)}>
                  <MenuCard imgSrc={data.imgSrc} name={data.name}  isActive={data.id == 1 ? true:false}/>
                </div>
              ))
              }

            </div>
 
            <div className='dishitemContainer'>
              {
                isMainData && isMainData.map((data) =>(
                  <ItemCard 
                  key={data.id} 
                  itemId = {data.id}
                  imgSrc={data.imgSrc} 
                  name={data.name} 
                  rating={data.ratings} 
                  price={data.price}
                  />
                ))
              }
            </div>
          </div>         
        </div>
        <div className="rightMenu">
          <div className='debitCardContainer'>
            <div className='debitCard'>
              <DebitCard/>
            </div>
          </div>
          
          {!cart ? (<div></div>) : 
          (<div className='cartCheckOutContainer'>
            <SubMenuContainer name={"Cart Items"}/>
            <div className="cartContainer">
              <div className='cartItems'>
                  {
                    cart && cart.map((data) =>(
                      <CartItem
                      key = {data.id}
                      itemId = {data.id} 
                      name={data.name}
                      imgSrc={data.imgSrc}
                      price={data.price}
                  />  
                    ))}
                </div>
            </div>

              
          </div>)
          }<div className='totalSection'>
                <h3>Total</h3>
                <p>
                  <span>$ </span>45.0
                </p>
                </div>
                <button className='checkOut'>CheckOut</button>
          
        </div>

         
      </main>




      {/* Bottom View */}

      <div className='bottomMenu'>
        <ul id="menu">
          
          <MenuContainer link={'#'} icon={<HomeRounded/>}/>

          <MenuContainer link={'#'} icon={<Chat/>}/>
          <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded/>}/>
          <MenuContainer link={'#'} icon={<Favorite/>}/>
          <MenuContainer link={'#'} icon={<SummarizeRounded/>}/>
          <MenuContainer link={'#'} icon={<Settings/>}/>


          <div className="indicator"></div>

        </ul>
      </div>
 
    </div>
  );
}

export default App;
