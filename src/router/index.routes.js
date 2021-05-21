import { pages } from "../controllers/index";

const router = async (route) => {
  let content = document.getElementById("root");
  content.innerHTML = "";

  console.log(route);

  switch (route) {
    case "#/": {
      return content.appendChild(pages.home());
    }
    
    case "#/maps": {
      return content.appendChild(pages.maps());
    }

    case "#/posts": {
      return content.appendChild(await pages.posts());
    }

    case "#/faq": {
      return content.appendChild(pages.faq());
    }

    default: {
      return content.appendChild(pages.NotFound());
    }
  }

};

export { router };
