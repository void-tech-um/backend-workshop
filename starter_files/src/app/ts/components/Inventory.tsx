import * as React from "react";
import { useEffect } from "react";
import { useAuth } from "../utils/auth";
import Api from "../utils/api";
import { Item } from "../utils/types";

interface InventoryProps {
  inventory: Item[];
  setInventory: React.Dispatch<React.SetStateAction<Item[]>>;
}

// Display items owned by the user
const Inventory = ({ inventory, setInventory }: InventoryProps) => {
  const auth = useAuth();
  const api = new Api();

  const fetchItems = async () => {
    try {
      const data = await api.getUserItems(
        localStorage.getItem("token") as string,
        auth.user as string
      );
      setInventory(data);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <div className="row">
        {inventory.map((item: any) => (
          <div className="col-4" key={item.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.price}</p>
                <p className="card-text">{item.calories}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
