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
                        div.innerHTML = `<li><div class="post-text"><h2><span class="dotted-underline-2">${result.title}</span></h2><p class="post-excerpt">${result.excerpt}</p><p><i>${result.date}</i></p></div><div class="image-wrapper"><img src="${result.thumb_src}" height="${result.thumb_height}" width="${result.thumb_width}" loading="lazy"></div><a href="${result.url}" class="invis-card-link"></a></li>`;
                        resultsContainer.appendChild(div.firstElementChild);
                    });
                })
                .catch(error => console.error("Error loading JSON:", error));

            resultsContainer.visibility = "visible";
        }
    });
});