`use restrict`
let staff = [];
var netSalary;
let form = document.getElementById("Emp-form");
form.addEventListener("submit", addEmployer);


function Employer(fullName, department, level, ImageUrl, id) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.ImageUrl = ImageUrl;
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
    
    return netSalary;
}

Employer.prototype.employerId = function () {
    this.id = idGenerator();
}

function idGenerator() {
    return Math.floor(1000 + Math.random() * 9000);
};




Employer.prototype.render = function () {
    let sec = document.getElementById("container");

    let divEl = document.createElement("div");
    divEl.style.cssText = 
    "border:solid;display:flex; flex-direction:column;align-items:center;width:18%;margin:5px 5px ; text-align: left;";

    sec.appendChild(divEl);

    let img = document.createElement("img");
    img.style.cssText = "width:50%;height:100px"
    img.src= `${this.ImageUrl}`? `${this.ImageUrl}`:
    "https://icon-library.com/images/employee-icon-png/employee-icon-png-15.jpg";
    img.alt="img"
    divEl.appendChild(img);

    let hEl1 = document.createElement("h1");

    divEl.appendChild(hEl1);

    let h2El = document.createElement("h2");
    h2El.textContent = ` Name:${this.fullName} id:${this.id}`;
    divEl.appendChild(h2El);



    let pEl1 = document.createElement("p");
    pEl1.textContent = `department:${this.department}`;
    divEl.appendChild(pEl1);

    let pEl2 = document.createElement("p");
    pEl2.textContent = `level:${this.level}`;
    divEl.appendChild(pEl2);

    let h2El2 = document.createElement("h2");
    h2El2.textContent = `${this.Salary()}`;
    divEl.appendChild(h2El2);
    
}


function addEmployer(e) {
    e.preventDefault()
    let FullName = e.target.FullName.value;
    let department = e.target.Department.value;
    let level = e.target.Level.value;
    let ImageUrl = e.target.ImageUrl.value;
    let newEmployer = new Employer(FullName, department, level, ImageUrl);
    
    newEmployer.Salary()
    newEmployer.employerId()
    newEmployer.render()

}

