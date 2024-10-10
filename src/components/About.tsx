import styles from "../styles/About.module.scss";
const title1 = <>{"Who We Are"}</>;
const text1 = <>{"CookBook is here to help you cook delicious meals with less stress and more joy. We offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen wins” is what we're all about. Today, Simply Recipes has grown into a trusted resource for home cooks with more than 3,000 tested recipes, guides, and meal plans, drawing over 15 million readers each month from around the world. We're supported by a diverse group of recipe developers, food writers, recipe and product testers, photographers, and other creative professionals."}</>;
const title2 = <>{"Write for Us"}</>;
const writeMail = <>{<a href="mailto:write@cookbook.com" className={styles.mail}>write@cookbook.com</a>}</>
const text2 = <>{"We are always on the lookout for new expert voices to join our team of recipe developers and writers. Please submit pitches along with three examples of your published work (print or online) and a brief bio to"} {writeMail}</>;
const title3 = <>{"Advertise With Us"}</>;
const advertiseMail = <>{<a href="mailto:advertise@cookbook.com" className={styles.mail}>advertise@cookbook.com</a>}</>
const text3 = <>{"CookBook offers the highest value to advertisers through a combination of scale, credibility, and intent. Interested in advertising with us? Email us at"} {advertiseMail} {"or check out our media kit to learn more."}</>;

export default function About() {
  return (
    <AboutWrapper>
      <AboutText 
        title={title1} 
        text={text1}
      />
      <AboutText 
        title={title2} 
        text={text2}
      />
      <AboutText 
        title={title3} 
        text={text3}
      />
    </AboutWrapper>
  );
}

interface AboutWrapperProps {
  children?: React.ReactNode;
}
function AboutWrapper({ children }: AboutWrapperProps) {
  return (
    <div className={styles.aboutWrapper}>
      {children}
    </div>
  );
}

interface AboutTextProps {
  title: string | typeof title1 | typeof title2 | typeof title3;
  text: string | typeof text1 | typeof text2 | typeof text3;
}
function AboutText({ title, text }: AboutTextProps) {
  return (
    <section className={styles.aboutText}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </section>
  );
}