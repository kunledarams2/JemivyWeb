import { FunctionComponent } from "react";
import styles from "../LandingPage.module.css";

export type IndustryCardType = {
  imageUrl?: string;
  industry?: string;
};

const IndustryCard: FunctionComponent<IndustryCardType> = ({
  imageUrl,
  industry,
}) => {
  return (
    <div
      className={styles.card7}
      style={{ "--card-background": `url(${imageUrl})` } as React.CSSProperties}
    >
      <div className={styles.fintech}>{industry}</div>
    </div>
  );
};

export default IndustryCard;
