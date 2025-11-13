import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./carts.css";

const Carts = ({ carts, setCarts }) => {
  return (
    <div className="carts-container mt-3">
      <div className="carts-item-container">
        {carts.map((cart) => {
          return (
            <Card style={{ width: "18rem" }} key={cart.id}>
              <Card.Img variant="top" src={cart.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{cart.title}</Card.Title>
                <Card.Text>
                  <b>${cart.price.toFixed(2)}</b>
                </Card.Text>
                <Button
                  variant="outline-danger"
                  onClick={() =>
                    setCarts(carts.filter((c) => c.id !== cart.id))
                  }
                >
                  Remove Form Carts
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <h4>
        Item: {carts.length} item - Total Price: $
        {carts.reduce((prev, cart) => {
          return prev + cart.price;
        }, 0).toFixed(2)}
      </h4>
      <button className="btn btn-warning">Checkout</button>
    </div>
  );
};

export default Carts;
