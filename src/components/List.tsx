import { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addToCart, fetchProducts } from "../features/productSlide";
import Product from "./Product";

const List = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log("Products: ", products);
  return (
    <>
      {products.map((product) => {
        return (
          <>
            <Container key={product.id}>
              <Product {...product} />
              <Button onClick={() => dispatch(addToCart(product))}>
                Add to cart
              </Button>
            </Container>
          </>
        );
      })}
    </>
  );
};

export default List;
