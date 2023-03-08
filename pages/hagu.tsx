import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const haguPage = () => {
  return (
    <Layout>
      <PageIntro />

     

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Best of Amdani Roptani</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Port Clearence</h4>
                <p>Get International items delivered to your factory in days</p>
              </div>
            </li>
            
            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Easy Payments</h4>
                <p>We take care of your Transactions and LC papers</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Authenticity Guaranteed</h4>
                <p>Every vendor here is AR varified which mean 0% chance of getting frauded</p>
              </div>
            </li>
            
            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Talk to an Expert</h4>
                <p>Have a chat with our global market experts regarding your import-export business</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <a href="https://www.cat.com/en_US/products/new/equipment.html" className="btn btn--rounded btn--border">Machines - Light</a>
      <a href="#" className="btn btn--rounded btn--border">Machines - Heavy</a>
      <a href="#" className="btn btn--rounded btn--border">Machines - Construction</a>
      <a href="#" className="btn btn--rounded btn--border">Construction Items</a>
      <a href="#" className="btn btn--rounded btn--border">Raw metarial - Construction</a>
      <a href="#" className="btn btn--rounded btn--border">Raw Metarial - PP and PNP</a>
      <a href="#" className="btn btn--rounded btn--border">Steel - Bar</a>
      <a href="#" className="btn btn--rounded btn--border">Steel - custom</a>
      <a href="#" className="btn btn--rounded btn--border">Garments and clothings</a>
      <a href="#" className="btn btn--rounded btn--border">Fruits and Vegetables</a>
      <a href="#" className="btn btn--rounded btn--border">Vehicles - brand new</a>
      <a href="#" className="btn btn--rounded btn--border">Machines - second hand</a>
      <a href="#" className="btn btn--rounded btn--border">Cotton</a>
      <a href="#" className="btn btn--rounded btn--border">Fish</a>
      <a href="#" className="btn btn--rounded btn--border"></a>

      <ProductsFeatured></ProductsFeatured>
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default haguPage