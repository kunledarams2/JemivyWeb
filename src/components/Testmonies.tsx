import { FunctionComponent } from "react";
import styles from "./Testimonial.module.css";

const Testimonial: FunctionComponent = () => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.caseStudiesParent}>
        <div className={styles.caseStudies}>CASE STUDIES</div>
        <div className={styles.whatOurClients}>
          What Our Clients Say About Us
        </div>
      </div>
      <div className={styles.msg}>
        <div className={styles.msgWrapper}>
          <div className={styles.msg1}>
            <div className={styles.partneringWithJemivy}>
              Partnering with JemIvy Tech. was one of the best decisions we
              made. They truly understood our vision and brought it to life in
              ways we hadn’t imagined.
            </div>
            <b className={styles.johnAdemolaCto}>John Ademola, CTO Xwift</b>
            <div className={styles.comma}>
              <img
                className={styles.invertedComma1}
                alt=""
                src="invertedcomma2.png"
              />
              <img
                className={styles.invertedComma2}
                alt=""
                src="invertedcomma2.png"
              />
            </div>
            <div className={styles.comma1}>
              <img
                className={styles.invertedComma3}
                alt=""
                src="inverted comma 3.png"
              />
              <img
                className={styles.invertedComma4}
                alt=""
                src="inverted comma 3.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.carosels}>
        <div className={styles.carosel} />
        <div className={styles.carosel1} />
        <div className={styles.carosel1} />
        <div className={styles.carosel1} />
        <div className={styles.carosel1} />
        <div className={styles.carosel1} />
      </div>
      <div className={styles.arrows}>
        <img className={styles.arrowleftIcon} alt="" src="ArrowLeft.svg" />
        <img className={styles.arrowleftIcon} alt="" src="ArrowRight.svg" />
      </div>
    </div>
  );
};

export default Testimonial;
