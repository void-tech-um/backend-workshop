import React from "react";
import { Item } from "../utils/types";

interface IItemCardProps {
  item: Item;
  inCart: boolean;
  handleCart: (item: Item) => void;
  disabled?: boolean;
}

const ItemCard = ({ item, inCart, handleCart, disabled }: IItemCardProps) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">
          ${item.price} - {item.calories}kcal
        </p>
        {inCart ? (
          <button className="btn btn-danger" onClick={() => handleCart(item)}>
            Remove from cart
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => handleCart(item)}
            disabled={disabled}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
