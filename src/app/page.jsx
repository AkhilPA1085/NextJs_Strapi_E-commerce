'use client';
import Section from "@/components/Section";
import CardsSection from "@/components/CardsSection";
import BannerSwiper from "@/components/BannerSwiper";

import { getProducts, getServices } from "@/utils/api";


const Home = async()=> {
  const services = await getServices();
  const products = await getProducts();
  return (
    <div>
      
      <BannerSwiper/>

      <Section />


      {services && 
        <CardsSection type="services" data={services} limit={3}/>
      }

      {products && 
        <CardsSection type="products" data={products} limit={3}/>
      }

    </div>
  );
}



export default Home;



