const images = [
    "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.classList.add("bgImage");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);