// previous code, my code

// const questions = document.querySelectorAll(".question");
// const answers = document.querySelectorAll(".answer");

// questions.forEach((question) => {
//   question.addEventListener("click", () => {
//     const answer = question.querySelector(".answer");
//     const arrow = question.querySelector(".arrow");

//     if (answer.style.display === "block") {
//       answer.style.display = "none";
//       question.classList.remove("active");
//       arrow.src = "images/icon-arrow-down.svg";
//       return;
//     }

//     // remove active class from every question
//     questions.forEach((question) => {
//       question.classList.remove("active");
//     });
//     answers.forEach((answer) => {
//       answer.style.display = "none";
//     });
//     question.classList.add("active");
//     answer.style.display = "block";
//     arrow.src = "images/icon-arrow-up.svg";
//   });
// });


// cleanup version

// const questions = document.querySelectorAll(".question");
// const answers = document.querySelectorAll(".answer");



// questions.forEach((question) => {
//   question.addEventListener("click", () => {
//     const answer = question.querySelector(".answer");
//     const arrow = question.querySelector(".arrow");
   

//     const isActive = answer.style.display === "block";

//     questions.forEach((q) => q.classList.remove("active"));
//     answers.forEach((a) => (a.style.display = "none"));

//     question.classList.toggle("active", !isActive);
//     answer.style.display = isActive ? "none" : "block";
//     arrow.src = isActive ? "images/icon-arrow-down.svg" : "images/icon-arrow-up.svg";
//   });
// });

// option to just make the h2s and arrows be able to hide/show the answers instead of the whole question div


const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questions.forEach((question) => {
    const h2 = question.querySelector(".q");
    const arrow = question.querySelector(".arrow");

    function toggleQuestion() {
        const answer = question.querySelector(".answer");
        const isActive = answer.style.display === "block";

        questions.forEach((q) => q.classList.remove("active"));
        answers.forEach((a) => (a.style.display = "none"));

        question.classList.toggle("active", !isActive);
        answer.style.display = isActive ? "none" : "block";
        arrow.src = isActive ? "images/icon-arrow-down.svg" : "images/icon-arrow-up.svg";
    }

    h2.addEventListener("click", toggleQuestion);
    arrow.addEventListener("click", toggleQuestion);
});


// Assuming 'myImage' is the image element you want to modify
const myImage = document.querySelector('.woman-image');

function updateImageSrc() {
  if (window.innerWidth > 992) {
    // Change the src when the window width is greater than 992px
    myImage.src = 'images/illustration-woman-online-desktop.svg';
  } else {
    // Change the src for smaller window sizes
    myImage.src = 'images/illustration-woman-online-mobile.svg';
  }
}

// Call the function initially
updateImageSrc();

// Add a resize event listener to update the image src when the window is resized
window.addEventListener('resize', updateImageSrc);


