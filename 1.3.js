/// DOM children

// document.body.children[0];
// document.body.firstElementChild;

// document.body.children[1];
// document.body.lastElementChild;

// document.body.children[1].lastElementChild;
// document.body.lastElementChild.lastElementChild;

//////////////////////////////////////////

/// The sibling question

// Is it true that elem.lastChild.nextSibling is always null? --> Yes !, since we are taking the last node, there cannot be a node after the last node !!!
// Is it true that elem.children[0].previousSibling is always null ? No !, because we accept the first node Element and the first node Element before there may not be a node Element but there may be a node !!!

///////////////////////////////////////////

/// Select all diagonal cells

// let tableRows = document.querySelectorAll('tr');

// for (let i = 0; i < tableRows.length; i++) {
//   tableRows[i].querySelectorAll("td")[i].setAttribute('style', 'background-color: red')
// }

//////////////////////////////////////////////

///  