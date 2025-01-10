import ProductList from "@/components/shared/product/product-list";
import { getLatestsProducts } from "@/lib/actions/product.actions";

export default async function Homepage() {
  const latestProduct = await getLatestsProducts();

  return (
    <>
      <ProductList data={latestProduct} title="Newest Arrivals" />
    </>
  );
}
