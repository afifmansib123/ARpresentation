import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const LoginPage = () => {

  return (
    <div className="container" style={{backgroundColor: 'LightGray' }} >

      <div className="container" style={{ position: 'relative',  marginBottom: '0px' ,marginTop: '0px'}}>
        <div className="row">
          <div className="col-md-6">
            <section className="featured">
              <article style={{ backgroundImage: 'url(/images/image1.jpg)' }} className="featured-item featured-item-large">
                <div className="featured-item__content">
                <img src="/images/logo.png" alt="Amdani-Roptani.com logo" height = "100" width = "100" style={{ position: 'absolute', top: -100, right: -270 }} />
                <h3 style={{ fontSize: '48px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Welcome to Amdani-Roptani.com</h3>
                  <h3 style={{ fontSize: '20px' }}>World's First Import-Export Business Portal</h3>
                  <a href="/firstpage" className="btn btn--rounded">Take a tour</a>
                </div>
              </article>
            </section>
            </div>
        </div>
      </div>

      <section className="featured" style = {{backgroundColor : 'LightGray'}}>
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
              <h3>Become a certified vendor</h3>
              <a href="#" className="btn btn--rounded">Apply</a>
            </div>
          </article>
        </div>
      </section>


      
      <div className="container" style={{ position: 'relative', marginTop: '0px',marginBottom : '0px'}}>
      <section className="featured">
      <article style={{backgroundImage: 'url(/images/image6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}} className="featured-item featured-item-large">
        <p>so now we write</p>
      </article>
      </section>
      </div>

      </div>
  );
};



export default LoginPage;