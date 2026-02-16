---
---

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results-container');
    const jsonPath = '{{ site.baseurl }}/search.json';

    searchInput.addEventListener("input", function(event) {
        const query = this.value.trim();

        if (query === '') {
            resultsContainer.visibility = "hidden";
            resultsContainer.innerHTML = "";

            fetch(jsonPath)
                .then(response => response.json())
                .then(data => {
                    data.forEach(result => {
                        const div = document.createElement("div");
                        div.innerHTML = `<a href="${result.url}" class="post-wrapper"><li class="post-card"><div class="post-text"><h2><span class="underline">${result.title}</span></h2><p class="post-excerpt">${result.excerpt}</p><p><i>${result.date}</i></p></div><div class="image-wrapper"><img src="${result.thumb}"></div></li></a>`;
                        resultsContainer.appendChild(div.firstElementChild);
                    });
                })
                .catch(error => console.error("Error loading JSON:", error));

            resultsContainer.visibility = "visible";
        }
    });
});