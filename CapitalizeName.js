// Question: Capitalize 1st letter of 1st name and all last name
const name = "pooPy ButtHOle";

nameChanger = (name) => {
    name = name.toLowerCase();
    name = name.split(" ");
    var firstName = name[0].slice(0,1).toUpperCase()+name[0].slice(1, name[0].length);
    var lastName = name[1].toUpperCase();
    fullName = firstName +" " + lastName;
    return fullName
}
console.log(nameChanger(name));
