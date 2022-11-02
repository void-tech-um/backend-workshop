// File to store interfaces used by many components in the app

export interface Item {
  id?: number;
  name: string;
  price: number;
  calories: number;
}

export interface IApi {
  base_url: string;
  getItems: (token: string) => Promise<Item[]>;
  postItem: (item: Item, token: string) => Promise<Item>;
  deleteItem: (id: number, token: string) => Promise<void>;
}

export interface IAuthContext {
  user: string | null;
  login: (username: string, password: string, callback: VoidFunction) => void;
  logout: () => void;
}
