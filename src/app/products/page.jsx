'use client';
import CardsSection from '@/components/CardsSection'
import { getProducts } from '@/utils/api';
import { usePathname } from 'next/navigation';


const page = async() => {
  const pathname = usePathname();
  const products = await getProducts();
 
  return (
    <>
    {products && 
      <CardsSection type="products" data={products} pathname={pathname}/>
    }
    </>
  )
}

export default page