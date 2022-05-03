let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];
function init() {
  let glassesArray = [];
  glassesArray = Object.values(dataGlasses);
  // console.log(glassesArray);
  renderGlassesList(glassesArray);
  tryGlasses(glassesArray);
}
init();

const glassesArray = Object.values(dataGlasses);

function renderGlassesList(a) {
  const content = a.reduce((result, glasses) => {
    return (
      result +
      `
          <div class="col-4" id="glasses_${glasses.id}")">
            <img src="${glasses.src}" alt="" class="img-fluid"/>
          </div>
        `
    );
  }, "");
  getEleById("vglassesList").innerHTML = content;
}

function tryGlasses(a) {
  for (let glasses of a) {
    document
      .getElementById(`glasses_${glasses.id}`)
      .addEventListener("click", () => {
        getEleById(
          "avatar"
        ).innerHTML = `<img src="${glasses.virtualImg}" alt = "" id="glasses_img" style="display:blocks" />`;
        getEleById("glassesInfo").innerHTML = `
        <div id="name">
        <p class="pb-2" style="font-size:23px;font-weight:bold;">${glasses.name} - ${glasses.brand} (${glasses.color})</p>
        </div>
        <div id="price_info" >  
          <button class="btn btn-danger" >$${glasses.price}</button>
          <span class="text-success">Stocking</span>
        </div>
      </div>
      <div id="description" class="mt-2">
        <p>
          ${glasses.description}
        </p>
      `;
        getEleById("glassesInfo").style.display = "block";
      });
  }
}
window.removeGlasses = (value) => {
  if (!value) {
    getEleById("glasses_img").style.display = "block";
    getEleById("glassesInfo").style.display = "block";
  } else {
    getEleById("glasses_img").style.display = "none";
    getEleById("glassesInfo").style.display = "none";
  }
};
function getEleById(id) {
  return document.getElementById(id);
}
