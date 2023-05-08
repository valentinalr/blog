module.exports = async function (Article) {
  await Article.bulkCreate([
    {
      title: "La pudrió al angulo",
      content:
        "El base de Golden State Warriors Stephen Curry, cuatro veces ganador de la NBA, ha firmado un acuerdo pionero con la multinacional estadounidense de material deportivo Under Armour por el que participará en el desarrollo de productos de baloncesto y, entre otros, golf y su colección Stephen Curry.Under Armour y Stephen Curry han ampliado a largo plazo una vinculación que se remonta a 2013 “para servir a los atletas y las comunidades e impulsar el éxito mutuo en los años venideros”, indica Under Armour en un comunicado.Basándose en el éxito y los logros de la última década, ambas partes seguirán impulsando soluciones de producto e innovación, impactando en comunidades de todo el mundo, y haciendo crecer Under Armour y Curry Brand juntos.",
      image: "https://wallpapers.com/images/featured/58gxxwbrwazof803.jpg",
      author_name: "Martin Pediatrico",
    },
    {
      title: "La alegría que tuvo Cristiano Ronaldo en su hat-trick",
      content:
        "Lejos de ser el indiscutible número 1, el portugués ha perdido la Copa del Rey de Campeones de Arabia Saudita y ahora podría suceder lo mismo con la Liga local, por lo que se comienza a rumorear que dejaría el Al Nassr, a pesar de haber firmado contrato por dos años. Lo primero que se reveló fue que al Newcastle de la Premier League no lo tendría en sus planes, al menos así lo dio a conocer el entrenador Eddie Howe, quien aseguró que “nunca vamos a estar en condiciones de pagar esos traspasos y esos sueldos, así que tenemos que buscarlos jóvenes y convertirlos en los jugadores que pueden llegar a ser”.",
      image:
        "https://image.winudf.com/v2/image/Y29tLndhbGxwYXBlcmhkLnJvbmFsZG9mb290YmFsbF9zY3JlZW5fMV8xNTM0OTEzMDI2XzAxNw/screen-1.webp?fakeurl=1&type=.webp",
      author_name: "Luis Huldarre",
    },
    {
      title: "¿Qué pasará con Messi y su contrato con el PSG?",
      content:
        "El PSG juega esta noche ante el Troyes fuera de casa (20.45, Eurosport 2), pero Messi no estará ni en el campo ni en el banquillo. El astro argentino sigue castigado por su club, que le impuso una sanción de 15 días de empleo y sueldo, pese a que Leo ya pidió disculpas el viernes en un vídeo casero en el que mostraba su arrepentimiento por su viaje a Saudi Arabia del pasado lunes. Tras ese vídeo, se esperaba un gesto del club, que, por el momento, no se ha producido aunque no se descarta que sea mañana, lunes, tras el partido de esta noche. Ese gesto sería perdonar al jugador, quitarle esa sanción y que se pueda entrenar con sus compañeros la próxima semana. Recordemos que Leo no se ejercita con su equipo desde el lunes, día del entrenamiento de la polémica. El martes fue día libre y desde el miércoles Leo no estuvo con sus compañeros.",
      image: "https://images5.alphacoders.com/521/thumb-1920-521476.jpg",
      author_name: "Luis Huldarre",
    },
  ]);
};
