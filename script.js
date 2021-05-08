//Change to red color and increase font size when the mouse is over the h1 tag content.

const header = document.querySelector('h1');
function redAmplifier() {
  event.target.style.color = "red";
  event.target.style.fontSize = "50px";
};
header.addEventListener('mouseover',redAmplifier);


//Change to blue color to all h3 tags

const cities = document.getElementsByTagName('h3');
for (i = 0; i<=3 ;i++) {
  cities[i].addEventListener("mouseover",function(event) {
      event.target.style.color = "blue";
  });
};
