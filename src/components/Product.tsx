import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface IProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Product = (props: IProps) => {
  const products = props;

  return (
    <article style={{ margin: "0 auto" }}>
      <img src={products.image} style={{ height: "300px" }} />

      <h1>{products.title}</h1>
      <p>{products.description}</p>
      <p>€ {products.price}</p>
      <p>Rating: {products.rating.rate}/ 5</p>
    </article>
  );
};

export default Product;
