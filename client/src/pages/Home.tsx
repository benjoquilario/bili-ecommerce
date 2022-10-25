import Product from "../components/Product";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";

import { useGetProductsQuery } from "../services/products";
import {} from "../store/cart/slice";

const Home = (): JSX.Element => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();

  console.log(isError && error);

  return (
    <div className="content">
      <form></form>
      {isLoading && <LoadingBox />}
      {isSuccess && (
        <ul className="products">
          {products?.map((product: any, index: number) => (
            <Product key={index} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
