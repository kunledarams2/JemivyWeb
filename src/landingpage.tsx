import { FunctionComponent } from "react";
import styles from "./LandingPage.module.css";
import FAQ from "./components/FAQ";
import IndustryCard from "./components/IndustryCard";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import { Element } from "react-scroll";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.frameParent}>
        <div className={styles.jemivyParent}>
          <div className={styles.jemivy}>JemIvy</div>
          <div className={styles.ourServicesParent}>
            <div className={styles.ourServices}>
              <Link to="OurService" smooth={true} duration={500}>
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  Our Services
                </motion.a>
              </Link>
            </div>
            <div className={styles.ourServices}>
              <Link to="CaseStudies" smooth={true} duration={500}>
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  Case Studies
                </motion.a>
              </Link>
            </div>
            <div className={styles.ourServices}>
              <Link to="OurFocus" smooth={true} duration={500}>
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  Our Focus
                </motion.a>
              </Link>
            </div>
            <div className={styles.ourServices}>
              <Link to="FAQs" smooth={true} duration={500}>
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  FAQs
                </motion.a>
              </Link>
            </div>
          </div>
          <div className={styles.contactUsParent}>
            <div className={styles.ourServices}>
              <Link to="ContactUs" smooth={true} duration={500}>
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  Contact Us
                </motion.a>
              </Link>
            </div>
            <div className={styles.arrowUp01Sharp} />
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.empoweringBusinessesWithCusParent}>
            <div className={styles.empoweringBusinessesWith}>
              Empowering Businesses with Custom Software Solutions
            </div>
            <div className={styles.weCraftInnovative}>
              We craft innovative, scalable, and secure software tailored to
              meet your unique business needs.
            </div>
          </div>
          <div className={styles.buttonDanger}>
            <div className={styles.star} />
            <div className={styles.button}>{`Let’s Discuss `}</div>
            <div className={styles.star} />
          </div>
        </div>
        <div className={styles.trustedByParent}>
          <div className={styles.ourServices}>TRUSTED BY</div>
          <div className={styles.logo}>
            <img
              className={styles.spotifySeeklogocom2Icon}
              alt=""
              src="/spotify-seeklogo.com 2.svg"
            />
            <img
              className={styles.zoomSeeklogocom1Icon}
              alt=""
              src="/zoomseeklogo.svg"
            />
            <img
              className={styles.component50Icon}
              alt=""
              src="/Group 113.svg"
            />
            <img
              className={styles.component51Icon}
              alt=""
              src="/Component51.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <Element name="OurService">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            style={
              {
                // height: "200px",
                //   backgroundColor: "lightblue",
                //   display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
              }
            }
          >
            <div className={styles.frameContainer}>
              <div className={styles.ourServicesGroup}>
                <div className={styles.ourServices1}>OUR SERVICES</div>
                <div className={styles.comprehensiveSolutionsTailor}>
                  Comprehensive Solutions Tailored to Your Needs
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.card}>
                  <div className={styles.icon}>
                    <img
                      className={styles.devicemobilecameraIcon}
                      alt=""
                      src="/DeviceMobileCamera.svg"
                    />
                  </div>
                  <div className={styles.mobileAppDevelopment}>
                    Mobile App Development
                  </div>
                  <div className={styles.reachYourAudience}>
                    Reach your audience on the go with intuitive and
                    high-performance mobile applications.
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.icon}>
                    <img
                      className={styles.devicemobilecameraIcon}
                      alt=""
                      src="/Desktop.svg"
                    />
                  </div>
                  <div className={styles.mobileAppDevelopment}>
                    Web App Development
                  </div>
                  <div className={styles.reachYourAudience}>
                    Create responsive, secure, and feature-rich websites that
                    provide an exceptional user experience.
                  </div>
                </div>
                <div className={styles.card2}>
                  <div className={styles.icon}>
                    <img
                      className={styles.devicemobilecameraIcon}
                      alt=""
                      src="/PenNib.svg"
                    />
                  </div>
                  <div className={styles.mobileAppDevelopment}>
                    UI/UX Design
                  </div>
                  <div className={styles.elevateUserExperiences}>
                    Elevate user experiences with intuitive and visually
                    appealing designs.
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.icon}>
                    <img
                      className={styles.devicemobilecameraIcon}
                      alt=""
                      src="/Gear.svg"
                    />
                  </div>
                  <div className={styles.mobileAppDevelopment}>
                    Software Management
                  </div>
                  <div className={styles.reachYourAudience}>
                    Ensure your software remains up-to-date, secure, and
                    performing optimally with our ongoing support services.
                  </div>
                </div>
              </div>

              <img
                className={styles.vectorIcon}
                alt=""
                src="/arrow_connector.svg"
              />
            </div>
          </motion.div>
        </Element>
      </div>
      <div className={styles.frameDiv}>
        <Element name="CaseStudies">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            style={
              {
                // height: "200px",
                // backgroundColor: "lightblue",
                //   display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
              }
            }
          >
            <div className={styles.frameDiv}>
              <div className={styles.caseStudiesParent}>
                <div className={styles.ourServices1}>CASE STUDIES</div>
                <div className={styles.comprehensiveSolutionsTailor}>
                  Explore What We have Done.
                </div>
              </div>
              <div className={styles.content1}>
                <div className={styles.card4}>
                  <div className={styles.image}>
                    <div className={styles.imageChild} />
                    <div className={styles.macbookProTiltedScreenMock}>
                      <img
                        className={styles.shadowIcon}
                        alt=""
                        src="/shadow.svg"
                      />
                      <img className={styles.mainIcon} alt="" src="/main.svg" />
                      <img
                        className={styles.macbookProTiltedScreenMock1}
                        alt=""
                        src="/MacBooklabel.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.content2}>
                    <div className={styles.jemivyParent}>
                      <div className={styles.faithSpecialist}>
                        Faith Specialist
                      </div>
                      <div className={styles.chip}>
                        <div className={styles.webApp}>Web App</div>
                      </div>
                    </div>
                    <div className={styles.reachYourAudience}>
                      We developed a web app and re-designed Faith Specialist
                      website to help streamline operations and stay up to date
                      with patients data.
                    </div>
                  </div>
                </div>
                <div className={styles.card4}>
                  <div className={styles.content2}>
                    <div className={styles.jemivyParent}>
                      <div className={styles.faithSpecialist}>Xwift</div>
                      <div className={styles.chip}>
                        <div className={styles.webApp}>Mobile App</div>
                      </div>
                    </div>
                    <div
                      className={styles.reachYourAudience}
                    >{`We developed a cohesive mobile app for a cross border payment solution `}</div>
                  </div>
                  <div className={styles.image1}>
                    <div className={styles.imageItem} />
                    <div className={styles.iphone15ProBlackTitaniumM}>
                      <img
                        className={styles.shadowIcon1}
                        alt=""
                        src="shadowPhone.svg"
                      />
                      <img
                        className={styles.mainIcon1}
                        alt=""
                        src="mainPhone.svg"
                      />
                      <img
                        className={styles.iphone15ProBlackTitaniumM1}
                        alt=""
                        src="/iPhone 15 Pro Black Titanium Mockup Portrait label.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.card4}>
                  <div className={styles.image2}>
                    <div className={styles.imageInner} />
                    <div className={styles.ipadPro129InchSpaceGray}>
                      <img
                        className={styles.shadowIcon2}
                        alt=""
                        src="shadowTab.svg"
                      />
                      <img
                        className={styles.mainIcon2}
                        alt=""
                        src="/mainTab.svg"
                      />
                      <img
                        className={styles.ipadPro129InchSpaceGray1}
                        alt=""
                        src="/iPad Pro 12.9-inch Space Gray Mockup label.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.content2}>
                    <div className={styles.jemivyParent}>
                      <div className={styles.faithSpecialist}>
                        Auburn Apartment Guide
                      </div>
                      <div className={styles.chip}>
                        <div className={styles.webApp}>Web App</div>
                      </div>
                    </div>
                    <div className={styles.reachYourAudience}>
                      We redesigned Auburn Apartment Guide website and web app
                      with significant UX enhancement with resulted in 40%
                      increase in user engagement and onboarding.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Element>
      </div>

      <div className={styles.frameContainer}>
        <Element name="OurFocus">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            style={
              {
                //   width: "1102px",
                // height: "200px",
                // backgroundColor: "lightblue",
                //   display: "flex",
                // alignItems: "center",
              }
            }
          ></motion.div>
        </Element>
      </div>

      <div className={styles.frameParent1}>
        <div className={styles.caseStudiesParent}>
          <div className={styles.ourServices1}>OUR FOCUS</div>
          <div className={styles.comprehensiveSolutionsTailor}>
            Tailored Solutions for Every Industry
          </div>
        </div>
        <div className={styles.contentParent}>
          <div className={styles.content5}>
            <IndustryCard imageUrl="image2.svg" industry="Fintech" />
            <IndustryCard imageUrl="image3.svg" industry="Health Tech" />
            <IndustryCard imageUrl="image4.svg" industry="Ecommerce" />
          </div>

          <div className={styles.content5}>
            <IndustryCard imageUrl="image5.svg" industry="Edtech" />
            <IndustryCard imageUrl="image6.svg" industry="AI" />
            <IndustryCard imageUrl="image7.svg" industry="Real Estate" />

            {/* <img className={styles.cardIcon} alt="" src="/indictor2.svg" /> */}
          </div>
        </div>
      </div>

      <div className={styles.carosels}>
        <div className={styles.carosel} />
        <div className={styles.carosel1} />
      </div>

      <div className={styles.frameParent2}>
        <div className={styles.caseStudiesParent}>
          <div className={styles.caseStudies2}>CASE STUDIES</div>
          <div className={styles.whyWorkWith}>Why Work with Us?</div>
        </div>
        <img className={styles.vectorIcon1} alt="" src="indictor2.svg" />
        <div className={styles.content7}>
          <div className={styles.card13}>
            <img
              className={styles.microscopeIcon}
              alt=""
              src="/Microscope.svg"
            />
            <div className={styles.provenExpertiseParent}>
              <div className={styles.mobileAppDevelopment}>
                Proven Expertise
              </div>
              <div className={styles.reachYourAudience}>
                Our team of seasoned professionals brings a wealth of experience
                and knowledge to every project
              </div>
            </div>
          </div>
          <div className={styles.card14}>
            <img
              className={styles.microscopeIcon}
              alt=""
              src="/UserSwitch.svg"
            />
            <div className={styles.provenExpertiseParent}>
              <div className={styles.mobileAppDevelopment}>
                Client-Centric Approach
              </div>
              <div className={styles.reachYourAudience}>
                We prioritize your needs, working closely with you to ensure the
                final product aligns with your vision.
              </div>
            </div>
          </div>
          <div className={styles.card13}>
            <img
              className={styles.microscopeIcon}
              alt=""
              src="/Circuitry.svg"
            />
            <div className={styles.provenExpertiseParent}>
              <div className={styles.mobileAppDevelopment}>
                Innovative Solutions
              </div>
              <div className={styles.reachYourAudience}>
                We leverage the latest technologies and industry best practices
                to deliver innovative solutions that give you a competitive
                edge.
              </div>
            </div>
          </div>
          <div className={styles.card13}>
            <img className={styles.microscopeIcon} alt="" src="/Headset.svg" />
            <div className={styles.provenExpertiseParent}>
              <div className={styles.mobileAppDevelopment}>
                End-to-End Support
              </div>
              <div className={styles.reachYourAudience}>
                From the initial concept to post-launch support, we’re with you
                every step of the way, ensuring your software remains up-to-date
                and effective.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Element name="FAQs">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          style={
            {
              //   width: "1102px",
              // height: "200px",
              // backgroundColor: "lightblue",
              //   display: "flex",
              // alignItems: "center",
            }
          }
        ></motion.div>
      </Element>
      <div className={styles.landingPageInner}>
        <div className={styles.frameParent3}>
          <div className={styles.frequentlyAskedQuestionsParent}>
            <div className={styles.frequentlyAskedQuestions}>
              Frequently Asked Questions
            </div>

            <div className={styles.frameParent4}>
              <FAQ
                question=" What is your software development process?"
                answer={
                  <div className={styles.ourDevelopmentProcessContainer}>
                    <p className={styles.ourDevelopmentProcess}>
                      Our development process typically involves several stages:
                    </p>
                    <p className={styles.ourDevelopmentProcess}>&nbsp;</p>
                    <ol className={styles.discoveryPlanningWeStart}>
                      <li className={styles.designWeCreateWireframesA}>
                        <span
                          className={styles.discoveryPlanning}
                        >{`Discovery & Planning:`}</span>
                        <span>
                          {" "}
                          We start by understanding your requirements and goals.
                        </span>
                      </li>
                      <li className={styles.designWeCreateWireframesA}>
                        <span className={styles.discoveryPlanning}>
                          Design:
                        </span>
                        <span className={styles.weCreateWireframes}>
                          {" "}
                          We create wireframes and prototypes to visualize the
                          product.
                        </span>
                      </li>
                      <li className={styles.designWeCreateWireframesA}>
                        <span className={styles.discoveryPlanning}>
                          Development:
                        </span>
                        <span className={styles.weCreateWireframes}>
                          {" "}
                          Our team builds the software using agile methodologies
                          for flexibility and rapid iteration.
                        </span>
                      </li>
                      <li className={styles.designWeCreateWireframesA}>
                        <span
                          className={styles.discoveryPlanning}
                        >{`Testing: `}</span>
                        <span className={styles.weCreateWireframes}>
                          We conduct thorough testing to ensure the software is
                          bug-free and performs well.
                        </span>
                      </li>
                      <li className={styles.designWeCreateWireframesA}>
                        <span className={styles.discoveryPlanning}>
                          Deployment:
                        </span>
                        <span className={styles.weCreateWireframes}>
                          {" "}
                          The software is deployed to your environment, and we
                          provide support for a smooth transition.
                        </span>
                      </li>
                      <li>
                        <span
                          className={styles.discoveryPlanning}
                        >{`Maintenance & Support:`}</span>
                        <span className={styles.weCreateWireframes}>
                          {" "}
                          We offer ongoing maintenance to keep your software
                          updated and functioning optimally.
                        </span>
                      </li>
                    </ol>
                  </div>
                }
                styleType="ourDevelopmentProcessContainer"
              />

              <FAQ
                question="How long does it take to develop a software project?"
                answer={
                  <div className={styles.theTimelineFor}>
                    The timeline for a software project varies depending on the
                    complexity and scope of the project. Smaller projects might
                    take a few weeks, while larger, more complex projects can
                    take several months. We’ll provide a detailed timeline
                    during the planning phase, and we work closely with you to
                    meet deadlines."
                  </div>
                }
                styleType="theTimelineFor"
              />

              <FAQ
                question=" How do you handle project changes or scope adjustments?"
                answer={
                  <div className={styles.theTimelineFor}>
                    We understand that requirements can evolve during the
                    development process. We use agile methodologies, which allow
                    for flexibility and adaptation. If there are changes to the
                    project scope, we’ll discuss the implications with you,
                    including any impact on the timeline or budget, and adjust
                    our approach accordingly.
                  </div>
                }
                styleType="theTimelineFor"
              />
              <FAQ
                question=" What technologies do you work with?"
                answer={
                  <div className={styles.ourDevelopmentProcessContainer}>
                    <p className={styles.ourDevelopmentProcess}>
                      We work with a wide range of modern technologies to
                      deliver the best possible solutions. Our tech stack
                      includes:
                    </p>
                    <p className={styles.ourDevelopmentProcess}>
                      <span className={styles.discoveryPlanning}>
                        Frontend:
                      </span>
                      <span> React, Angular, Vue.js</span>
                    </p>
                    <p className={styles.ourDevelopmentProcess}>
                      <span className={styles.discoveryPlanning}>Backend:</span>
                      <span> Node.js, Python, Ruby on Rails, Java</span>
                    </p>
                    <p className={styles.ourDevelopmentProcess}>
                      <span className={styles.discoveryPlanning}>Mobile</span>
                      <span>: Swift, Kotlin, React Native, Flutter</span>
                    </p>
                    <p className={styles.ourDevelopmentProcess}>
                      <span className={styles.discoveryPlanning}>
                        Database:
                      </span>
                      <span> MySQL, PostgreSQL, MongoDB, Firebase</span>
                    </p>
                    <p className={styles.ourDevelopmentProcess}>
                      <span
                        className={styles.discoveryPlanning}
                      >{`Cloud & DevOps: `}</span>
                      <span>AWS, Azure, Google Cloud, Docker, Kubernetes</span>
                    </p>
                  </div>
                }
              />
              <FAQ
                question="What kind of support do you offer after the software is
                              launched?"
                answer={
                  <div className={styles.theTimelineFor}>
                    We offer comprehensive post-launch support, including
                    troubleshooting, bug fixes, performance monitoring, and
                    regular updates. We’re committed to ensuring your software
                    continues to perform optimally and can evolve with your
                    business needs.
                  </div>
                }
              />
              <FAQ
                question="How much does it cost to develop a software project?"
                answer={
                  <div className={styles.theTimelineFor}>
                    The cost of a software project depends on various factors,
                    including the complexity, scope, technology stack, and
                    timeline. We provide a detailed quote after understanding
                    your specific requirements during the discovery phase. Our
                    pricing is transparent, and we work within your budget to
                    deliver the best possible solution.
                  </div>
                }
              />
            </div>
          </div>
          <div className={styles.imagePlaceholdericon2} />
        </div>
      </div>

      <Element name="ContactUs">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          style={
            {
              //   width: "1102px",
              // height: "200px",
              // backgroundColor: "lightblue",
              //   display: "flex",
              // alignItems: "center",
            }
          }
        ></motion.div>
      </Element>
      <div className={styles.frameParent11}>
        <div className={styles.getInTouchParent}>
          <div className={styles.getInTouch}>GET IN TOUCH</div>
          <div className={styles.bookAFree}>
            Book a Free 30 Minutes Consultation With Us
          </div>
          <div
            className={styles.gotASoftware}
          >{`Got a software or app idea & need to get it validated? Let us give you our honest opinion.`}</div>
        </div>
        <div className={styles.formWrapper}>
          <div className={styles.form}>
            <div className={styles.inputtextParent}>
              <div className={styles.inputtext}>
                <div className={styles.label}>Name</div>
                <div className={styles.field}>
                  <div className={styles.input}>Enter full name</div>
                </div>
              </div>
              <div className={styles.inputtext}>
                <div className={styles.label}>Email Address</div>
                <div className={styles.field}>
                  <div className={styles.input}>Enter email address</div>
                </div>
              </div>
            </div>
            <div className={styles.inputtextParent}>
              <div className={styles.inputtext}>
                <div className={styles.label}>Phone Number</div>
                <div className={styles.field}>
                  <div className={styles.input}>Enter Phone number</div>
                </div>
              </div>
              <div className={styles.inputtext}>
                <div className={styles.label}>Company</div>
                <div className={styles.field}>
                  <div className={styles.input}>Enter Phone number</div>
                </div>
              </div>
            </div>
            <div className={styles.inputtext4}>
              <div className={styles.label}>Your Message</div>
              <div className={styles.field4} />
            </div>
          </div>
          <div className={styles.button1}>
            <div className={styles.button2}>Submit and Book</div>
          </div>
        </div>
      </div>
      <div className={styles.landingPageChild}>
        <div className={styles.frameParent12}>
          <div className={styles.jemivyParent}>
            <div className={styles.fintech}>JemIvy</div>
            <div className={styles.homeParent}>
              <div className={styles.home}>
                <Link to="OurService" smooth={true} duration={500}>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Our Services
                  </motion.a>
                </Link>
              </div>
              <div className={styles.home}>
                <Link to="CaseStudies" smooth={true} duration={500}>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Case Studies
                  </motion.a>
                </Link>
              </div>
              <div className={styles.home}>
                <Link to="OurFocus" smooth={true} duration={500}>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Our Focus
                  </motion.a>
                </Link>
              </div>
              <div className={styles.home}>
                <Link to="FAQs" smooth={true} duration={500}>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    FAQs
                  </motion.a>
                </Link>
              </div>
              <div className={styles.contact}>
                <Link to="ContactUs" smooth={true} duration={500}>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Contact Us
                  </motion.a>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.basitkhandesignAllRights}>
            © 2024 JemIvy. All rights reserved | Cookie Settings, Anti-Spam,
            Privacy, User agreement, Legal Notice and Responsible Disclosure
          </div>
        </div>
      </div>
      {/* <img className={styles.vectorIcon1} alt="" src="indictor2.svg" /> */}
    </div>
  );
};

export default LandingPage;
