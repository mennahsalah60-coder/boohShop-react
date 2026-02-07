import './App.css'
import ProductCard from './components/heroSection/ProductCard'
import OurFeatures from './components/OurFeatures/features.jsx'
import RecommendedProducts from './components/RecommendedProducts/RecommendedProducts.jsx'
import Footer from './components/footer/footer.jsx'

import book1 from './components/RecommendedProducts/images/book1.png'
import book2 from './components/RecommendedProducts/images/book2.png'
import rate from './components/RecommendedProducts/images/Frame 1000004764.png'
import shipp from './components/OurFeatures/images/shipping-fast 1.png'
import creditCard from './components/OurFeatures/images/credit-card-buyer 1.png'
import restock from './components/OurFeatures/images/restock 1.png'
import user from './components/OurFeatures/images/user-headset 1.png'

function App() {

  return (
    <>
      <ProductCard title="ProductCard" />
      <div className='features'>
        <div className="feature">
          <OurFeatures image={shipp} title="Fast & Reliable Shipping" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo." />
        </div>
        <div className="feature">
          <OurFeatures image={creditCard} title="Secure Payment" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo." />
        </div>
        <div className="feature">
          <OurFeatures image={restock} title="Easy Returns" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo." />
        </div>
        <div className="feature">
          <OurFeatures image={user} title="24/7 Customer Support" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo." />
        </div>
      </div>

      <h2>Recommended For You</h2>
      <div className='books'>
        <RecommendedProducts
          image={book1}
          name="Rich Dad And Poor Dad"
          author="Robert T. Kiyosanki"
          descreption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,"
          stars={rate}
          reviews="180"
          rate="4.2"
          price="30.00"
        />

        <RecommendedProducts
          image={book2}
          name="The Design Of Books"
          author="Debbie Berne"
          descreption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada leo. Aliquam in justo varius, Aliquam in justo varius,"
          stars={rate}
          reviews="210"
          rate="4.2"
          price="40.00"
        />
      </div>

      <Footer devloped="<Developed By> EraaSoft <All Copy Rights Reserved @2024"/>
    </>
  )
}

export default App
