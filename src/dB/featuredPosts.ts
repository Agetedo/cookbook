interface FeaturedPostsType {
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
    
export const featuredPosts: FeaturedPostsType[] = [{
  id: "ftP01",
  imageSrc: "/featurePosts-image01.jpg",
  imageAlt: "Potatoes of various colors",
  mealTime: "Brunch 🍽 Lunch 🍽 Dinner",
  title: "Know Your food: Potato",
  text: "The widely-consumed vegetable is packed with nutrients. It is safe too as only a minimal amount of pesticides are used in its cultivation...",
  readMoreText: "Read more",
  linkTo: "1",
  arrowLink: "/pepicons-arrow.png",
}, {
  id: "ftP02",
  imageSrc: "/featurePosts-image02.jpg",
  imageAlt: "Djh ie egje geoirgo ergh e",
  mealTime: "Breakfast 🍽 Brunch 🍽 Lunch 🍽 Dinner",
  title: "A list of the 27 essential cooking spices You need to know",
  text: "A tiny amount of spice can dramatically alter a dish, adding distinctive flavor to otherwise bland ingredients...",
  readMoreText: "Read more",
  linkTo: "2",
  arrowLink: "/pepicons-arrow.png",
}, {
  id: "ftP03",
  imageSrc: "/featurePosts-image03.jpg",
  imageAlt: "FBHG iuiu vu e",
  mealTime: "Lunch 🍽 Dinner",
  title: "5 Satisfying shrimp recipes to keep in Your back pocket",
  text: "There's a good reason shrimp are invited to just about every party: They're perfect for everything from appetizers to main dishes...",
  readMoreText: "Read more",
  linkTo: "3",
  arrowLink: "/pepicons-arrow.png",
}]