let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); 
}



//form validation

function validateForm(event) {
  event.preventDefault();

  var name = document.getElementById('fullname').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('number').value;

  if (fullname.trim() === '') {
    alert('Please enter your name.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!isValidPhone(number)) {
    alert('Please enter a valid phone number.');
    return;
  }


  alert('Form submitted successfully!');
  document.getElementById('contactForm').reset();
}

function isValidEmail(email) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function isValidPhone(number) {
  var pattern = /^\d{10}$/;
  return pattern.test(phone);
}


smoothScroll.init();


function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

var galleryImages = document.querySelectorAll(".image-gallery img");
galleryImages.forEach(function (image) {
  image.addEventListener("click", function () {
    openLightbox(image.src, image.alt);
  });
});

function openLightbox(src, alt) {
  var lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.innerHTML = '<img src="' + src + '" alt="' + alt + '">';
  document.body.appendChild(lightbox);
  lightbox.addEventListener("click", closeLightbox);
}

function closeLightbox() {
  var lightbox = document.getElementById("lightbox");
  lightbox.parentNode.removeChild(lightbox);
}
