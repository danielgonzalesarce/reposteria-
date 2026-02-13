
export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  imageUrl: string;
  preparation: string;
  category: string;
  ingredients?: string[];
  preparationSteps?: string[];
}
