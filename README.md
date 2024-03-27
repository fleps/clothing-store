# (WIP) Clothing Store v1 | A React E-commerce custom project

Reac basic e-commerce store, build as part of the course **"Complete React Developer"** from _"Zero To Master"_. (PS: read the *About the Course* section down below)

**Work In Progress**

It's a long/extensive course and there are many modules to go, the current version is just a milestone on the course timeline. I also want to implement many improvements (the course base code is not even responsive and has some bad practices)

The course is not updated to use latest technologies, so I challenged myself to replicate what the course explained using more up to date approaches.

» Open the *current version here: https://fleps.github.io/clothing-store

*Published version is alwasy based on the code from the [release branch](https://github.com/fleps/clothing-store/tree/releases).

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
  - Refactor #2: Contexts gets replaced by using Redux. `reselect` added to the project to memoize the category array and avoid recreating it without need and unnecessart re-renders. Redux-thunk and Redux-Saga examples.
  - Refactor #3: Manual Redux reworked to use Redux-Toolkit
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
- Unnecessary `useState` + `useEffects` removed following React docs.
- Added cleanup function on `useEffect` tha fetches the category data from Firebase (course never mentions this)
- Semantic / accessible HTML (course code has divs nested into spans, divs/spans having click events...)
- Optimized arrays methods, course teaches bad practices doing 2 (or even more) transverse on the same arrays for no reason.
- Github Actions Workflow implemented to auto-publish when a new version gets pushed to /releases branch
- Navigation fix position with glass effect.

## About the Course
While I'm still doing the course and plan to finish all modules, I'm not sure I recommend it. I can't judge the React part itself too much, and the course still has its values to introduce many different topics needed for someone wanting to learn React, but I expected way more from it.

On the pure Front-End side of things (proper UX for e-commerce sites, good practices for HTML/JS/CSS, responsive layout) the course **lacks tremendously** and **actually teaches bad practices** (double transversing arrays, nesting divs inside spans, attaching onClick events do spans/divs...).

Also, the teaching method can be really infuriating as it's based on rafacoring over and over. Basically you will build some functionality to learn something (like useEffect), but even as new to React and had the impression that something was off, the approach had flaws and sub-optimal code. Then, at a later lesson, it REFACTORS the entire functionality to remove that code (prob that's why it had flaws, he knew it was going to be removed), to teach another approach. And AGAIN, there are flaws on the new approach, as later on the course you will need to refactor AGAIN. So far this happened with Auth, Category and Minicart functionalities, having refactored them 3 times already and each one had some caveats and weird flaws that many stundents point out in the video comments. And at the end, do you really LEARN something if you are always see

## What's Next
My idea is to keep working on this to finish all modules and at the end build a "v2" that resembles more an e-commerce site, with better (AND RESPONSIVE)  UI, more features and refactoring some things the course teached on a way that doesn't seems the best approach according to my readings.