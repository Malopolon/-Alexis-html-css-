let ceo = document.getElementById('founder_CEO');

ceo.addEventListener('click', () => {
  let ceoDes = document.getElementById('descCEO');
    ceoDes.classList.toggle('active_desc');
});

ceo.addEventListener('click', () => {
  ceo.classList.toggle('active');
});




let lead = document.getElementById('lead_dev');

lead.addEventListener('click', () => {
  let leadDes = document.getElementById('descLeadDev');
    leadDes.classList.toggle('active_desc');
});

lead.addEventListener('click', () => {
  lead.classList.toggle('active');
});




let design = document.getElementById('designer');

design.addEventListener('click', () => {
  let designDes = document.getElementById('descDesign');
    designDes.classList.toggle('active_desc');
});

design.addEventListener('click', () => {
  design.classList.toggle('active');
});



let consultant = document.getElementById('consultant');

consultant.addEventListener('click', () => {
  let concultantDes = document.getElementById('descConsultant');
    concultantDes.classList.toggle('active_desc');
});

consultant.addEventListener('click', () => {
    consultant.classList.toggle('active');
});




let slideIndex = 1;
showSlides(slideIndex);

function currentxSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    let i;

    let slides = document.getElementsByClassName("testimonials_item");
    let dots = document.getElementsByClassName("slider_dots_item");

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active_dots", "");
    }
    
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active_dots";
}