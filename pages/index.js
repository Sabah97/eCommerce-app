import Head from "next/head";
import Image from "next/image";
// import "semantic-ui-css/semantic.min.css";
import Navbar from "../Components/Navbar";
import ProductGrid from "../Components/ProductGrid";
import SearchItem from "../Components/SearchItem";
export default function Home() {
  return (
    <div>
      <Head></Head>

      <main>
        <Navbar />
        <div className="container">
          {" "}
          <h1 style={{ textAlign: "center", marginTop: "60px" }}>
            Welcome to our shop
          </h1>
          <SearchItem />
          <ProductGrid />
        </div>
      </main>
    </div>
  );
}
