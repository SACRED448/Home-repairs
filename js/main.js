// Slider before and after
$(function() {
  $('.before-and-after').beforeAfter({
    movable: true,
    clickMove: true,
    alwaysShow: true,
    position: 50,
    opacity: 0.4,
    activeOpacity: 1,
    hoverOpacity: 0.8,
    separatorColor: '#fff',
    bulletColor: '#fff',
    arrowColor: '#333',
  });

  $('.before-and-after').beforeAfter();
});


// Рабочий код, меняет картинки по нажатию на кнопку,
// сложно применить для изображений слайдеров.
// const arrayOfImage = [
//   'img/our-works-1.png',
//   'img/our-works-2.png',
//   'img/our-works-3.png',
//   'img/our-works-4.png'
// ];

// const img = document.querySelector('SELECTOR');
// const arrowInRight = document.querySelector('.our-works-purple-arrow-in-right');


// let numImage = 0;

// img.src = arrayOfImage[numImage];

// arrowInRight.addEventListener('click', () => {
//   numImage++;
//   if (numImage >= arrayOfImage.length) {
//     numImage = 0;
//   }
//   console.log(numImage >= arrayOfImage.length);
//   console.log(numImage);
//   img.src = arrayOfImage[numImage];
// });
