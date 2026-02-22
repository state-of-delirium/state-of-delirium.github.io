document.addEventListener("DOMContentLoaded", () => {
    const thoughts = [
        "is anyone listening?", "it was here a moment ago", "it's fading", "it's missing", "echoes in the CSS", "it's all connected", "who wrote this?", "delirious",
        "under the floorboards", "don't look back", "3:30 AM", "i spent so long on this", "just a dream?", "time is an ouroboros", "broken glass and bits", 
        "the color of delirium", "fever dreams", "house of leaves", "fragmented thoughts", "marginalia of the mind", "scribbled in haste", "lost in the dither",
        "did you see it?", "master mirror", "glowin' a fire", "till the stars expire"
    ];

    const fonts = ["Nothing You Could Do", "Shadows Into Light"];
    const container = document.body;

    let posRots = [];
    let negRots = [];
    for (let i = 2; i <= 8; i+=2) {
        posRots.push(i);
        negRots.push(-i);
    }

    shuffle(thoughts);
    shuffle(posRots);
    shuffle(negRots);

    const pageHeight = document.body.scrollHeight;
    const maxNotes = Math.min(thoughts.length, Math.floor(pageHeight / 350), 2*posRots.length); 
    
    const placedNotes = [];
    const minDistance = 10;
    let sideLeft = Math.random() < 0.5 ? true : false;

    for (let i = Math.random() < 0.5 ? 0 : 1; i < maxNotes; i++) {
        let side = sideLeft ? "left" : "right";
        sideLeft = !sideLeft;
        let vPos = 0;
        let attempts = 0;
        let validPos = false;

        // Check for vertical spacing, exit after 10
        while (!validPos && attempts < 10) {
            vPos = (Math.random() * (91 - 7)) + 7;
            validPos = !placedNotes.some(note => 
                note.side === side && Math.abs(note.top - vPos) < minDistance
            );
            attempts++;
        }
        if (!validPos) continue;

        placedNotes.push({ top: vPos, side: side });

        const text = thoughts.pop();
        const font = fonts[Math.floor(Math.random() * fonts.length)];
        const fontSize = (Math.random() * (1.3 - 1.25) + 1.25).toFixed(2);
        const color = Math.random() < 0.5 ? "accent-1" : "accent-2"
        const hPos = (Math.random() * (6 - 1)) + 1;
        // + & - rotation for each side
        const rotation = (i % 4 < 2) ? posRots.pop() : negRots.pop();

        const marginalia = document.createElement("div");
        marginalia.classList.add("marginalia", color);

        Object.assign(marginalia.style, {
            top: `${vPos}%`,
            [side]: `${hPos}%`,
            fontFamily: `"${font}", cursive`,
            fontSize: `${fontSize}rem`,
            rotate: `${rotation}deg`
        });

        marginalia.innerText = text;
        container.appendChild(marginalia);
    }
});

function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}