const posts = [
  {
    titolo: "Blog Express 1",
    contenuto: "Esercizio Node/Express 1",
    immagine: "",
    tags: ["#tag1", "#tag2", "#tag3"],
  },
  {
    titolo: "Blog Express 2",
    contenuto: "Esercizio Node/Express 2",
    immagine: "",
    tags: ["#tag4", "#tag5", "#tag6"],
  },
  {
    titolo: "Blog Express 3",
    contenuto: "Esercizio Node/Express 3",
    immagine: "",
    tags: ["#tag7", "#tag8", "#tag9"],
  },
  {
    titolo: "Blog Express 4",
    contenuto: "Esercizio Node/Express 4",
    immagine: "",
    tags: ["#tag10", "#tag11", "#tag12"],
  },
  {
    titolo: "Blog Express 5",
    contenuto: "Esercizio Node/Express 5",
    immagine: "",
    tags: ["#tag13", "#tag14", "#tag15"],
  },
];


function index(req, res) {
    res.json({
        posts: posts,
        count: posts.length
    })
}

module.exports = {
    index
}
