export interface Feature {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  features: Feature[];
  price: number;
  image: string;
  reviewsNumber: number;
  reviewStars: number;
  reviewScore: number;
  category?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
