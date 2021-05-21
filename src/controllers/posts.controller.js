import view from '../view/posts.html';

const getPosts = async () => {
  const response = await fetch("/src/resources/rawjson/rawjson.json");
  return await response.json();
};

export default async () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  const postsElement = divElement.querySelector("#posts");
  //const totalPosts = divElement.querySelector('#total');

  const posts = await getPosts();
 

  posts.slice(1).forEach((post) => {
    postsElement.innerHTML += `
      <div class="items-center justify-center rounded">  
        <li class="grid border-4 bg-blue-200 text-black">
        <h1 class="text-4xl">${post.title}</h1>
        <p class="text-xl">
        ${post.body}
        </p>
        </li>
      </div>
    `;
  });

  //totalPosts.innerHTML += posts.length;

  return divElement;
};
