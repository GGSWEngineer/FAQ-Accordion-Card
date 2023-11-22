# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked


### Links

- Solution URL: https://github.com/GGSWEngineer/FAQ-Accordion-Card
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

- used code from previous projects to help with this one
- to center absolute position elemens you can use this common pattern (the code here is different than the one from the actual project), it positions it in the middle of the container its relative to and then the translationX and translationY move it back 50% (moving half of its width and height back to center it perfectly).

.image {
  width: 237px;
  height: 180px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
-

### Continued development

- continue to learn and get comfortable with web development javascript
- solidifying hover, focus, active pseudo class concepts in CSS

## Author

- Frontend Mentor - [@GGSWEngineer](https://www.frontendmentor.io/profile/GGSWEngineer)
- LinkedIn - [Gerardo Garcia](www.linkedin.com/in/gerardo-garcia-19a794275)


