# Frontend Mentor - Tip Calculator App solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Calculate the correct tip and total cost of the bill per person.

### Screenshots

![Desktop Site](screenshots/desktop-screenshot.jpg)
![Mobile Site](screenshots/mobile-screenshot.jpg)

### Links

- Solution: [GitHub repo](https://github.com/akcumeh/09-tip-calculator-app)
- Live At: [Live Site](https://akcumeh.github.io/09-tip-calculator-app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Bootstrap](https://getbootstrap.com/)
- [jQuery](https://jquery.com)
- [FontAwesome](https://fontawesome.com)

### What I learned

In the course of solving this challenge, I learned:
- various ways of [styling radio elements](#useful-resources) in CSS.
- how to set [placeholder text color](#useful-resources) using the selector ```::placeholder```, like so:

```html
<input type="text" name="Textbox" value="" placeholder="Enter some text">
```
```css
::placeholder {
    color: salmon;
}
```
- how to ["insert" an icon into an input field](#useful-resources) - essentially, it entails creating a "wrapper" that encloses the icon and the input field together, then styling appropriately. Almost any element with a ```.wrapper``` class included works, e.g. ```<p class="wrapper"></p>``` or ```<div class="wrapper"></div>```.
- how to layout page elements using [**CSS Grid**](https://web.dev/learn/css/grid/).
- how to set a text input element's [focus outline](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus#focus_outline_none).

### Useful resources

- I asked [this question](https://stackoverflow.com/questions/73572206/how-to-style-an-html-radio-input-element-such-that-the-radio-button-is-absent) about how to style radio elements on Stack Overflow and got [this answer](https://stackoverflow.com/a/73573084/17497724) which greatly helped. I'm glad to have learned a new styling technique.
- This [W3Schools howto](https://www.w3schools.com/howto/howto_css_placeholder.asp) taught me how to style the placeholder text in an input field.
- This [code playground](https://www.tutorialbrain.com/editor_css/css_icons_inside_and_outside_input_text.html) helped me understand how to "insert" an icon into a textbox.
- This [CSS Course](https://web.dev/learn/css/) by Google Developers, and its section on [CSS Grid](https://web.dev/learn/css/grid/) taught me the essentials of styling and setting layouts in grid.
- As always, the MDN Docs is a most helpful resource. This time I refreshed myself on [ARIA roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles), and learned about the [text input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text) and styling some of its states such as the [```:focus```](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus#focus_outline_none) state.
- [This article](https://www.outsystems.com/forums/discussion/61600/how-to-deselect-the-radio-on-click-of-selected-radio/) on the OutSystems Community forum helped me with a code snippet to deselect the radio button when the "custom" text input field was focused on.
- I came across [this article on ModernCSS](https://moderncss.dev/pure-css-custom-styled-radio-buttons/). Although it was not what I needed to solve this challenge, it's a good styling trick too, which I'd like to apply in future projects.

### Continued development

- I have found the jQuery library to be very useful as it makes me more efficient as a developer by shortening and simplifying lots of JavaScript code. I would like to get more practice with it in future projects.
- I have learned a lot of new techniques in CSS, including styling radio elements, adding icons into input fields, and CSS grid layout. I plan to use these abilities in future projects.
- I'm happy with how I make my webpages accessible in addition to beautifying them. I plan to keep it up going forward.

## Author

Thank you for reading this far! You're welcome to view and follow my profiles:

- GitHub - [@akcumeh](https://github.com/akcumeh)
- Frontend Mentor - [@akcumeh](https://www.frontendmentor.io/profile/akcumeh)
- Twitter - [@akcumeh](https://www.twitter.com/akcumeh)

## Acknowledgments

I am grateful to [A Howarth](https://stackoverflow.com/users/10867454/a-haworth), the Stack Overflow user whose answer was most helpful to the completion of the project. I'm also glad I learned a new styling technique.