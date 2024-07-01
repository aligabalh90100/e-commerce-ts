import { ReactNode } from "react";
import { TLoading } from "../../../types/types";
import CategorySkeleton from "../skeletons/CategorySkeleton";
import CartSkeleton from "../skeletons/CartSkeleton";
import ProductSkeleton from "../skeletons/ProductSkeleton";
import LottiesHandler from "../LottieHandler/LottiesHandler";
const skeletons = {
  category: CategorySkeleton,
  cart: CartSkeleton,
  product: ProductSkeleton,
};
type LoadingProps = {
  loading: TLoading;
  error: string | null;
  children: ReactNode;
  type?: keyof typeof skeletons;
};

const Loading = ({
  loading,
  error,
  children,
  type = "category",
}: LoadingProps) => {
  const Component = skeletons[type];

  if (loading === "pending") {
    return <Component />;
  } else if (loading === "failed") {
    return (
      <div>
        <LottiesHandler type="error" message={error as string} />
      </div>
    );
  }
  return <>{children}</>;
};

export default Loading;
