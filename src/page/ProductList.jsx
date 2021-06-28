import { useGlobalContext } from "../context/GlobalState";
import Product from "../components/Product";
import Title from "../components/Title";

const ProductList = () => {
  const { products } = useGlobalContext();

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {products &&
              products.map((product) => {
                return <Product key={product.id} {...product} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
