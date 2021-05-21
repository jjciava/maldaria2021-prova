import Home from "./home.controller";
import Posts from "./posts.controller";
import Faq from "./faq.controller"
import Maps from "./maps.controller"
import NotFound from "./404.controller";

const pages = {
  home: Home,
  posts: Posts,
  faq: Faq,
  maps: Maps,
  notFound: NotFound,
};

export { pages };
