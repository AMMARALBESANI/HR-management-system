`use restrict`;

let tableEl = document.getElementById("table");
let staff = [];
let a = 0;
let d = 0;
let m = 0;
let f = 0;
let sa = 0;
let sd = 0;
let sm = 0;
let sf = 0;

let tn=0;
let ts=0;
let tv=0;

// // key: Administration | Finance| ..., empoyers: []
// const getTotal = (key, employers) => {
//   let total = 0;

//   employers.forEach((employee) => {
//     if (employee.department === key) {
//       total++;
//     }
//   });

//   return total;
// };

// const getTotalSalaries = (key, employers) => {
//   let total = 0;

//   employers.forEach((employee) => {
//     if (employee.department === key) {
//       total = total + employee.salary;
//     }
//   });

//   return total;
// };

// const render = (employers) => {
//   const tableBodyEl = document.getElementById("employers-table-body");

//   const totalAdministrationEmployers = getTotal("Administration", employers);
//   const totalAdministrationEmployersSalary = getTotalSalaries("Administration", employers);

//   const totalFinanceEmployers = getTotal("Finance", employers);
//   const totalFinanceEmployersSalary = getTotalSalaries("Finance", employers);

//   const totalMarketingEmployers = getTotal("Marketing", employers);
//   const totalDevelopmentEmployers = getTotal("Development", employers);

//   const row1EL = document.createElement("tr");

//   const tdEl1 = document.createElement("td");
//   const tdEl2 = document.createElement("td");
//   const tdEl3 = document.createElement("td");
//   const tdEl4 = document.createElement("td");

//   tableBodyEl.appendChild(row1EL);
//   tdEl1.innerText = "Administration";
//   row1EL.appendChild(tdEl1);

//   tdEl2.innerText = totalAdministrationEmployers;
//   row1EL.appendChild(tdEl2);

//   tdEl3.innerText = totalAdministrationEmployersSalary;
//   row1EL.appendChild(tdEl3);

//   tdEl4.innerText =
//     totalAdministrationEmployersSalary / totalAdministrationEmployers;
//   row1EL.appendChild(tdEl4);

//   const row2EL = document.createElement("tr");

//   const tdEl1Finance = document.createElement("td");
//   const tdEl2Finance = document.createElement("td");
//   const tdEl3Finance = document.createElement("td");
//   const tdEl4Finance = document.createElement("td");

//   tableBodyEl.appendChild(row2EL);
//   tdEl1Finance.innerText = "Finance";
//   row2EL.appendChild(tdEl1Finance);

//   tdEl2Finance.innerText = totalFinanceEmployers;
//   row2EL.appendChild(tdEl2Finance);

//   tdEl3Finance.innerText = totalFinanceEmployersSalary;
//   row2EL.appendChild(tdEl3Finance);

//   tdEl4Finance.innerText = totalFinanceEmployersSalary / totalFinanceEmployers;
//   row2EL.appendChild(tdEl4Finance);
// };

// const starter = () => {
//   const getSavedEmployers = localStorage.getItem("ourStaff");
//   const employers = getSavedEmployers ? JSON.parse(getSavedEmployers) : [];
//   console.log(employers);
//   render(employers);
// };

// starter();

function getStaff() {
  let onWindowLoad = true;
  let jsonArr = localStorage.getItem("ourStaff");
  let dataFormStorage = JSON.parse(jsonArr);

  if (dataFormStorage != null) {
    staff = dataFormStorage;
  }

  // if (onWindowLoad) {
  //   render(staff);
  //   onWindowLoad = false;
  // }

  console.log(staff);
}
getStaff();

for (let i = 0; i < staff.length; i++) {
  if (staff[i].department === "Administration") {
    a++;
  } else if (staff[i].department === "Marketing") {
    m++;
  } else if (staff[i].department === "Development") {
    d++;
  } else if (staff[i].department === "Finance") {
    f++;
  }

  // console.log(a);
}

for (let i = 0; i < staff.length; i++) {
  if (staff[i].department === "Administration") {
    sa += staff[i].salary;
  } else if (staff[i].department === "Marketing") {
    sm += staff[i].salary;
  } else if (staff[i].department === "Development") {
    sd += staff[i].salary;
  } else if (staff[i].department === "Finance") {
    sf += staff[i].salary;
  }

  // console.log(a);
}

let av = sa / a;
let mv = sm / m;
let dv = sd / d;
let fv = sf / f;

tn= a+m+d+f;
ts= sa+sm+sd+sf;
tv=av+mv+dv+fv;

let trEl = document.createElement("tr");
tableEl.appendChild(trEl);

let thEl1 = document.createElement("th");
thEl1.textContent = "Department";
trEl.appendChild(thEl1);

let tr2el = document.createElement("tr");
tableEl.appendChild(tr2el);
let tdel = document.createElement("td");
tdel.textContent = "Administration";
tr2el.appendChild(tdel);
let td1_ael = document.createElement("td");
td1_ael.textContent = a;
tr2el.appendChild(td1_ael);

let td1_sael = document.createElement("td");
td1_sael.textContent = sa;
tr2el.appendChild(td1_sael);


let td1_a1el = document.createElement("td");
td1_a1el.textContent = av;
tr2el.appendChild(td1_a1el);

// Administration row>>>>>>>>

let tr3el = document.createElement("tr");
tableEl.appendChild(tr3el);
let td2el = document.createElement("td");
td2el.textContent = "Marketing";
tr3el.appendChild(td2el);
let td3el = document.createElement("td");
td3el.textContent = m;
tr3el.appendChild(td3el);

let td1_mel = document.createElement("td");
td1_mel.textContent = sm;
tr3el.appendChild(td1_mel);

let td1_mvel = document.createElement("td");
td1_mvel.textContent = mv;
tr3el.appendChild(td1_mvel);

// Marketing row>>>>>>>>


let tr4el = document.createElement("tr");
tableEl.appendChild(tr4el);
let td3_ael = document.createElement("td");
td3_ael.textContent = "Development";
tr4el.appendChild(td3_ael);
let td4el = document.createElement("td");
td4el.textContent = d;
tr4el.appendChild(td4el);

let td1_del = document.createElement("td");
td1_del.textContent = sd;
tr4el.appendChild(td1_del);

let td1_dvel = document.createElement("td");
td1_dvel.textContent = dv;
tr4el.appendChild(td1_dvel);


// Development row>>>>>>>>

let tr5el = document.createElement("tr");
tableEl.appendChild(tr5el);
let td4_ael = document.createElement("td");
td4_ael.textContent = "Finance";
tr5el.appendChild(td4_ael);
let td5el = document.createElement("td");
td5el.textContent = f;
tr5el.appendChild(td5el);

let td1_fel = document.createElement("td");
td1_fel.textContent = sf;
tr5el.appendChild(td1_fel);

let td1_fvel = document.createElement("td");
td1_fvel.textContent = fv;
tr5el.appendChild(td1_fvel);

// Finance row>>>>>>>>


let tdEl2 = document.createElement("th");
tdEl2.textContent = "# of employee";
trEl.appendChild(tdEl2);

let tdEl3 = document.createElement("th");
tdEl3.textContent = "Total Salary";
trEl.appendChild(tdEl3);

let tdEl4 = document.createElement("th");
tdEl4.textContent = "Average";
trEl.appendChild(tdEl4);

let tr6el = document.createElement("tr");
tableEl.appendChild(tr6el);
let td5_ael = document.createElement("td");
td5_ael.textContent = "total";
tr6el.appendChild(td5_ael);

let td1_tal = document.createElement("td");
td1_tal.textContent = tn;
tr6el.appendChild(td1_tal);

let td1_tnl = document.createElement("td");
td1_tnl.textContent = ts;
tr6el.appendChild(td1_tnl);

let td1_tsl = document.createElement("td");
td1_tsl.textContent = tv;
tr6el.appendChild(td1_tsl);

