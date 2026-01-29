"use client"

import { CardImage } from "@/components/appcard"
import { useEffect, useState } from "react"

const Home = () => {
  const [productList, setProductList] = useState([]);
  const URL = "https://dummyjson.com/products"
  const fetchProductList = async () => {
    const res = await fetch(URL)
    const data = await res.json()
    console.log(data)
    setProductList(data.products)
  };
  useEffect(() => {
    fetchProductList();
  }, [])
  return (
    <div className="flex  flex-col gap-3 p-4 pt-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-5">
        {
          productList.map((item) => (
            <div key={item.id} className="rounded-xl">
              <CardImage
                id={item.id}
                title={item.title}
                description={item.description}
                category={item.category}
                price={item.price}
                discountPercentage={item.discountPercentage}
                rating={item.rating}
                images={item.images}
                brand={item.brand}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home