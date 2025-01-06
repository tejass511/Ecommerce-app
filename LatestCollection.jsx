import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    {/* products: Comes from ShopContext and represents the list of all products available.
        latestProducts: A local state that stores the top 10 products. */}
    const { products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);
    
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[products])
     {/*Extracts the top 10 products from the products list whenever it updates and sets it in latestProducts.
         Mechanism:
        Uses products.slice(0, 10) to fetch the first 10 items (assumed to be the latest).
        Updates whenever products (dependency) changes. */}
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
          <Title text1={'LATEST'} text2={'COLLECTIONS'} />
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
          </p>
      </div>

      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection

