import{j as e,C as d,r as i,a as u,l as b,u as h}from"./index-DK3O6ZaY.js";const x="/modal-close-icon.svg",_="_subscribePortal_mh9ks_1",p="_subscribeText_mh9ks_10",f="_modalWrapper_mh9ks_30",j="_subscribeButton_mh9ks_35",g="_modal_mh9ks_30",k="_content_mh9ks_66",y="_animatetop_mh9ks_1",w="_image_mh9ks_80",C="_modalText_mh9ks_84",T="_modalClose_mh9ks_93",v="_subscribeForm_mh9ks_120",N="_formItems_mh9ks_155",S="_error_mh9ks_160",s={subscribePortal:_,subscribeText:p,"text-shadow-drop-center":"_text-shadow-drop-center_mh9ks_1",modalWrapper:f,subscribeButton:j,modal:g,content:k,animatetop:y,image:w,modalText:C,modalClose:T,subscribeForm:v,formItems:N,error:S},E="Did you like this recipe? To be among the first to receive new recipes directly to your email, register on the site and confirm your subscription. CookBook has a large archive of thematic newsletters with collections of recipes for any occasion or holiday.";function D(){return e.jsxs(d,{className:s.subscribePortal,children:[e.jsx(F,{text:E}),e.jsx(M,{subscribeButtonText:"Receive recipes!"})]})}function F({text:o}){return e.jsx(e.Fragment,{children:e.jsx("p",{className:s.subscribeText,children:o})})}function B({imgSrc:o,text:t}){return e.jsxs(e.Fragment,{children:[e.jsx("img",{src:o,alt:"CookBook logo",className:s.image}),e.jsx("p",{className:s.modalText,children:t})]})}function P({buttonText:o}){var l;const{register:t,handleSubmit:a,formState:{errors:c}}=h(),n=r=>console.log(r),m={email:"Enter your email*"};return e.jsxs("form",{onSubmit:a(n),className:s.subscribeForm,children:[e.jsxs("fieldset",{className:s.formItems,children:[e.jsx("input",{defaultValue:m.email,placeholder:"contact@minimal.com",type:"email",autoComplete:"off","aria-invalid":c.email?"true":"false",...t("email",{required:"Email is required",validate:{maxLength:r=>r.length<=30||"The Email should have at most 50 characters",matchPattern:r=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(r)||"Email address must be a valid address"}})}),e.jsx("button",{type:"submit",children:o})]}),((l=c.email)==null?void 0:l.message)&&e.jsx("p",{role:"alert",className:s.error,children:c.email.message})]})}function I({onClose:o}){return e.jsx("div",{className:s.modal,children:e.jsxs("div",{className:s.content,children:[e.jsx(B,{imgSrc:b,text:"Get the latest on food trends, recipes, holiday ideas, and easy-to-make meals!"}),e.jsxs("button",{className:s.modalClose,onClick:o,children:["Close",e.jsx("img",{src:x,alt:"close icon"})]}),e.jsx(P,{buttonText:"SEND"})]})})}function M({subscribeButtonText:o}){const[t,a]=i.useState(!1);return i.useEffect(()=>{t?document.body.style.overflow="hidden":document.body.style.overflowY="scroll"},[t]),e.jsxs("div",{className:s.modalWrapper,children:[e.jsx("button",{className:s.subscribeButton,onClick:()=>a(!0),children:o}),t&&u.createPortal(e.jsx(I,{onClose:()=>a(!1)}),document.body)]})}export{D as S};
