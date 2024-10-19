interface Social {
  id: string | number | bigint;
  imgSrc: string;
  linkTo: string;
}

export const socialMenu: Social[] = [{
  id: "fSm01",
  imgSrc: "/github-icon.png",
  linkTo: "https://github.com/",
}, {
  id: "fSm02",
  imgSrc: "/social-icon.png",
  linkTo: "https://www.google.com/",
}, {
  id: "fSm03",
  imgSrc: "/social-drive-icon.png",
  linkTo: "https://www.google.com/",
}, {
  id: "fSm04",
  imgSrc: "/social-codepen-icon.png",
  linkTo: "https://codepen.io/", 
}];
