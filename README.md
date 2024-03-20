# WIP - Clothing Store | A React E-commerce custom project

This project was done as part of the course **"Complete React Developer"** from _"Zero To Master"_.

The course is not updated to use latest technologies, so I challenged myself to replicate what the course explained using more up to date approaches.

## Project Technical Details

- Node v18.16
- Project Boilerplate created using [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) v4.2 (Vite 5.1) (course uses CRA)
- React + react-dom v18.2
- React-router v6.22
- Sass v1.72
- Firebase v10.9

## Features (as part of the course)
- Login / Registration using Firebase auth with Google and Email/Password options
- Using useContext for Authentication, Products list and Minicart show/hide/render.
- Shop / Category pages with functional Add To Cart button + Minicart + Bag icon counter
- Cart/Minicart quantity changes + product removal + counter update
- Categories data comes from Firebase.

## Extra features added by me (nor part of the course)
- Products have currency and proper price format.
- Minicart open / close improvements:
  - Minicart opens when adding a product to the bag (if the user is not on Cart page).
  - Minicart closes when changing "pages".
  - Minicart has CSS animation to open/close, doesn't just appear/disappear.
  - Logic improved: reworked calls to avoid unnecessary re-renders when opening / closing.

- Unnecessary components grouped into one (the coure is totally overboard)
- Unnecessary useState + useEffects removed following React docs.
- Added cleanup function on useEffect tha fetches the category data from Firebase (course never mentions this)
- Semantic / accessible HTML (course code has divs nested into spans, divs/spans having click events...)
- Optimized arrays methods, course teaches bad practices doing 2 (or even more) transverse on the same arrays for no reason.

