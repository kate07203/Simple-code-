# HTML, CSS, and JavaScript Lab

Lab date: October 7, 2026

A beginner practice page for learning how HTML creates structure, CSS controls appearance, and JavaScript adds interactions.

## Project files

- `index.html`: page content, headings, paragraphs, and buttons.
- `style.css`: colors, font sizes, and other presentation rules.
- `script.js`: functions that change elements when buttons are clicked.

## What we learned

### HTML: structure and content

We started with `<!DOCTYPE html>`, `<html lang="en">`, `<head>`, `<meta charset="UTF-8">`, `<title>`, and `<body>`.

- The head contains page information; the body contains visible content.
- `h1`, `h2`, and `h3` create different heading levels.
- `div` groups content, `span` wraps text within a line, and `p` creates a paragraph.
- `button` creates a clickable control.
- A class can be shared by multiple elements; an ID identifies one element.
- A webpage preview displays the result, while the code file displays its HTML source.

We connected the stylesheet inside the head:

```html
<link rel="stylesheet" href="style.css">
```

We loaded JavaScript near the end of the body, after the elements it uses:

```html
<script src="script.js"></script>
```

### CSS: appearance

We began with `h1 { font-size: 36px; }` and learned that the HTML must link to the CSS file before its rules apply.

- Tag selectors such as `h1`, `p`, and `button` style matching elements.
- `.test` selects elements with `class="test"`.
- `#colorButton` selects the element with `id="colorButton"`.
- `color` changes text color; `background-color` changes the background.
- `font-size`, `font-family`, and `font-weight` control text appearance.

### JavaScript: interaction

- A function groups instructions that can run when a button is clicked.
- `document.querySelectorAll()` selects all matching elements.
- `document.querySelector()` selects the first matching element.
- `forEach()` applies instructions to each selected element.
- `if` / `else` chooses between two actions, allowing a value to toggle.
- JavaScript uses `style.fontWeight` and `style.backgroundColor` for the CSS properties `font-weight` and `background-color`.
- We practiced both `onclick` in HTML and `addEventListener("click", ...)` in JavaScript.
- An extra closing brace can prevent a script from running; event handlers must reference functions that exist.

### Saving with Git and GitHub

Files are saved on the computer, a Git commit records a snapshot, and a push uploads commits to GitHub. We created the first commit on `main`, connected this folder to the repository, and pushed it.

Repository: [Simple-code-](https://github.com/kate07203/Simple-code-)

## Code changes made during the session

### `index.html`

- Created the basic HTML document with the title `Document`.
- Replaced the original sample heading with `Test heading 1` and added `Test heading 2`, ultimately using an `h2` for the second heading.
- Kept the sample span text `THIS` and gave it the class `test`.
- Added the same `test` class to the second heading so one function can affect both elements.
- Added a paragraph and an in-class assignment heading and paragraph.
- Linked `style.css` and `script.js`.
- Started with a `Click` button calling `flipColor()`.
- Changed that button to `Toggle paragraph bold` with `id="colorButton"`, connected through JavaScript.
- Added a `Toggle test backgrounds` button that calls `flipMultipleParts()`.

### `style.css`

The current rules are:

| Selector | Styles |
| --- | --- |
| `h1` | 36px text, pink text color |
| `h2` | Orange text |
| `h3` | 70px text, blue text, yellow background |
| `span` | Red text |
| `p` | Font list `"helvetica neu", arial, sans-serif`; purple background; white text |
| `.test` | Bold text |
| `button` | Pink background, white text |

We also added an empty grouped `div, p` rule; it currently has no effect.

### `script.js`

- Initially, `flipColor()` switched all paragraph text between red and black.
- We changed its behavior to toggle paragraph font weight between `bold` and `normal`. Its original name remains, although it now changes weight rather than color.
- Selected `#colorButton` and attached `flipColor` using a click event listener.
- Removed an extra closing brace and references to undefined functions that prevented the script from working correctly.
- Added `flipMultipleParts()`, which selects every `.test` element and changes its inline background color: silver on the first click, gold on the next, then silver again.

## Try the page

1. Open `index.html` in a browser.
2. Click **Toggle paragraph bold** to switch paragraph text weight.
3. Click **Toggle test backgrounds** to switch the second heading and `THIS` span between silver and gold backgrounds.
4. After editing and saving a file, refresh the browser to load the changes.

## Practice notes for next time

The saved HTML still has extra closing `div` tags and an assignment paragraph ending with `<p>` instead of `</p>`. These are useful cleanup exercises; browsers may repair this markup automatically. The font name `"helvetica neu"` is also likely intended to be `"Helvetica Neue"`; the browser can fall back to Arial or a generic sans-serif font.
