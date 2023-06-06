'use client';
import CardsSection from '@/components/CardsSection'
import { getServices } from '@/utils/api';
import { usePathname } from 'next/navigation';
import {use} from "react"

const Services = async() => {
  const pathname = usePathname();
  const services = await getServices();
  
  return (
    <>
      {services && 
        <CardsSection type="services" data={services} pathname={pathname}/>
      }
    </>
  )
}

export default Services