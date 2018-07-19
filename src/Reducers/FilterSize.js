import {
  CatTee,
  DarkThug,
  SphynxTie,
  ShortSleeve,
  Skuul,
  Sphynx,
  BornOnStreet,
  WineSkuul
} from '../asserts/img'
import { FILTER } from '../Actions/types'

export const Carts = [
  {
    photo: CatTee,
    model: "Cat Tee Black T-Shirt",
    currency: "$",
    price: {
      dollars: 10,
      cents: ".90"
    },
    installment: {
      num: "or 9x of",
      price: " $ 1.21"
    },
    size: "L",
    id: 0
  },
  {
    photo: DarkThug,
    model: "Dark Thug Blue-Navy T-Shirt",
    currency: "$",
    price: {
      dollars: 29,
      cents: ".45"
    },
    installment: {
      num: "or 9x of",
      price: " $ 1.21"
    },
    size: "M",
    id: 1
  },
  {
    photo: Sphynx,
    model: "Sphynx Tie Dye Wine T-Shirt",
    currency: "$",
    price: {
      dollars: 9,
      cents: ".00"
    },
    installment: {
      num: "or 3x of",
      price: " $ 3.00"
    },
    size: "XL",
    id: 2
  },
  {
    photo: Skuul,
    model: "Skuul",
    currency: "$",
    price: {
      dollars: 14,
      cents: ".00"
    },
    installment: {
      num: "or 5x of",
      price: " $ 2.80"
    },
    size: "XXL",
    id: 3
  },
  {
    photo: WineSkuul,
    model: "Wine Skul T-Shirt",
    currency: "$",
    price: {
      dollars: 13,
      cents: ".25"
    },
    installment: {
      num: "or 3x of",
      price: " $ 4.42"
    },
    size: "L",
    id: 4
  },
  {
    photo: ShortSleeve,
    model: "Short Sleeve T-Shirt",
    currency: "$",
    price: {
      dollars: 75,
      cents: ".00"
    },
    installment: {
      num: "or 5x of",
      price: " $ 15.00"
    },
    size: "L",
    id: 5
  },
  {
    photo: BornOnStreet,
    model: "Born On The Streets",
    currency: "$",
    price: {
      dollars: 25,
      cents: ".90"
    },
    installment: {
      num: "or 12x of",
      price: " $ 2.16"
    },
    size: "L",
    id: 6
  },
  {
    photo: SphynxTie,
    model: "Sphynx Tie Dye Grey T-Shirt",
    currency: "$",
    price: {
      dollars: 10,
      cents: ".90"
    },
    installment: {
      num: "or 9x of",
      price: " $ 1.21"
    },
    size: "L",
    id: 7
  }
];

export default (state = [Carts], action) => {
  switch(action.type) {
    case FILTER:
      return [...state].filter((item) => {
        return item.size
      });
    default:
      return state;
  }
};