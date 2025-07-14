export interface Product {
  id: string;
  name: string;
  category: 'fruits' | 'vegetables' | 'dairy' | 'grains' | 'herbs';
  price: number;
  unit: string;
  image: string;
  description: string;
  inSeason: boolean;
  organic: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}