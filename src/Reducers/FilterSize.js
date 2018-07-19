import {
  CatTee,
  DarkThug,
  SphynxTie,
  ShortSleeve,
  Skuul,
  Sphynx,
  BornOnStreet,
  WineSkuul,
  Tso3DBlack,
  Tso3D,
  OnTheStreets,
  CatTeeTwo,
  CrazyMonkeyGrey,
  CrazyMonkey,
  ManTieDie,
  WhiteDGK,
  DangerKnife
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
  },
  {
    photo: DangerKnife,
    model: "Danger Knife Grey",
    currency: "$",
    price: {
      dollars: 14,
      cents: ".90"
    },
    installment: {
      num: "or 7x of",
      price: " $ 2.13"
    },
    size: "L",
    id: 8
  },
  {
    photo: WhiteDGK,
    model: "White DGK Script Tee",
    currency: "$",
    price: {
      dollars: 14,
      cents: ".90"
    },
    installment: {
      num: "or 7x of",
      price: " $ 2.13"
    },
    size: "L",
    id: 9
  },
  {
    photo: CatTeeTwo,
    model: "Cat Tee Black T-Shirt A",
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
    id: 10
  },
  {
    photo: Tso3D,
    model: "Tso 3D Short Sleeve T-Shirt A",
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
    id: 11
  },
  {
    photo: ManTieDie,
    model: "Man Tie Dye Cinza Grey T-Shirt",
    currency: "$",
    price: {
      dollars: 49,
      cents: ".90"
    },
    installment: {
      num: "or 10x of",
      price: "4.90"
    },
    size: "L",
    id: 12
  },
  {
    photo: CrazyMonkey,
    model: "Crazy Monkey Black T-Shirt",
    currency: "$",
    price: {
      dollars: 22,
      cents: ".50"
    },
    installment: {
      num: "or 4x of",
      price: " $ 5.63"
    },
    size: "L",
    id: 13
  },
  {
    photo: Tso3DBlack,
    model: "Tso 3D Black T-Shirt",
    currency: "$",
    price: {
      dollars: 18,
      cents: ".70"
    },
    installment: {
      num: "or 4x of",
      price: " $ 4.67"
    },
    size: "L",
    id: 14
  },
  {
    photo: CrazyMonkeyGrey,
    model: "Crazy Monkey Grey",
    currency: "$",
    price: {
      dollars: 134,
      cents: ".90"
    },
    installment: {
      num: "or 5x of",
      price: " $ 26.98"
    },
    size: "L",
    id: 16
  },
  {
    photo: OnTheStreets,
    model: "On The Streets Black T-Shirt",
    currency: "$",
    price: {
      dollars: 49,
      cents: ".00"
    },
    installment: {
      num: "or 9x of",
      price: " $ 5.44"
    },
    size: "L",
    id: 17
  },

];

export default (state = Carts, action) => {
  switch(action.type) {
    case FILTER:
      return [...state].filter((item) => {
        return item.size === action.size
      });
    default:
      return state;
  }
};