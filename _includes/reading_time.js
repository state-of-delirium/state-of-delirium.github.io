const wpm = 265
const wordCount = document.querySelector(".blog-post-content").innerText.trim().split(/\s+/).length;

const readTime = Math.round(wordCount / wpm);
const readTimeDisplay = document.querySelector(".reading-time")

if (readTime <= 1) {
    readTimeDisplay.innerHTML = "1 min";
} else {
    readTimeDisplay.innerHTML = readTime.toString() + " mins";
}