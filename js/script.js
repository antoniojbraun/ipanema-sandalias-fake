let table = new DataTable("#myTable");

let slider = document.getElementById("slider");
let img = document.createElement("img");
img.src = "img/img-2.avif";
img.classList.add("slide");
slider.append(img);


let slideIndex = 1;

const prevSlide = () => {
  if (slideIndex !== 1) {
    slideIndex--;
  } else {
    slideIndex = 4;
  }
  trocaSlide(slideIndex)
};

const nextSlide = () => {
  if (slideIndex !== 4) {
    slideIndex++;
  } else {
    slideIndex = 1;
  }
  trocaSlide(slideIndex);

};

const trocaSlide = (numero) => {
  img.src = `img/img-${numero}.avif`;
  img.classList.add("slide");
};


