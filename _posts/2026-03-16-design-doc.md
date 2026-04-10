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

## Ethos
I want this site to be clean and lightweight, while not compromising on its personality and while preserving some quirky features. On account of it being lightweight, I have tried to [reduce the use of Javascript](https://disable-javascript.org/) throughout this site. However, where it enhances the experience and is strictly necessary, there are fallbacks in place.

### On Gen AI
No part of this site was built using AI, and especially not written using it. While I don't _completely_ oppose the use of AI in general, I feel it goes against the nature of this site to have any part of it be "created" by AI.

## Groundwork
This site is generated using Jekyll. I would like to say that I did a lot of research and chose the perfect tool to fit my needs. Buuut, my [extremely clever friend](https://sumukhprasad.github.io/) reccomended it and I rolled with it and couldn't be happier.

I utilize many plugins for some of the more tedious parts of the site, namely: [jekyll-feed](https://github.com/jekyll/jekyll-feed), [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap), and [jekyll-minifier](https://github.com/digitalsparky/jekyll-minifier). Apart from these, I use the Ruby gem [Nokogiri](https://github.com/sparklemotion/nokogiri) for modifying the HTML during build time. I run two scripts utilizing it: one for finding external links and adding the necessary attributes,[^2] the other for building the table of contents, calculating read time, and adding `<abbr>` tags.


## Features
> A lot of features are directly or indirectly inspired from the many blog sites I frequent, some of which are listed in the footer.
{:.note}

The features in no particular order:
- A metric (name WIP) to describe our state of mind when writing a post
- External link indicators to ensure the reader knows where they're going
- A table of contents for easy navigation
- Hoverable footnotes to not break the reading flow
- Blog post search with fallback[^3]

## Aesthetics
_Dots. Lots of dots._
### Marginalia
I love all my babies equally, but every parent has a favorite and mine is the [Marginalia](https://en.wikipedia.org/wiki/Marginalia).
<figure class="center">
    <img src="{{site.baseurl}}/assets/images/blog images/wata.png" style="width: 50rem; height: auto; opacity: 0.7;">
    <figcaption>A toned-down version of an image I had to make for a not-very-perceptive friend of mine. The original is <a href="{{site.baseurl}}/assets/images/blog images/wata-original.png">here</a> (jumpscare warning)</figcaption>
</figure>
It's meant to resemble chaotic scribbles on the edges of a book. The color, font, and text are randomly chosen. While the orientation, position, and rotation are constrained and semi-random.

### Typography
The main body font is Work Sans and the titles are in Merriweather. Almost all combinations of the typography can be found in the <a href="/blog/testpage">test page</a>.
There are also inline code and code blocks using the Fira Code font and rogue highlighting.

I find that the body font does not fare well when rendering long strings of capital letters as it draws too much attention and looks a little weird. So, abbreviations are automatically rendered in small caps by checking for text with 3+ capital letters in a row.

All fonts are served as subsetted WOFF2 files for reducing load time. However, this lead to some glyphs missing[^4] from the font, but it's easily fixed by adding a separate 'special characters' file containing only the necessary missing glyphs to the font stack.

### Color Palette

<ul class="color-palette">
    {% assign colors = "#65928b,#a06390,var(--edge-color),var(--page-color),var(--footnote-card-color),var(--prim-color),var(--title-color),var(--para-color)" | split: "," %}
    {% for color in colors %}
        <li style="background-color: {{ color }}"></li>
    {% endfor %}
</ul>

<style>
    .color-palette {
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        column-gap: 1.5rem;
        justify-content: space-evenly;
        > li {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            border: 2px solid gray ;
        }
    }
</style>

## Questions of Decreasing Frequency

#### Why 'State of Delirium?'
We just thought it was kinda funny

#### Why make a blog?
We had a lot of ideas floating around and wanted a place to pen them down. Apart from that, Vishnu wanted to write in a place that was not Medium or Substack, and I was itching to make a website.

#### Are you two dating?
NO.

#### Is this blog readable by French people?
À moins que vous ne lisiez l'anglais, non </3

#### Are you looking for YC funding?
We’re disrupting the legacy long-form vertical with a hyper-scalable thought leadership engine, leveraging edge-delivery to maximize engagement loops. We're looking for $200,000 for a 3.25% share.

{% include fleuron.html %}

[^1]: I quite like [Maggie Appleton's](https://maggieappleton.com/) definition of this: "A collection of imperfect notes, essays, and ideas growing slowly over time."
[^2]: In particular, `target="_blank"` and `rel="noreferrer noopener"` for opening the link in a new tab and ensuring privacy and security.
[^3]: This is implemented by keeping the DDG search visible and the regular search hidden in the CSS. Then using JS to flip the visibility. However, this leads to some flashing when the page is first loaded. If you know how to remedy it, please <a href="{{ site.data.email.link }}">contact me</a>.   
[^4]: Like the vine leaf glyphs 🙟 and 🙝 that are used in the Fleuron