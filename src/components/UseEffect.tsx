import { useEffect, useState } from "react"

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  };

const UseEffect = () => {

    const [data, setData] = useState<Product | null>(null);

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const response = await fetch("https://dummyjson.com/product/1")
                const result=await response.json()
                setData(result)
            } catch (error) {
                console.log("error in fetching Data",error);
            }
        };
        fetchData()
    },[])

  return (
    <div>
      {data ? (
        <div>
          <p>ID: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>description: {data.description}</p>
          <p>price: {data.price}</p>
          <p>discountPercentage: {data.discountPercentage}</p>
          <p>rating: {data.rating}</p>
          <p>stock: {data.stock}</p>
          <p>brand: {data.brand}</p>
          <p>category: {data.category}</p>
          <p>thumbnail: {data.thumbnail}</p>
          {data.images.map((img) => (
            <img src={img} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default UseEffect