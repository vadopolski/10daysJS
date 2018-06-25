/**
 * Created by Home on 23.06.2018.
 */
const s = `javascriptloops`;

const vowels = new Set(['o','a','e','i','u']);

const res = s.split("");
const nonVowels = new Array(10);

for (let i = 0; i < res.length; i++) {
    if (vowels.has(res[i])) {
        console.log(res[i]);
    } else {
        nonVowels.push(res[i]);
    }
}

let nv;
for (nv in nonVowels) {
    console.log(nonVowels[nv]);
}





// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s