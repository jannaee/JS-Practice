// Pangram
// Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. The best known English pangram is:
//          The quick brown fox jumps over the lazy dog.
// The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.

// word.split(" ").join()
// if word[i].unique > 27 {
//     return "This is a panagram"
// }

function isPangram(string) {
    let regExpG  = /([a-z])(?!.*\1)/g;
    return (string.match(regExpG) || []).length === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("The quick brown fox jumps over the lazy do."));