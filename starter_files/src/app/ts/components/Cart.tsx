import * as React from "react";
import ItemCard from "./ItemCard";
import { Item } from "../utils/types";

interface ICartProps {
  items: Item[];
  handleRemoveFromCart: (item: Item) => void;
  handleCheckout: () => void;
}

const Cart = ({ items, handleRemoveFromCart, handleCheckout }: ICartProps) => {
  return items.length === 0 ? (
    <p style={{ textAlign: "center" }}>Cart is empty</p>
  ) : (
    <div>
      <div className="container row mx-auto">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            inCart={true}
            handleCart={handleRemoveFromCart}
          />
        ))}
      </div>
      <button
        className="btn btn-warning"
        onClick={() => handleCheckout()}
        disabled={!items.length}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
