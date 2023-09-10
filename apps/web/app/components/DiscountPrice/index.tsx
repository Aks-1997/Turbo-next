import React, { memo } from "react";
import classes from "./styles.module.css";

interface Props {
  discountPercentage?: number;
  slashPrice?: string;
}

/**
 * @function DiscountPrice
 * @param {Props} props
 */
const DiscountPrice = (props: Props) => {
  const { slashPrice = "", discountPercentage = 0 } = props;
  const badge = `${discountPercentage}%`;
  const withBadge = discountPercentage > 0;

  return (
    <div className={classes.container}>
      {withBadge ? <div className={classes.badge}>{badge}</div> : null}
      <div className={classes.price}>{slashPrice}</div>
    </div>
  );
};

DiscountPrice.defaultProps = {
  discountPercentage: 0,
  slashPrice: "",
};

export default memo(DiscountPrice);
