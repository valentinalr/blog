module.exports = async function (Article) {
  await Article.create({
    title: "La pudrió al angulo",
    content:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas",
    image:
      "https://c4.wallpaperflare.com/wallpaper/964/689/241/basketball-stephen-curry-golden-state-warriors-nba-hd-wallpaper-preview.jpg",
    author_name: "Martin Pediatrico",
  });
};
