type AxiosRequestConfig<Params = undefined> = Params extends undefined
  ? { config?: import('axios').AxiosRequestConfig }
  : { params: Params; config?: import('axios').AxiosRequestConfig };

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
  name: NameIngredient;
  cost: number;
  img: string;
}

interface PizzaSize {
  name: NameSize;
  price: number;
}

interface PizzaDough {
  name: NameDough;
  price: number;
}

type NameIngredient =
  | 'PINEAPPLE'
  | 'MOZZARELLA'
  | 'PEPERONI'
  | 'GREEN_PEPPER'
  | 'MUSHROOMS'
  | 'BASIL'
  | 'CHEDDAR'
  | 'PARMESAN'
  | 'FETA'
  | 'HAM'
  | 'PICKLE'
  | 'TOMATO'
  | 'BACON'
  | 'ONION'
  | 'CHILE'
  | 'SHRIMPS'
  | 'CHICKEN_FILLET'
  | 'MEATBALLS';

type NameSize = 'SMALL' | 'MEDIUM' | 'LARGE';
type NameDough = 'THIN' | 'THICK';

interface BaseResponse {
  success: boolean;
  reason?: string;
  message?: string;
  error?: string;
  statusCode?: number;
}

interface PizzaCatalogResponse extends BaseResponse {
  catalog: Pizza[];
}

interface OrdersResponse extends BaseResponse {
  orders: string[]; // TODO: fix this
}
