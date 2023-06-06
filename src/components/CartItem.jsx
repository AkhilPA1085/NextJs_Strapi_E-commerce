'use client';
import { removeCartItem, updateCart } from '@/app/redux/features/cart/cartSlice';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import Button from './Button';

const CartItem = ({data}) => {
    const dispatch = useDispatch();
    const image = data?.attributes?.image?.data?.attributes?.url;
    const attributes = data?.attributes;
    const updateCartItem = (e,key) =>{
      let payload={
        key,
        dataval:key="quantity" ? parseInt(e.target.value):e.target.value,
        id:data.id
      }
      dispatch(updateCart(payload))
    }
    return (
      <div
        key={data.id}
        className="md:flex justify-between items-center mr-5"
      >
        <Image
          width={120}
          height={120}
          src={process.env.NEXT_PUBLIC_API__UPLOAD_URL + image}
          alt={attributes?.title}
        />
        <p>{attributes?.title}</p>
        <p>
          {data?.oneProdPrice} *
          <select name="" id="" onChange={(e)=>updateCartItem(e,"quantity")}>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => (
              <option key={i} defaultValue={data.quantity === q}>
                {q}
              </option>
            ))}
          </select>
        </p>
        <p>{attributes?.price}</p>
        <Button type="outlined" onClick={()=>dispatch(removeCartItem({id:data?.id}))}>remove</Button>
      </div>
    );
}

export default CartItem