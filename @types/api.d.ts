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

interface Person {
  firstName: string;
  lastName: string;
  middleName?: string;
  phone: string;
}

interface Address {
  street: string;
  house: string;
  apartment: string;
  comment?: string;
}

interface PizzaOrder {
  id: string; // TODO: fix types
  person: Person;
  receiverAddress: Address;
  status: 0 | 1 | 2 | 3 | 4 | 5;
  cancellable: boolean;
}

interface DebitCard {
  pan: string;
  expireDate: string;
  cvc: string;
}

interface CreatePizzaPaymentPizzaDto {
  id: string;
  name: string;
  toppings: PizzaIngredient[];
  description: string;
  size: PizzaSize;
  doughs: PizzaDough[];
}

interface BaseResponse {
  success: boolean;
  reason?: string;
}

interface PizzasResponse extends BaseResponse {
  catalog: Pizza[];
}

interface PizzaPaymentResponse extends BaseResponse {
  order: PizzaOrder;
}

interface PizzaOrderResponse extends BaseResponse {
  order: PizzaOrder;
}

interface PizzaOrdersResponse extends BaseResponse {
  orders: PizzaOrder[];
}
