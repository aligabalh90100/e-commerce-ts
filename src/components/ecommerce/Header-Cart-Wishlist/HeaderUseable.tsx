import styles from "./style.module.css";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type HeaderUseableProps = {
  page: string;
  totalQuantity: number;
  SvgIcon: FC;
  title: string;
};

const HeaderUseable = ({
  page,
  totalQuantity,
  SvgIcon,
  title,
}: HeaderUseableProps) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 600);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);
  return (
    <div className={`${styles.container}`} onClick={() => navigate(page)}>
      <div className={styles.iconContainer}>
        <SvgIcon />
        {totalQuantity > 0 && (
          <div
            className={`${styles.totalNum} ${
              isAnimate ? styles.pumpQunatity : ""
            }`}
          >
            {totalQuantity}
          </div>
        )}
      </div>
      <p className="fw-medium fs-6">{title}</p>
    </div>
  );
};

export default HeaderUseable;
