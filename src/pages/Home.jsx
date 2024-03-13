import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
        <div>
          <Announcement/>
          <Navbar class="hidden"/>
          <Slider class="hidden"/>
          <h1 style={{padding:20}}>C A T E G O R I E S</h1>
          <Categories class="hidden"/>
          <h1 style={{padding:20}}>P O P U L A R <span style={{padding:"15px"}}></span> P R O D U C T S</h1>
          <Products class="hidden"/>
          <Newsletter class="hidden"/>
          <Footer class="hidden"/>

          <script src="/src/script.js"></script>
        </div>
  )
}

export default Home