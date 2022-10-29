export interface IProduct {
  _id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  quantity: number;
}

export interface ICartState {
  count: number;
  cartList: IProduct[];
  totalItems: number;
  totalPrice: number;
}
