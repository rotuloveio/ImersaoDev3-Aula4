var listaFilmes = [];

listaFilmes.push(
  "https://static.wikia.nocookie.net/fanmade-films-4/images/c/c0/The_Matrix_1999_poster_1.jpg"
);
listaFilmes.push(
  "https://img.elo7.com.br/product/original/26799D6/big-poster-filme-matrix-reloaded-lo01-tamanho-90x60-cm-matrix-2.jpg"
);
listaFilmes.push(
  "https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
);
listaFilmes.push(
  "https://m.media-amazon.com/images/M/MV5BMmRmZTA3NzAtN2RlZC00Mjc1LTllZDQtNDc0YTYzZmM4ZTQ1XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UX1000_.jpg"
);

listaLinks = [];
listaLinks.push("https://www.imdb.com/title/tt0133093/");
listaLinks.push("https://www.imdb.com/title/tt0234215/");
listaLinks.push("https://www.imdb.com/title/tt0242653/");
listaLinks.push("https://www.imdb.com/title/tt10838180/");

for (var i = 0; i < listaFilmes.length; i++) {
  document.write(
    "<a href=" +
      listaLinks[i] +
      ' target="_blank"><img src=' +
      listaFilmes[i] +
      "></a>"
  );
}
