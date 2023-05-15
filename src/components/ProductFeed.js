import Image from 'next/image'
import React,{useState, useEffect} from 'react'
import Product from './Product'

function ProductFeed() {

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
 
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
 
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">

      {data && data.slice(0,data.length).map(({ id, title, price, description, category, image }) => (
        <Product 
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
        ))}

    </div>
  )
}

export default ProductFeed
