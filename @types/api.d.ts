interface Pizza {
  id: string;
  name: string;
  ingredients: PizzaIngredient[];
  toppings: PizzaIngredient[];
  description: string;
  sizes: PizzaSize;
  doughs: PizzaDough;
  calories: number;
  protein: number;
  totalFat: string;
  carbohydrates: string;
  sodium: string;
  allergens: string[];
  isVegetarian: boolean;
  isGlutenFree: boolean;
  isNew: boolean;
  isHit: boolean;
  img: string;
}

interface PizzaIngredient {
  name: string;
  cost: number;
  img: string;
}

interface PizzaSize {
  name: string;
  price: number;
}

interface PizzaDough {
  name: string;
  price: number;
}
