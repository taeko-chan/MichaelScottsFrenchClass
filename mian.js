/*

Hey sali du, hüüt isch franzprüefig, hesch voci glärnt?

*/

// ordered answer, question (a.k.a. French, English
let voci = [
    "une pétasse", "bitch",
    "salut", "hey sali du",
    "la gare", "bahnhof",
    "micheal scott", "regional manager",
    "midnight", "threat level"
];

let currentIndex;
let cr = document.getElementById("correct");
let fs = document.getElementById("false");
let wr = document.getElementById("word");
let ms = document.getElementById("msc");
let ex = document.getElementById("exp")

function getWord() {
    if (voci.length == 0) {
        console.log(voci)
        wr.innerHTML = "You solved all the words! Reload the page to begin again"
        ms.style.visibility = "visible"
        document.getElementById("mscv").muted = false;
    } else {
        console.log(voci)
        document.getElementById("ix").value = "";
        cr.style.visibility = "hidden"
        fs.style.visibility = "hidden"
        ex.style.visibility = "hidden"

        let x = Math.floor(Math.random() * voci.length) - 1
        if (x < 0) {
            x = 0
        }
        if (x % 2 == 0) {
            x += 1
        }

        let word = voci[x]
        wr.innerHTML = word
        console.log("Word: " + word + ", Sol: " + voci[x - 1])
        currentIndex = x
    }
}

function checkWord() {
    let input = document.getElementById("ix").value;
    console.log(input)
    console.log(voci[currentIndex-1])
    if (input === voci[currentIndex-1]) {
        console.log("c")
        cr.style.visibility = "visible"

        console.log(voci[currentIndex] + " was correctly solved as " + voci[currentIndex - 1] + ", indexes " + currentIndex + ", " + (currentIndex + 1))
        voci.splice(currentIndex, 1)
        voci.splice(currentIndex - 1, 1)
    } else {
        console.log("f")
        fs.style.visibility = "visible"
        ex.innerHTML = "Richtig wäre \"" + voci[currentIndex - 1] + "\" gewesen!"
        ex.style.visibility = "visible"
    }
}

function cheat() {
    voci = []
}
