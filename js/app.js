`use restrict`;
let staff = [];
var netSalary;
let form = document.getElementById("Emp-form");
form.addEventListener("submit", addEmployer);

function addEmployer(e) {
  e.preventDefault();

  let fullName = e.target.fullName.value;
  let department = e.target.Department.value;
  let level = e.target.Level.value;
  let ImageURL = e.target.ImageURL.value;

  new Employer(fullName, department, level, ImageUrl);

  let jsonArr = JSON.stringify(staff);
  localStorage.setItem("ourStaff", jsonArr);

  render(staff);
}

function Employer(fullName, department, level, ImageURL, id) {
  this.id = idGenerator();
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.ImageURL = ImageURL;
  this.salary = this.Salary();
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
  netSalary = yourSalary - yourSalary * (7.5 / 100);

  return netSalary;
};

// Employer.prototype.employerId = function () {
//     // this.id = idGenerator();
//     this.id=Math.floor(1000 + Math.random() * 9000);
// }

function idGenerator() {
  return Math.floor(1000 + Math.random() * 9000);
}

function render(staff) {
  let sec = document.getElementById("container");
  sec.innerHTML = "";

  for (let i = 0; i < staff.length; i++) {
    let divEl = document.createElement("div");
    divEl.style.cssText =
      "border:solid;display:flex;flex-direction:column;align-items:center;width:15%;margin:5px 5px;text-align: left;";

    let img = document.createElement("img");
    img.style.cssText = "width:50%;height:100px";
    img.src = staff[i].ImageURL
       ? `${staff[i].ImageURL}`
       : "placeholder-image.png";
    divEl.appendChild(img);

    // let hEl1 = document.createElement("h1");
    // hEl1.textContent = `TEST`;
    // divEl.appendChild(hEl1);

    let h2El = document.createElement("h2");
    h2El.textContent = ` Name:${staff[i].fullName} id:${staff[i].id}`;
    divEl.appendChild(h2El);

    let pEl1 = document.createElement("p");
    pEl1.textContent = `department:${staff[i].department}`;
    divEl.appendChild(pEl1);

    let pEl2 = document.createElement("p");
    pEl2.textContent = `level:${staff[i].level}`;
    divEl.appendChild(pEl2);

    let h2El2 = document.createElement("h2");
    h2El2.textContent = `Salary:${staff[i].salary}`;
    divEl.appendChild(h2El2);

    sec.appendChild(divEl);
  }
}

// function idGenerator(){
//     const val = Math.floor(1000 + Math.random() * 9000);
// }

// let Ghazi = new Employer("1000", "GhaziSamer", "Administration", "senior");
// let Lana = new Employer("1001", "Lana Ali", "Finance", "senior");
// let Tamara = new Employer("1002", "Tamara Ayoub", "Marketing", "senior");
// let Safi = new Employer("1003", "Safi Walid", "	Administration", "Mid-Senior");
// let Omar = new Employer("1004", "Omar Zaid", "Development", "senior");
// let Rana = new Employer("1005", "Rana Saleh", "Development", "junior");
//  let Hadi = new Employer("1006", "	Hadi Ahmad", "Finance", "Mid-Senior");

//  for(let i=0;i<staff.length;i++){

//     staff[i].Salary();

//     console.log(staff[i].render())
// }

function getStaff() {
  let onWindowLoad = true;
  let jsonArr = localStorage.getItem("ourStaff");
  let dataFormStorage = JSON.parse(jsonArr);

  if (dataFormStorage != null) {
    staff = dataFormStorage;
  }

  if (onWindowLoad) {
    render(staff);
    onWindowLoad = false;
  }
}

getStaff();
