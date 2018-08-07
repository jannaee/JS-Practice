// Question: Capitalize 1st letter of 1st name and all last name
const name = "pooPy ButtHOle";

nameChanger = (name) => {
    name = name.toLowerCase();
    name = name.split(" ");
    const firstName = name[0].slice(0,1).toUpperCase()+name[0].slice(1, name[0].length);
    const lastName = name[1].toUpperCase();
    fullName = firstName +" " + lastName;
    return fullName
}
console.log(nameChanger(name));


// ORRR

// Capt = (name) => {
//   name = name.toLowerCase().split(" ");
//   first_name = name[0][0].toUpperCase() + name[0].substr(1);
//   last_name = name[1][0].toUpperCase()+ name[1].substr(1);
//   return name = first_name + " " + last_name;
// }

// const name = "pooPy ButtHOle";
// console.log(Capt(name));
