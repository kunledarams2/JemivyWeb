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
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // width: "100%",
    // height: "100vh",
  };

  return (
    <div
      className={styles.card7}
      style={style}
      //   style={{ "--card-background": `url(${imageUrl})` } as React.CSSProperties}
    >
      <img
        alt=""
        src={imageUrl}
        className={styles.macbookProTiltedScreenMock1}
      />
      <div className={styles.fintech}>{industry}</div>
    </div>
  );
};

export default IndustryCard;
