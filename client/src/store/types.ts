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

export interface IShipping {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  location: string;
}

export interface ICartState {
  count: number;
  cartList: IProduct[];
  totalItems: number;
  totalPrice: number;
  shippingAddress: IShipping;
}
