---
author: Pratham
title: Design Doc
excerpt: How I went about designing this site
thumb: 
    src: "../../assets/images/default1.webp"
    height: "698"
    width: "1000"
confidence: high
---
As of the writing of this post, 67 commits have been made to make this website possible. There will be many more to come as I find interesting tidbits and features on the web that pique my interest, which will inevitably cause the site to break when attempting to implement them. 

The term _digital garden_[^1] describes this philosophy very well. Slow, incremental changes to better the experience and clean up previous works. It leverages the advantages of the digital medium and allows me to correct mistakes or provide context in hindsight.

I am a proponent for digital privacy and security, and hence have tried to minimize the use of [Javascript](https://disable-javascript.org/) throughout this site. However, where it is strictly necessary, there are fallbacks in place.

## Groundwork
This site is generated using Jekyll. I would like to say that I did a lot of research and chose the perfect tool to fit my needs. Buuut, my [extremely clever friend](https://sumukhprasad.github.io/) reccomended it and I rolled with it and couldn't be happier.

I utilize many plugins for some of the more tedious parts of the site, namely: [jekyll-feed](https://github.com/jekyll/jekyll-feed), [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap), and [jekyll-minifier](https://github.com/digitalsparky/jekyll-minifier). Apart from these, I use [Nokogiri](https://github.com/sparklemotion/nokogiri) for modifying the HTML during build time. I run two Ruby scripts: One for finding external links and adding the necessary attributes,[^2] the other for building the table of contents, calculating read time, and adding `<abbr>` tags.


## Features
_A lot of features are directly or indirectly inspired from the many blog sites I frequent, some of which are listed in the footer._

The features in no particular order:
- Some metric (name WIP) to describe our state of mind when writing a post
- External link indicators to ensure the reader knows where they're going
- A table of contents for easy navigation
- Hoverable footnotes to not break the reading flow
- Search fallback when JS is disabled

## Aesthetics

### Marginalia
I love all my babies equally, but every parent has a favorite and mine is the [Marginalia](https://en.wikipedia.org/wiki/Marginalia).
<figure class="center">
    <img src="{{site.baseurl}}/assets/images/blog images/wata.png" style="height: 20rem; width: auto;">
    <figcaption>A toned-down version of an image I had to make for a not-very-perceptive friend of mine. The original is <a href="{{site.baseurl}}/assets/images/blog images/wata-original.png">here</a> (jumpscare warning)</figcaption>
</figure>
It's meant to resemble chaotic scribbles on the edges of a book. The color, font, and text are randomly chosen. While the orientation, position, and rotation are constrained and semi-random.

### Typography
The main body font is Work Sans and the titles are in Merriweather. Almost all combinations of the typography can be found in the <a href="/blog/testpage">test page</a>.
There are also inline code and code blocks using the Fira Code font and rogue highlighting.

I find that the body font does not fare well when rendering long strings of capital letters, as it  draws too much attention and looks a little weird. So, abbreviations are automatically rendered in small caps by checking for text with 2+ capital letters in a row.

All fonts are served as subsetted WOFF2 files for reducing load time. This does however lead to some glyphs missing[^4] from the font, but it's easily fixed by adding a separate 'special characters' file containing only the necessary missing glyphs to the font stack.

### Color Palette

<ul class="color-palette">
    {% assign colors = "#65928b,#a06390,#EFE9E3,#e9e4dd,#c2a385,#3b342e,#121111" | split: "," %}
    {% for color in colors %}
        <li style="background-color: {{ color }}"></li>
    {% endfor %}
</ul>

In general, the blue-green accent color is used for inactive elements, while the purple is used for active elements. This guideline is often broken :P

<style>
    .color-palette {
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        column-gap: 1.5rem;
        justify-content: space-evenly;
        > li {
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;
            outline: 2px solid gray ;
        }
    }
</style>

## Not-So Frequently Asked Questions
Why 'State of Delirium?'
: We just thought it was kinda funny

{% include fleuron.html %}

[^1]: I quite like [Maggie Appleton's](https://maggieappleton.com/) definition of this: "A collection of imperfect notes, essays, and ideas growing slowly over time."
[^2]: In particular, `target="_blank"` and `rel="noreferrer noopener"` for opening the link in a new tab and ensuring privacy and security.
[^3]: This is implemented by keeping the DDG search visible and the regular search hidden in the CSS. Then using JS to flip the visibility. However, this leads to some flashing when the page is first loaded. If you know how to remedy it, please <a href="mailto:delirium.blog@proton.me">contact me</a>.
[^4]: Like the vine leaf glyphs 🙟 and 🙝 that are used in the Fleuron