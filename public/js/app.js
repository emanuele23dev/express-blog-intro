let ulEl = document.querySelector(".lista_post");

axios.get("http://127.0.0.1:3000/posts").then((response) => {
  const posts = response.data;
  console.log(posts);

  let postElement = "";

  posts.forEach((post) => {
    const { titolo, contenuto, img, tags } = post;
    console.log(titolo, contenuto, img, tags);

    const markup = `
    <li class="col-3">
        <div class="card">
            <img src="${img}" alt="">
            <h2 class="mt-3 text-center">${titolo}</h2>
            <p class="mt-3 text-center">${contenuto}</p>
            <p class="mt-3 text-center">${tags}</p>
        </div>
    </li>
    `;

    postElement += markup;
  });

  ulEl.innerHTML = postElement;
});
