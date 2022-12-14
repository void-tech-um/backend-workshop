import axios from "axios";
import { IApi, Item } from "../utils/types";

export default class Api implements IApi {
  base_url: string;
  constructor() {
    this.base_url = "http://localhost:3001/api";
  }

  login = async (username: string, password: string) => {
    const response = await axios.post(`${this.base_url}/auth/login`, {
      username,
      password,
    });
    return response.data;
  };

  signup = async (username: string, email: string, password: string) => {
    const response = await axios.post(
      `${this.base_url}/auth/signup`,

      { username, email, password }
    );
    return response.data;
  };

  getItems = async (token: string) => {
    try {
      const response = await axios.get(`${this.base_url}/items/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.items;
    } catch (error) {
      throw error;
    }
  };

  getUserItems = async (token: string, username: string) => {
    try {
      const response = await axios.get(`${this.base_url}/items/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          username,
        },
      });
      return response.data.items;
    } catch (error) {
      throw error;
    }
  };

  postItem = async (item: Item, token: string) => {
    try {
      const response = await axios.post(`${this.base_url}/items/`, item, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.createdItem;
    } catch (error) {
      throw error;
    }
  };

  deleteItem = async (id: any, token: string) => {
    try {
      await axios.delete(`${this.base_url}/items/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      throw error;
    }
  };
}
