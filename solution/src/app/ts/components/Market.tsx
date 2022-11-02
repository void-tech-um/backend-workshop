import React, { FormEvent, useEffect, useState } from "react";
import Cart from "./Cart";
import ItemCard from "./ItemCard";
import ItemFactory from "./ItemFactory";
import { useAuth } from "../utils/auth";

import { Item } from "../utils/types";

import Api from "../utils/api";

const Market = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [cart, setCart] = useState<Item[]>([]);
  const auth = useAuth();

  const token = localStorage.getItem("token");
  const api = new Api();

  const fetchItems = async () => {
    try {
      const items = await api.getItems(token as string);
      setItems(items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAddToCart = (item: Item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleRemoveFromCart = (item: Item) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  const handleAddItem = async (e: FormEvent<HTMLFormElement>, item: Item) => {
    e.preventDefault();
    try {
      const newItem = await api.postItem(item, token as string);
      setItems((prevItems) => [...prevItems, newItem]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckout = () => {
    try {
      cart.forEach(async (item) => {
        await api.deleteItem(item.id, token as string);
      });
      setItems((prevItems) => prevItems.filter((item) => !cart.includes(item)));
      setCart([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Market</h1>
      <div className="row mx-auto">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            inCart={false}
            handleCart={handleAddToCart}
            disabled={cart.some((cartItem) => cartItem.id === item.id)}
          />
        ))}
      </div>
      <h2 style={{ textAlign: "center", marginTop: "3rem" }}>Cart</h2>
      <Cart
        items={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleCheckout={handleCheckout}
      />
      <h2 style={{ textAlign: "center" }}>Sell an Item</h2>
      <ItemFactory handleAddItem={handleAddItem} />
      <button className="btn btn-danger" onClick={() => auth.logout()}>
        Logout{" "}
      </button>
    </div>
  );
};

export default Market;
