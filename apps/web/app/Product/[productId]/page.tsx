import React from "react";
import { LoadingSpinner } from "ui";
import ProductDescription from "../../components/ProductDescription";
import ImageCarousel from "../../components/ImageCarousel";
import loadable from "next/dynamic";
import "./styles.css";

export const dynamic = "force-dynamic";
const ProductCarousel = loadable(
  () => import("../../components/ProductCarousel"),
  {
    loading: () => <LoadingSpinner />,
  }
);
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = async () => {
  const data = await fetch(`http://0.0.0.0:3000/api/product/getById/1234`, {
    cache: "no-cache",
  });
  const product = await data.json();
  return (
    <>
      <div className="component-product">
        <div className="component-images-container">
          <ImageCarousel images={product.images}></ImageCarousel>
          <ProductDescription product={product} />
        </div>
        <h2>Similar Products</h2>
        <ProductCarousel products={product.simialr_prodcut.prodcuts} />
      </div>
    </>
  );
};

export default ProductDetail;
