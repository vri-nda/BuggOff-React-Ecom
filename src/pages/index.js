import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";
import Footer from "../components/Footer";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Bugg Off</title>
      </Head>

      <Header />

      <main className="flex flex-col max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-center">
          <Banner />
        </div>

        <ProductFeed products={products} />
      </main>
      <Footer />
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const products = await fetch("https://fakestoreapi.com/products").then(
//     (res) => res.json());

//   return {
//     props: {
//       products,
//     },
//   };
// }
