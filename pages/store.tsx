import Layout from '../layouts/Main';
import Footer from '../components/footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const LoginPageX = () => {

  return (

    <>
    <Layout>

    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/image6.jfif')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <p style={{color:"#A9A9A9"}}>welcome to</p>
                <h2>#AmdaniRoptani.com</h2>
                
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-2.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                
                <a href="#" className="btn-shop"><i className="icon-right"></i>License Varification</a>
                <a href="https://bmtf.com.bd/" className="btn-shop"><i className="icon-right"></i>Apply for a Trade License</a>

              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Import</h4>
                <h4>Export</h4>
                <h4>Trade</h4>
                <p>expand your network
                </p>
                <p>meet vendors worldwide</p>
              </div>
            </li>
            
            <li>
            <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Direct Chat with Staffs</h4>
                <p>our hotline service</p>
                <p>ready to assist you</p>
                <p>anywhere anytime</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>International Transactions</h4>
                <p>guarantee for each product from our store</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div className="container" style={{backgroundColor: '#F0FFFF' }} >

      <div className="container" style={{ position: 'relative',  marginBottom: '0px' ,marginTop: '0px'}}>
        
      </div>

      <section className="featured" style = {{backgroundColor : '#F0F8FF'}}>
        <div className="container">
          <article style={{backgroundImage: 'url(/images/ima.png)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>Import items in Catagories : </h3>
              <a href="https://www.cat.com/en_US/products/new/equipment.html" className="btn">Machines-</a>
              <a href="#" className="btn">Constructions-</a>
              <a href="#" className="btn">Electronics-</a>
              <a href="#" className="btn">Architecture-</a>
              <a href="#" className="btn">Raw Metarials-</a>
              <a href="#" className="btn">Vehicles and Vehicle Parts-</a>
              <a href="https://talaadthai.com/en" className="btn">Fruits and Vegetables-</a>


            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/image14.PNG)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>Start Selling : Upload an item</h3>
              <a href="#" className="btn"></a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/OIP.jfif)'}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>Monthly Storefront Package :</h3>
              <a href="#" className="btn">Bath 500 : 1 Item <br/></a>
              <a href="#" className="btn">Bath 990: 2 Item <br/></a>
              <a href="#" className="btn">Bath 990 : 2 Item <br/></a>
              <a href="#" className="btn">Bath 700 : Unlimited Items</a>
            </div>
          </article>
        </div>
      </section>


      
      <div className="container" style={{ position: 'relative', marginTop: '0px',marginBottom : '0px'}}>
      <h1>MY ITEMS</h1>
      <section className="featured">
      
      <h2>SD7 Bulldozer - 50000$ (LC AVAILABLE) </h2>
      
            
            <img src={'/images/xxx.jfif'} alt="Test" />


            <h2>Komatsu 785 Dump Truck - 60000$ (LC AVAILABLE) </h2>
            <img src={'/images/xxx1.png'} alt="Test" />
            
            <h2>van den Heuvel - 70T TELESCOPIC CRAWLER CRANE  - 20000$ (LC AVAILABLE) </h2>
            <img src={'/images/xxx2.jpg'} alt="Test" />
            
          
      </section>
      </div>
      
      </div>
      <Footer/>
      </Layout>
      </>
  );
};



export default LoginPageX;