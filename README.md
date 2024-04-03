# (WIP) Clothing Store v1 | A React E-commerce custom project

React basic e-commerce store, build as part of the course **"Complete React Developer"** from _"Zero To Master"_. (PS: read the *About the Course* section down below)

My React experience has been on and off as my career led to be a Senior Frontend Developer on other platforms (Salesforce SFCC) that don't use React, so I decided to get an extensive course to challenge improve and expand my experience with it.

**Work In Progress**

» Open the *current version here: https://fleps.github.io/clothing-store/

*Published version is always based on the code from the [release branch](https://github.com/fleps/clothing-store/tree/releases).

## Project Technical Details

- Node v18.16
- Project Boilerplate created using [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) v4.2 (Vite 5.1) (the course uses CRA)
- React + react-dom v18.2
- React-router v6.22
- Sass v1.72
- Firebase v10.9

## Features (as part of the course)
- Login / Registration using Firebase auth with Google and Email/Password options
- Initially using `useContext` for Authentication, Products list and Minicart show/hide/render.
  - Refactor #1: Context changes, converting `useStates` inside the Context to `useReducer`
  - Refactor #2: Contexts gets replaced by using Redux. `reselect` added to the project to memoize the category array and avoid recreating it without need and unnecessary re-renders. **Redux-thunk** and **Redux-Saga** examples.
  - Refactor #3: Manual Redux reworked to use **Redux-Toolkit**
- Shop / Category pages with functional Add To Cart button + Minicart + Bag icon counter
- Cart/Minicart quantity changes + product removal + counter update
- Categories data comes from Firebase.
- Code performance improvements:
  - added `useCallback` to avoid redefininig functions;
  - added `memo` to some components to avoind unnecessary re-renders;
  - added react `lazy` and `Suspense` to App for better bundle/code splitting;

## Extra features / learning by me (not part of the course)
- Products have currency and proper price format.
- Minicart open / close improvements:
  - Minicart auto opens when adding a product to the bag (if the user is not on Cart page). Very basic for e-commerce.
  - Minicart closes when changing "pages".
  - Minicart has CSS animation to open/close, doesn't just appear/disappear.
  - Logic improved: reworked calls to avoid unnecessary re-renders when opening / closing.

- Unnecessary `useState` + `useEffects` removed following React docs.
- Added cleanup function on `useEffect` that fetches the category data from Firebase (course never mentions this)
- Semantic / accessible HTML (course code has divs nested into spans, divs/spans having click events...)
- Optimized arrays methods, course teaches bad practices doing 2 (or even more) transverse on the same arrays for no reason.
- Github Actions Workflow implemented to auto-publish when a new version gets pushed to /releases branch
- Navigation style to be position fixed and with glass effect.
- Added **Redux-Persist** for minicart with **Redux-Toolkit**.
- Added Loading element on categories async fecth using **Redux-Toolkit** `createAsyncThunk` approach.
- Added scroll position reset when navigating to checkout

## About the Course
While I'm still doing the course and plan to finish all modules, I'm not sure I recommend it. I can't judge the React part itself too much, and the course still has its values to introduce many different topics needed for someone wanting to learn React, but I expected way more from it.

On the pure Front-End side of things (proper UX for e-commerce sites, good practices for HTML/JS/CSS, responsive layout) the course **lacks tremendously** and **actually teaches bad practices** (double array transverse, nesting divs inside spans, attaching onClick events do spans/divs...).

Also, the teaching method can be frustrating as it's based on refactoring over and over the same features (without explaining that this was going to happen). This resulted in features being developed with icomplete solutions on a specific approach, and then in a few lessons it was completelly refactored to show another way, but always with some flaw. At the end, it becomes overwhelming and you not clear what is the best way to do XYZ feature.

## What's Next
My idea is to keep working on this to finish all modules and at the end build a "v2" that resembles more an e-commerce site, with better (AND RESPONSIVE)  UI, more features and refactoring some things the course taught on a way that doesn't seems the best approach according to my readings.

