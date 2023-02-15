const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div style={{backgroundImage: 'url(/images/image1.jfif)'}} className="subscribe__content">
          <h4>Become an AmdaniRoptani.com Certified Dealer</h4>

          <form className="subscribe__form">
            <input type="email" placeholder="Email address" />
            <button type="submit" className="btn btn--rounded btn--yellow">Start Application</button>
          </form>
        </div>
      </div>
    </section>
  )
};


export default Subscribe