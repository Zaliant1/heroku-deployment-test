const catButton = () => {
  document.getElementById("cat-gen").addEventListener("click", () => {
    let randomCats = [
      "https://i.etsystatic.com/20649982/r/il/97fb65/2270932519/il_794xN.2270932519_pxmn.jpg",
      "https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg?q=60",
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
      "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
    ];
    let min = Math.ceil(0);
    let max = Math.floor(randomCats.length);
    let randomNum = Math.floor(Math.random() * (max - min) + min);

    let img = document.createElement("img");

    Object.assign(img, {
      src: String(randomCats[randomNum]),
      id: randomNum,
      height: 120,
      width: 120,
    });

    if (!document.getElementById(randomNum)) {
      document.getElementById("cat-list").appendChild(img);
    }

    console.log(randomCats[Math.floor(Math.random() * (max - min) + min)]);
  });
};

catButton();
