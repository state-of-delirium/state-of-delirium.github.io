document.addEventListener("DOMContentLoaded", function() {
    const backlinks = document.querySelectorAll(".reversefootnote");

    backlinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const href = this.getAttribute("href");
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        history.pushState(null, null, href);
        }
    });
    });

    const footnotes = document.querySelectorAll(".footnote");
    footnotes.forEach(link => {
    link.addEventListener("mouseover", function(event) {
        const href = this.getAttribute("href");
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
    
        if (targetElement) {
        const targetElementInner = targetElement.innerText.slice(0, -1);
        const position = link.getBoundingClientRect();
        const div = document.createElement("div");
        div.className = "footnote-card";
        div.style.position = "absolute";
        div.style.left = (position.left + window.scrollX) + "px";
        div.style.top = (position.top + window.scrollY) + "px";
        div.textContent = targetElementInner;

        const a = document.createElement("a");
        a.className = "invis-card-link";
        a.href = href;
        div.appendChild(a);

        div.addEventListener("mouseover", function(event) {
            const div2 = document.querySelector(".footnote-card");
            if (!div2) {
                document.body.appendChild(div);
            }
        })

        div.addEventListener("mouseout", function(event) {
            div.remove();
        })

        document.body.appendChild(div);
        }

      
    });
    link.addEventListener("mouseout", function(event) {
        const footnoteCard = document.querySelector(".footnote-card");
        if (footnoteCard) {
            footnoteCard.remove();
        }
        
    });
  })
});
