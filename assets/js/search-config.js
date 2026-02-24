---
---
document.addEventListener("DOMContentLoaded", function() {

    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results-container');
    const resultsTemplate = '<li><div class="post-text"><h2><span class="dotted-underline-2">{title}</span></h2><p class="post-excerpt">{excerpt}</p><p><i>{date}</i></p></div><div class="image-wrapper"><img src="{thumb_src}" height="{thumb_height}" width="{thumb_width}" loading="lazy"></div><a href="{url}" class="invis-card-link"></a></li>';
    const jsonPath = '{{ site.baseurl }}/search.json';
    SimpleJekyllSearch({
        searchInput: searchInput,
        resultsContainer: resultsContainer,
        json: jsonPath,
        noResultsText: "🙟 🙝",
        searchResultTemplate: resultsTemplate
    })


});
