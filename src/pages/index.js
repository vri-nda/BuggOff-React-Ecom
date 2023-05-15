import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import { useState } from "react";


export default function Home() {

  const [prods, setProds] = useState([]);

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Bugg Off</title>
        
      </Head>

      
      <Header />

      <main className="max-w-screen-2xl mx-auto" >
        <Banner />

        <ProductFeed />
        
      </main>
    </div>
  );
}
