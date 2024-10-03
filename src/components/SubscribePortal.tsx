import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Conteiner from "./Conteiner";
import logoIcon from "/logo-image.png";
import closeIcon from "/modal-close-icon.svg";
import styles from "../styles/SubscribePortal.module.scss";
const subscribeText = "Did you like this recipe? To be among the first to receive new recipes directly to your email, register on the site and confirm your subscription. CookBook has a large archive of thematic newsletters with collections of recipes for any occasion or holiday.";

export default function SubscribePortal() {
  return (
    <Conteiner className={styles.subscribePortal}>
      <SubscribeText text={subscribeText} />
      <SubscribeModal subscribeButtonText={"Receive recipes!"}/>
    </Conteiner>
  );
}

function SubscribeText({ text }: { text: string | typeof subscribeText }) {
  return(
    <><p className={styles.subscribeText}>{text}</p></>
  );
}

interface ModalHeadingContent {
  imgSrc: string;
  text: string;
}
function ModalHeading({ imgSrc, text }: ModalHeadingContent) {
  return (
    <>
      <img src={imgSrc} alt={"CookBook logo"} className={styles.image} />
      <p className={styles.modalText}>{text}</p>
    </>
  );
}

type InputEmail = {
  email: string;
}
function SubscribeForm({ buttonText }: { buttonText: string }) {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
  } = useForm<InputEmail>();

  const onSubmit: SubmitHandler<InputEmail> = (data) => console.log(data);
  const intialValues = { 
    email: "Enter your email*",
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.subscribeForm}>
      <fieldset className={styles.formItems}>
        <input 
          defaultValue={intialValues.email}
          placeholder="contact@minimal.com"
          type="email" autoComplete="off"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
            required: "Email is required",
            validate: {
              maxLength: (v) => v.length <= 30 || "The Email should have at most 50 characters",
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
              "Email address must be a valid address",
            },
          })}
        />
        <button type="submit">{buttonText}</button>
      </fieldset>

      {errors.email?.message && (
        <p role="alert" className={styles.error}>{errors.email.message}</p>
      )}
    </form>
  );
}

type ModalContentClose = {
  onClose: () => void;
};
function ModalContent({ onClose }: ModalContentClose) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <ModalHeading 
          imgSrc={logoIcon}
          text={"Get the latest on food trends, recipes, holiday ideas, and easy-to-make meals!"}
        />
        <button className={styles.modalClose} onClick={onClose}>Close
          <img src={closeIcon} alt={"close icon"} />
        </button>

        <SubscribeForm buttonText={"SEND"}/>
      </div>
    </div>
  );
}

function SubscribeModal({ subscribeButtonText }: { subscribeButtonText: string }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflowY = "scroll";
    }
  }, [showModal]);

  return (
    <div className={styles.modalWrapper}>
      <button className={styles.subscribeButton} onClick={() => setShowModal(true)}>
        {subscribeButtonText}
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </div>
  );
}