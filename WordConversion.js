// Question: turn s into 'Udacity'

var s = "audacity";

udacityfier =(s)=> {
    s = s[1].toUpperCase() + s.slice(-6);
    return s;
}

console.log(udacityfier(s));
