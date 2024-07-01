import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { TCategory } from "../../../types/types";

const Category = ({ title, img, prefix }: TCategory) => {
  return (
    <div className={styles.category}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={styles.categoryImg}>
          <img src={img} alt={title} />
        </div>
        <h4 className={styles.categoryTitle}>{title}</h4>
      </Link>
    </div>
  );
};

export default Category;
