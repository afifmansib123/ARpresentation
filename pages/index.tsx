import Layout from '../layouts/Main';
import Footer from '../components/footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const LoginPage = () => {

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
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/image7.jfif')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>World's First import Export Business Hub</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>lets take a tour</a>
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
        <div className="row">
          <div className="col-md-6">
            <section className="featured">
              <article style={{ backgroundImage: 'url(/images/image8.jfif)' }} className="featured-item featured-item-large">
                <div className="featured-item__content">
                <h3 style={{ fontSize: '48px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}></h3>
                  <h3 style={{ fontSize: '20px' }}>World's First Import-Export Business Portal</h3>
                  <a href="/firstpage" className="btn btn--rounded">Take a tour</a>
                </div>
              </article>
            </section>
            </div>
        </div>
      </div>

      <section className="featured" style = {{backgroundColor : '#F0F8FF'}}>
        <div className="container">
          <article style={{backgroundImage: 'url(/images/image4.jfif)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>Meet Hundreds of Importer-Exporter Businessmen from World-Wide</h3>
              <a href="#" className="btn btn--rounded">Open a Free account</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/image2.jfif)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>Start a small-scale Import export Business with our guidance</h3>
              <a href="#" className="btn btn--rounded">Tell me more</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/image5.jfif)'}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>Have a business already ? Lets Expand your network</h3>
              <a href="#" className="btn btn--rounded">Open Store here</a>
            </div>
          </article>
        </div>
      </section>


      
      <div className="container" style={{ position: 'relative', marginTop: '0px',marginBottom : '0px'}}>
      <section className="featured">
      <article style={{backgroundImage: 'url(/images/image6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="featured-item featured-item-large">
        <p style={{ color : 'black'}}>Welcome to AmdaniRoptani.com, the premier import export hub for businesses in Bangladesh. Our website offers a comprehensive platform for vendors to sign up and register as importers, exporters, or agents. We provide guidance and support to those looking to open new import export businesses, connecting them with hundreds of importers and exporters from around the world. Our team of dedicated professionals is passionate about helping individuals and businesses succeed in the global trade industry. Thank you for choosing AmdaniRoptani.com for your import export needs.</p>
        <p style={{ color : 'black'}}>the </p>
      </article>
      </section>
      </div>
      
      </div>
      <Footer/>
      </Layout>
      </>
  );
};



export default LoginPage;