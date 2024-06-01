 // Get the DOM elements
 const wrapper = document.querySelector('.wrapper');
 const carousel = document.querySelector('.carousel');
 const images = document.querySelectorAll('.carousel img');
 const buttons = document.querySelectorAll('.button');

 let imageIndex = 0;
 let intervalId;

 // Function to auto-slide the images
 const autoSlide = () => {
     intervalId = setInterval(() => {
         slideImage(++imageIndex);
     }, 2000);
 }

 // Start the auto-slide
 autoSlide();

  // Function to update carousel display to show the specified image
  const slideImage = () => {
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    carousel.style.transform = `translateX(-${imageIndex * 100}%)`;
}


 // Event listeners for the navigation buttons
 document.getElementById('next').addEventListener('click', () => {
    slideImage(++imageIndex);
    resetInterval();
});

document.getElementById('prev').addEventListener('click', () => {
    slideImage(--imageIndex);
    resetInterval();
});

wrapper.addEventListener('mouseover', ()=>{
    clearInterval(intervalId)
})
wrapper.addEventListener('mouseout', ()=>{
    autoSlide();
})