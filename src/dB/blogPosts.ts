interface BlogPostsType {
  id: string | number | bigint;
  imageSrc: string;
  imageAlt: string;
  mealTime: string;
  title: string;
  text: string;
  readMoreText: string;
  linkTo: string;
  arrowLink: string;
}
    
export const blogPosts: BlogPostsType[] = [{
  id: "ftP01",
  imageSrc: "/featurePosts-image01.jpg",
  imageAlt: "Potatoes of various colors",
  mealTime: "Brunch 🍽 Lunch 🍽 Dinner",
  title: "Know Your food: Potato",
  text: "The widely-consumed vegetable is packed with nutrients...",
  readMoreText: "Read more",
  linkTo: "/post-page",
  arrowLink: "/pepicons-arrow.png",
}, {
  id: "ftP02",
  imageSrc: "/featurePosts-image02.jpg",
  imageAlt: "Djh ie egje geoirgo ergh e",
  mealTime: "Brunch 🍽 Lunch 🍽 Dinner",
  title: "A list of the 27 essential cooking spices You need to know",
  text: "A tiny amount of spice can dramatically alter...",
  readMoreText: "Read more",
  linkTo: "/post-page",
  arrowLink: "/pepicons-arrow.png",
}, {
  id: "ftP03",
  imageSrc: "/featurePosts-image03.jpg",
  imageAlt: "FBHG iuiu vu e",
  mealTime: "Lunch 🍽 Dinner",
  title: "5 Satisfying shrimp recipes to keep in Your back pocket",
  text: "There's a good reason shrimp are invited to just about every party...",
  readMoreText: "Read more",
  linkTo: "/post-page",
  arrowLink: "/pepicons-arrow.png",
}, {
  id: "ftP04",
  imageSrc: "/featurePosts-image01.jpg",
  imageAlt: "Potatoes of various colors",
  mealTime: "Brunch 🍽 Lunch 🍽 Dinner",
  title: "Know Your food: Potato",
  text: "The widely-consumed vegetable is packed with nutrients...",
  readMoreText: "Read more",
  linkTo: "/post-page",
  arrowLink: "/pepicons-arrow.png",
}, {
  id: "ftP05",
  imageSrc: "/featurePosts-image02.jpg",
  imageAlt: "Djh ie egje geoirgo ergh e",
  mealTime: "Brunch 🍽 Lunch 🍽 Dinner",
  title: "A list of the 27 essential cooking spices You need to know",
  text: "A tiny amount of spice can dramatically alter...",
  readMoreText: "Read more",
  linkTo: "/post-page",
  arrowLink: "/pepicons-arrow.png",
}, {
  id: "ftP06",
  imageSrc: "/featurePosts-image03.jpg",
  imageAlt: "FBHG iuiu vu e",
  mealTime: "Lunch 🍽 Dinner",
  title: "5 Satisfying shrimp recipes to keep in Your back pocket",
  text: "There's a good reason shrimp are invited to just about every party...",
  readMoreText: "Read more",
  linkTo: "/post-page",
  arrowLink: "/pepicons-arrow.png",
}];