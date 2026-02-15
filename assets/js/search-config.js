---
---
document.addEventListener("DOMContentLoaded", function() {

    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results-container');
    const resultsTemplate = '<a href="{url}" class="post-wrapper"><li class="post-card"><div class="post-text"><h2><span class="underline">{title}</span></h2><p class="post-excerpt">{excerpt}</p><p><i>{date}</i></p></div><img src="{thumb}"></li></a>';
    const jsonPath = '{{ site.baseurl }}/search.json';
    SimpleJekyllSearch({
        searchInput: searchInput,
        resultsContainer: resultsContainer,
        json: jsonPath,
        noResultsText: "🙟 🙝",
        searchResultTemplate: resultsTemplate
    })


});
