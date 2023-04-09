`use restrict`
let staff = [];
var netSalary;

function Employer(id, fullName, department, level, imageURL) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    staff.push(this);

}








Employer.prototype.Salary = function () {

    let max;
    let min;
    let yourSalary;
    if (this.level === "senior") {
        max = 2000;
        min = 1500;

    } else if (this.level === "Mid-Senior") {
        max = 1500;
        min = 1000;



    } else if (this.level === "junior") {
        max = 1000;
        min = 500;



    }
    yourSalary = Math.floor(Math.random() * (max - min) + min);
    netSalary = yourSalary - (yourSalary * (7.5 / 100));

    return netSalary

}

Employer.prototype.render = function () {
    document.write(`<h1> hi ${this.fullName} your salary is ${netSalary} </h1>`)
}





let Ghazi = new Employer("1000", "GhaziSamer", "Administration", "senior");
let Lana = new Employer("1001", "Lana Ali", "Finance", "senior");
let Tamara = new Employer("1002", "Tamara Ayoub", "Marketing", "senior");
let Safi = new Employer("1003", "Safi Walid", "	Administration", "Mid-Senior");
let Omar = new Employer("1004", "Omar Zaid", "Development", "senior");
let Rana = new Employer("1005", "Rana Saleh", "Development", "junior");
let Hadi = new Employer("1006", "	Hadi Ahmad", "Finance", "Mid-Senior");


Ghazi.Salary();
Ghazi.render();
Lana.Salary();
Lana.render();
Tamara.render();
Tamara.Salary();
Safi.render();
Safi.Salary();
Omar.render();
Omar.Salary();
Rana.render();
Rana.Salary();
Hadi.render();
Hadi.Salary();


