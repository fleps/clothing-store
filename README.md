# (WIP) Clothing Store v1 | A React E-commerce custom project

Reac basic e-commerce store, build as part of the course **"Complete React Developer"** from _"Zero To Master"_.

**Work In Progress**

It's a long/extensive course and there are many modules to go, the current version is just a milestone on the course timeline. I also want to implement many improvements (the course base code is not even responsive and has some bad practices)

The course is not updated to use latest technologies, so I challenged myself to replicate what the course explained using more up to date approaches.

» Open the *current version here: https://fleps.github.io/clothing-store

*Published version is alwasy based on the code from this branch: https://github.com/fleps/clothing-store/tree/releases

## Project Technical Details

- Node v18.16
- Project Boilerplate created using [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) v4.2 (Vite 5.1) (the course uses CRA)
- React + react-dom v18.2
- React-router v6.22
- Sass v1.72
- Firebase v10.9

## Features (as part of the course)
- Login / Registration using Firebase auth with Google and Email/Password options
- Using useContext for Authentication, Products list and Minicart show/hide/render.
  - Context changes later on the course: converted useStates inside the Context to useReducer
- Shop / Category pages with functional Add To Cart button + Minicart + Bag icon counter
- Cart/Minicart quantity changes + product removal + counter update
- Categories data comes from Firebase.

## Extra features added by me so far (not part of the course)
- Products have currency and proper price format.
- Minicart open / close improvements:
  - Minicart auto opens when adding a product to the bag (if the user is not on Cart page). Very basic for e-commerce.
  - Minicart closes when changing "pages".
  - Minicart has CSS animation to open/close, doesn't just appear/disappear.
  - Logic improved: reworked calls to avoid unnecessary re-renders when opening / closing.

- Unnecessary components grouped into one (the coure is totally overboard)
- Unnecessary useState + useEffects removed following React docs.
- Added cleanup function on useEffect tha fetches the category data from Firebase (course never mentions this)
- Semantic / accessible HTML (course code has divs nested into spans, divs/spans having click events...)
- Optimized arrays methods, course teaches bad practices doing 2 (or even more) transverse on the same arrays for no reason.
- Github Actions Workflow implemented to auto-publish when a new version gets pushed to /releases branch
- Navigation fix position with glass effect.

## What's Next
While I'm still doing the course and plan to finish all modules, I'm ont sure I recommend it. I can't judge the React part itself much, and the course still has its values to introduce many different topics needed for someone wanting to learn React, but I expected way more from it.

On the pure Front-End side of things (proper UX for e-commerce sites, good practices for HTML/JS/CSS, responsive layout) the course lacks tremendously and actually teaches bad practices.

My idea is to keep working on this to finish all modules and at the end build a "v2" that resembles more an e-commerce site, with better (AND RESPONSIVE)  UI, more features and refactoring some things the course teached on a way that doesn't seems the best approach according to my readings.