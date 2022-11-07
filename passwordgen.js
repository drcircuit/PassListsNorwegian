const fs = require("fs");
let seasons = ["vinter", "sommer", "høst", "vår", "winter", "summer", "fall", "spring"];
let prefix = ["#", "!", "@", "$", "%", "^", "&", "*"]
let suffix = prefix;
let list = [];

for (let i = 0; i < seasons.length; i++) {
    let wrd = seasons[i];
    for (let n = 0; n < 3; n++) {
        let word = getCase(wrd, n);
        list.push(word);
        for (var y = 2000; y < 2030; y++) {
            list.push(`${word}${y}`);
            for (var p = 0; p < prefix.length; p++) {
                list.push(`${prefix[p]}${word}`);
                list.push(`${prefix[p]}${word}${y}`)
                for (var s = 0; s < suffix.length; s++) {
                    list.push(`${word}${suffix[s]}`);
                    list.push(`${prefix[p]}${word}${suffix[s]}`);
                    list.push(`${prefix[p]}${word}${y}${suffix[s]}`);
                }
            }
        }
    }
}
fs.writeFileSync("norwegian_seasonal_passes.txt", list.join("\n"));

function getCase(w, n) {
    switch (n) {
        case 0:
            return w.toLowerCase();
        case 1:
            return w.toUpperCase();
        case 2:
            return capitalizeFirstLetter(w);
        default:
            return w;
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}