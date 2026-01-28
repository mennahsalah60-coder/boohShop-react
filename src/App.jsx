import './App.css'
import ProductCard from './assets/components/heroSection/ProductCard'
import OurFeatures from './assets/components/OurFeatures/features.jsx'
import shipp from './assets/components/OurFeatures/images/shipping-fast 1.png'
import creditCard from './assets/components/OurFeatures/images/credit-card-buyer 1.png'
import restock from './assets/components/OurFeatures/images/restock 1.png'
import user from './assets/components/OurFeatures/images/user-headset 1.png'

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
    </>
  )
}

export default App
