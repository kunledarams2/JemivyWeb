import { FunctionComponent, useState } from "react";
import { motion } from "framer-motion";
import styles from "../LandingPage.module.css";

export type FAQType = {
  styleType?: string;
  question?: string;
  icons?: string;
  answer?: any;
  showHowDoesThe?: boolean;
};

const FAQ: FunctionComponent<FAQType> = ({
  styleType,
  question,
  // icons,
  answer,
  // showHowDoesThe,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.frameParent5}>
      <div className={styles.whatIsYourSoftwareDevelopmParent}>
        <div className={styles.whatIsYour}>{question}</div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleCollapse}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          {isOpen ? (
            <img
              className={styles.devicemobilecameraIcon}
              alt=""
              src="/chevron-up.svg"
            />
          ) : (
            <img
              className={styles.devicemobilecameraIcon}
              alt=""
              src="/chevron-down.svg"
            />
          )}
        </motion.div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        style={{
          overflow: "hidden",
          //   textAlign: "center",
        }}
      >
        {
          isOpen && <>{answer}</>
          //           styleType == "theTimelineFor" ? (
          //   <div className={styles.theTimelineFor}>{answer}</div>
          // ) : (
          //   <div className={styles.ourDevelopmentProcess}>{answer}</div>
          //       )
        }
      </motion.div>
    </div>
    // <div className={`faq ${className}`}>
    //   <div className="f-a-q-content">
    //     <h1 className="how-does-the">{question}</h1>

    //     {/* <img className="icons34" loading="lazy" alt="" src={icons} /> */}
    //   </div>

    // </div>
  );
};

export default FAQ;
