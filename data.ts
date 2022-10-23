interface IProduct {
  _id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  countInStock: number;
}

interface IData {
  products: IProduct[];
}

const data: IData = {
  products: [
    {
      _id: "1",
      name: "Slim Shirt",
      category: "Shirts",
      image: "/images/d1.jpg",
      price: 60,
      brand: " Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 6,
    },
    {
      _id: "2",
      name: "Fit Shirt",
      category: "Shirts",
      image: "/images/d1.jpg",
      price: 50,
      brand: " Nike",
      rating: 4.2,
      numReviews: 5,
      countInStock: 5,
    },
    {
      _id: "3",
      name: "Best Pants",
      category: "Pants",
      image: "/images/d1.jpg",
      price: 70,
      brand: " Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 6,
    },
    {
      _id: "4",
      name: "Best Pants",
      category: "Pants",
      image: "/images/d1.jpg",
      price: 70,
      brand: " Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 6,
    },
  ],
};

export default data;
