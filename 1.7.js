///createTextNode vs innerHTML vs textContent

// let text = '<p>Lorem</p>';

// 1)elem.append(document.createTextNode(text))
// 2)elem.innerHTML = text
// 3)elem.textContent = text

//In case 1 and 3, it will add the text inside as is, and in the second case there will be a new paragraph inside elem

//////////////////////////////////////////////////////

///Clear the element

// function clear(elem) {
//   elem.innerHTML = "";
// }

// clear(document.getElementById("elem"));

/////////////////////////////////////////////////////////

///Why does "aaa" remain?

//Browser shows "aaa" before the <table>.

//////////////////////////////////////////////////////

///Create a list

// let ul = document.createElement("ul");
// document.body.append(ul);
// let condition = true;

// while (condition) {
//   let content = prompt("Test", "Write content");
//   if (!content) {
//     condition = false;
//   } else {
//     let li = document.createElement("li");
//     li.textContent = content;
//     ul.append(li);
//   }
// }

////////////////////////////////////////////////////

///Create a tree from the object

// let data = {
//   Fish: {
//     trout: {},
//     salmon: {},
//   },

//   Tree: {
//     Huge: {
//       sequoia: {},
//       oak: {},
//     },
//     Flowering: {
//       apple: {},
//       magnolia: {},
//     },
//   },
// };

// function createTree(data) {
//   if (!Object.keys(data).length) {
//     return "";
//   }
//   let ul = document.createElement("ul");
//   for (let item of Object.keys(data)) {
//     let li = document.createElement("li");
//     li.append(item);
//     li.append(createTree(data[item]));
//     ul.append(li);
//   }
//   return ul;
// }

// let container = document.getElementById("container");
// container.append(createTree(data));

//////////////////////////////////////////////////////////////////

///Show descendants in a tree

// for (const iterator of document.querySelectorAll("li")) {
//   if (iterator.childElementCount === 0) {
//     continue;
//   } else {
//     iterator.firstChild.data += `[ ${iterator.querySelectorAll("li").length}]`;
//   }
// }

////////////////////////////////////////////////////////////////////

///Create a calendar

// let elem = document.getElementById("elem");

// function createCalendar(elem, month, year) {
//   let calendar = document.createElement("table");
//   let namesWeek = document.createElement("tr");
//   namesWeek.innerHTML = `
//     <th>MO</th>
//     <th>TU</th>
//     <th>WE</th>
//     <th>TH</th>
//     <th>FR</th>
//     <th>SA</th>
//     <th>SU</th>
//   `;
//   calendar.append(namesWeek);
//   function daysInMonth(month, year) {
//     return new Date(year, month, 0).getDate();
//   }
//   let days = daysInMonth(month, year);
//   let dayOfWeek = new Date(year, month, 1).getDay();
//   let condition = 1;

//   function createFirstRow() {
//     let firstTr = document.createElement("tr");
//     for (let i = 0; i <= dayOfWeek; i++) {
//       let td = document.createElement("td");
//       td.textContent = "";
//       firstTr.append(td);
//     }
//     for (let i = 0; i < 6 - dayOfWeek; i++) {
//       let td = document.createElement("td");
//       td.textContent = condition;
//       firstTr.append(td);
//       condition += 1;
//     }
//     calendar.append(firstTr);
//   }
//   createFirstRow();

//   while (condition <= days) {
//     let tr = document.createElement("tr");
//     for (let i = 0; i <= 6; i++) {
//       let td = document.createElement("td");
//       td.textContent = condition > days ? "" : condition;
//       tr.append(td);
//       condition += 1;
//     }
//     calendar.append(tr);
//   }
//   elem.append(calendar);
// }

// createCalendar(elem, 6, 2011);

/////////////////////////////////////////////////////////////////////

///Colored clock with setInterval

// let clockDiv = document.createElement("div");
// clockDiv.innerHTML = `<p>
// <span style="color:red" id='hour'>hh</span>
// <span style="color:green" id='minute'>mm</span>
// <span style="color:blue" id='second'>ss</span>
// </p><br/>
// <button id='start'>Start</button><button id='stop'>Stop</button>`;

// document.body.append(clockDiv);

// let index;

// function setClock() {
//   let second = document.getElementById("second");
//   let minute = document.getElementById("minute");
//   let hour = document.getElementById("hour");
//   second.textContent = new Date().getSeconds();
//   minute.textContent = new Date().getMinutes();
//   hour.textContent = new Date().getHours();
// }

// function start() {
//   index = setInterval(() => {
//     setClock();
//   }, 1000);
// }

// function stop() {
//   clearInterval(index);
// }

// document.querySelector("#start").addEventListener("click", () => {
//   start();
// });

// document.querySelector("#stop").addEventListener("click", () => {
//   stop();
// });

/////////////////////////////////////////////////////////////////////////

///Insert the HTML in the list

// document.getElementById("one").insertAdjacentHTML("afterend", `<li>2</li><li>3</li>`);

///////////////////////////////////////////////////////////////////////

///Sort the table

// let allTr = document.querySelector("tbody").querySelectorAll("tr");

// let arrData = [];

// for (let i = 0; i < allTr.length; i++) {
//   let obj = {};
//   obj.name = allTr[i].children[0].textContent;
//   obj.surname = allTr[i].children[1].textContent;
//   obj.age = allTr[i].children[2].textContent;
//   arrData.push(obj)
// }

// function compare( a, b ) {
//     if ( a.name < b.name ){
//       return -1;
//     }
//     if ( a.name > b.name ){
//       return 1;
//     }
//     return 0;
//   }

// arrData.sort(compare)

// for (let i = 0; i < allTr.length; i++) {
//     allTr[i].children[0].textContent = arrData[i].name
//     allTr[i].children[1].textContent = arrData[i].surname
//     allTr[i].children[2].textContent = arrData[i].age
// }
