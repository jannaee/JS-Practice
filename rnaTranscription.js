// RNA Transcription
// Given a DNA strand, return its RNA complement (per RNA transcription).

// Both DNA and RNA strands are a sequence of nucleotides.

// The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

// The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).

// Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

// G -> C
// C -> G
// T -> A
// A -> U

function transcription(rna){
    if (rna == "G"){
        return "C";
    }
    else if (rna == "C"){
        return "G";
    }
    else if (rna == "T"){
        return "A";
    }
    else if (rna == "A"){
        return "T";
    }
}

console.log(transcription("G"));
console.log(transcription("C"));
console.log(transcription("T"));
console.log(transcription("A"));