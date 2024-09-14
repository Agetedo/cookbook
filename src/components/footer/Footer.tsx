import { useId } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Logo from "../Logo";
import FooterConteiner from "./FooterConteiner";
import { socialMenu } from "../../dB/socialMenu";
import "./Footer.scss";

export default function Footer() {
  return (
    <FooterConteiner className={"footer"}>
      <div className="footer__items">
        <FooterReminder 
          imgAlt={"Cook Book logo"}
          text={"Join us and receive reminders about new recipes. It's delicious with Cook Book!"}
        />
        <FooterForm emailLabel={"Never miss a recipe"} />  
      </div>
      <FooterSocial rightsText={" Cook Book. All rights reserved."} />
    </FooterConteiner>  
  );
}

function FooterReminder({ imgAlt, text }: { imgAlt: string, text: string } ) {
  return (
    <div className="footer__reminder">
      <Logo imgAlt={imgAlt} />
      <p className="text">{text}</p>
    </div>
  );
}

function FooterFormButton({ buttonText }: { buttonText: string } ) {
  return (
    <div className="footer__button">
      <button type="submit">{buttonText}</button>
    </div>
  );
}

type InputRegister = {
  email: string;
}
function FooterForm({ emailLabel }: { emailLabel: string }) {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
  } = useForm<InputRegister>();

  const onSubmit: SubmitHandler<InputRegister> = (data) => console.log(data);
  const intialValues = {  
    email: "Email address*",
  };
  const emailInputId = useId();
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="footer__form">

      <fieldset className="email__items">
        <label className="email__label" htmlFor={emailInputId}>{emailLabel}</label>

        {errors.email?.message && (
          <p role="alert" className="error-message">{errors.email.message}</p>
        )}  
        
        <input id={emailInputId} className="email__input"
          defaultValue={intialValues.email}
          placeholder="contact@cook.com"
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
        
      </fieldset>

      <FooterFormButton buttonText={"Subscribe"}/>
    </form>
  );
}

function FooterSocial({ rightsText }: { rightsText: string }) {
  const footerSocialList = socialMenu.map(item => 
    <li key={item.id} className="social-menu__item">
      <Link to={item.linkTo} rel="noopener" target="_blank" className="social-menu__link">
        <img src={item.imgSrc} alt="#" />
      </Link>
    </li>
  );

  return ( 
    <div className="footer__social">
      <p className="footer__text">{new Date().getFullYear()} &copy;{rightsText}</p>

      <nav className="social__menu">
        <ul className="social-menu__list">{footerSocialList}</ul>
      </nav>
    </div>
  );
}