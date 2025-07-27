export interface Product {
  id: string;
  name: string;
  category: 'fruits' | 'vegetables' | 'dairy' | 'grains' | 'herbs' | 'ECO ENZYME' | 'SUSU KAMBING' | 'SABUN' | 'Batako';
  price: number;
  unit: string;
  image: string;
  description: string;
  inSeason: boolean;
  organic: boolean;
  ready: boolean; // Add this property
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}