///Count descendants

// let allLiElement = document.querySelectorAll('li');

//1) for (let i = 0; i < allLiElement.length; i++) {
//     console.log(allLiElement[i].innerText);
// }

//2) console.log(allLiElement.length);

////////////////////////////////////////////////////////////

///What's in the nodeType?

{/* <html>

<body>
  <script>
    alert(document.body.lastChild); // sees himself as the last child (last node):
  </script>
</body>

</html> */}

//////////////////////////////////////////////////////////////

///Tag in comment

// <script>
//   let body = document.body;

//   body.innerHTML = "<!--" + body.tagName + "-->";

//   alert( body.firstChild.data ); // what's here? // --> "BODY"
// </script>

//////////////////////////////////////////////////////////////

///Where's the "document" in the hierarchy?
///Which class does the document belong to? --> console.log(document.__proto__) // HTMLDocument
