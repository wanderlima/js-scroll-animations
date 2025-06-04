# ⭥ JS Scroll Animations

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

JS Scroll Animations is a simple and lightweight library for scroll animations. Follow the instructions below to set it up.

## Highlights

1. Vanilla JS
2. Easy setup using HTML dataset property
3. JS Actions
4. CSS Animations

## Instructions

### 1. Install or download the package

Download or install the package using a package manager:

```console
yarn add js-scroll-animations
```

or

```console
npm i js-scroll-animations
```

### 2. Import the package assets

In your HTML file, add the following link and script tags:

```html
<link
  rel="stylesheet"
  href="../node_modules/js-scroll-animations/dist/styles.css"
/>
<script src="../node_modules/js-scroll-animations/dist/js-scroll-animations.js"></script>
```

Alternatively, if you are using a module bundler, you can import the assets in your JavaScript file:

```js
import jsScroll from "js-scroll-animations";
import "js-scroll-animations/dist/styles.css";
```

### 3. Add the dataset property to the elements you want to animate

Add the data-jsscroll property to activate the scroll animation for an element. You can use other dataset properties to configure the animation, such as data-jsscroll-delay and data-jsscroll-threshold. For example:

```html
<div
  data-jsscroll
  data-jsscroll-delay="200"
  data-jsscroll-threshold="1"
  data-jsscroll-slide-top
  class="box"
>
  content
</div>
```

### 4. Initialize the animations

Initiate the animations with the following code:

```js
const jsScroll = jsScrollAnimations();
jsScroll.init();
```

**That's it!** Check the demo page to see how it works and how to set it up.

[https://wanderlima.github.io/js-scroll-animations/](https://wanderlima.github.io/js-scroll-animations/)

## Properties

The following table shows the available dataset properties that you can use to configure the scroll animations:

| PROPERTY                     | DEFAULT | DESCRIPTION                                                                                              |
| ---------------------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| `data-jsscroll`              |         | Activate scroll animation for the element. A fade-in animation will be used as the default.              |
| `data-jsscroll-delay`        | `0`     | A delay to trigger the animation when the element is in the view.                                        |
| `data-jsscroll-threshold`    | `1.25`  | Threshold to adjust when the animation will be triggered based on the element's y position and the view. |
| `data-jsscroll-fade-in`      |         | Fade-in animation.                                                                                       |
| `data-jsscroll-slide-top`    |         | Slide from the bottom to the top of the element position animation.                                      |
| `data-jsscroll-slide-bottom` |         | Slide from the top to the bottom of the element position animation.                                      |
| `data-jsscroll-slide-left`   |         | Slide from the left to the right of the element position animation.                                      |
| `data-jsscroll-slide-right`  |         | Slide from the right to the left of the element position animation.                                      |

## Actions

The following table shows the available JS actions available to control the animations:

| ACTION    | DESCRIPTION                                                                                                |
| --------- | ---------------------------------------------------------------------------------------------------------- |
| `init`    | Initiate the scroll animations.                                                                            |
| `pause`   | Pause the scroll animations for the non-triggered animations. Use init to resume the animations.           |
| `reset`   | Resets all elements to their non-animated state, which will trigger the animations again when scrolled to. |
| `disable` | Disables all animations, making all elements visible.                                                      |

---

This project was created by [Wander Lima](https://wanderlima.com) and is licensed under the [MIT license](LICENSE).
