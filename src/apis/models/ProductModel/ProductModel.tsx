import { BaseModel } from "../BaseModel/instanse";
import colorModel from "./components/ColorModel";

/* eslint-disable @typescript-eslint/no-unused-vars */
interface ProductModel extends BaseModel {
    name: string;
    price: number;
    description: string;
    category: string;
    color: colorModel
    // You can add more properties as needed
  }
   export default ProductModel
  