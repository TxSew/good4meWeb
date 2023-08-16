interface ItemProductProps {
    name: string;
    desc: string;
    remaining: string;
    price: number;
    productId: number;
  }
 export default ItemProductProps;

  export type Todo  = Omit<ItemProductProps,"name"|"desc">

 