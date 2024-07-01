export type TLoading = "idle" | "pending" | "failed" | "succeeded";
// category Types
export type TCategory = {
  title: string;
  prefix: "string";
  id?: number;
  img: string;
};
//products type
export type TProduct = {
  title: string;
  price: number;
  id?: number;
  cat_prefix: string;
  img: string;
  qunatity?: number;
  max: number;
  isLiked?: boolean;
};
// order type
export type TOrder = {
  id: number;
  userId: number;
  subTotal: number;
  items: TProduct[];
};
