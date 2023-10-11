# Frontend Mentor - Huddle landing page with alternating feature blocks solution

This is a solution to the [Huddle landing page with alternating feature blocks challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-alternating-feature-blocks-5ca5f5981e82137ec91a5100). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

#Desktop
![Screenshot 2023-10-11 at 2 44 49 PM](https://github.com/hashmi7917/tailwindcss-huddle-page/assets/38833326/6203170c-f282-4812-a0e2-b8dbf9d2ac38)

#Mobile
![Screenshot 2023-10-11 at 2 44 23 PM](https://github.com/hashmi7917/tailwindcss-huddle-page/assets/38833326/48a2021e-c7a3-4a20-8aac-d00dedd7748a)

### Links

- Solution URL: [GitHub](https://github.com/hashmi7917/tailwindcss-huddle-page)
- Live Site URL: [Netlify](https://huddle-landing-page-tailwind-css.netlify.app/)

## My process

### Built with

- Tailwind CSS
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Tailwind CSS - Utility First Classes

```html
<div
  className="flex lg:w-5/6 flex-col xl:flex-row justify-around xl:justify-evenly xl:items-center h-full px-4 xl:px-12 xl:py-8"
>
  <HeroText />
  <HeroImage />
</div>
```

```css
.flex {flex-col items-center justify-around xl:max-w-full md:max-w-4xl max-w-md h-full bg-primary-verypalecyan}
```

```js
const [width, setWidth] = React.useState(window.innerWidth);
const breakPoint = 1440;
useEffect(() => {
  const handleWindowResize = () => setWidth(window.innerWidth);
  window.addEventListener('resize', handleWindowResize);
  return () => window.removeEventListener('resize', handleWindowResize);
}, []);
```

### Continued development

Tailwind CSS and its Utility Class also making layouts using grids and flexbox

### Useful resources

- [Animejs](https://www.npmjs.com/package/react-anime) - This helped me for Spring Animation on Load. I really liked this pattern and will use it going forward.

## Author

- Portfolio - [Instagram](https://instagram.com/hashmi.developer)
- Frontend Mentor - [Muqtadeer](https://www.frontendmentor.io/profile/hashmi7917)
- GitHub - [@hashmi7917](https://github.com/hashmi7917)

## Acknowledgments

Stackoverflow For Getting Snippets for device width conditional redering.
Animejs Library For On Load Spring Animation

#Project Installation Guide
Install dependencies

`npm install` or `yarn install`

Start the server

`npm run dev` or `yarn dev`

Now customize everything as your needs.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Support

Leave a star ⭐ if it helped you. Thank you💖
