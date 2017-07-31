alert("check for each!");


// var a = ['a', 'b', 'c'];

// a.forEach(function(element) {
//     console.log(element);


var myObj = {
categories: [
{
  id: 1, 
  name: 'Parent 1', 
  subCategories: [
    {id: 2, name: 'Child 1 p1', parent_id: 1},
    {id: 3, name: 'Child 2 p1', parent_id: 1}
  ]
},
{id: 4, name: 'Parent 2', subCategories: [{id: 5, name: 'Child 1 p2', parent_id: 2}]},
{id: 6, name: 'Only1Q', subCategories: [{id: 7, name: '1qchild1', parent_id: 6}]}
]
}

var div1 = document.getElementById('divia');
//document.body.appendChild(div);


myObj.categories.forEach(function(category) {
	var listItem = addListItem(category.name, div1);		
	
	category.subCategories.forEach(function(subCategory) {
		addListItem(subCategory.name, listItem);
	});

});

function addListItem(labelText, container) {

	var parentUl = document.createElement("UL");
	container.appendChild(parentUl);

	var listItem = document.createElement("LI");
	var label = document.createElement('LABEL');
	listItem.appendChild(label);
	var input = document.createElement("INPUT");
	input.setAttribute("type", "checkbox");
	input.setAttribute("class", "checkbox");
	label.appendChild(input);

	
	var text = document.createTextNode(labelText);
	label.appendChild(text);
	listItem.style.listStyle = "none";
	parentUl.appendChild(listItem);
	return listItem;
}

var selectAll = document.getElementById('selectAll');
console.log(selectAll);

var allSelected = false;
selectAll.onclick = function () {
	console.log(selectAll.checked);
	var allCheckboxes = document.getElementsByTagName('INPUT');
	for(i=0; i<allCheckboxes.length;i++){
		allCheckboxes[i].checked = selectAll.checked;		
	}	
// 	// allSelected =! allSelected;
// 	if(allSelected == true){
// 		allSelected = false;
// 	}
// 	else{
// 		allSelected = true;
// 	}
// 	var allCheckboxes = document.getElementsByClassName('checkbox');

	// for (i = 0; i < allCheckboxes.length; i++) { 
	// 	console.log(allCheckboxes[i]);

	// 	allCheckboxes[i].checked = allSelected;
// 		function check() {
//     document.getElementById("myCheck").checked = true;
// }

// // function uncheck() {
// //     document.getElementById("myCheck").checked = false;
// // }
//  //   text += cars[i] + "<br>";
// }
// 	console.log(allSelected);
// 	console.log('click');
// 	console.log(allCheckboxes);
}

		// var sellectAll = document.getElementById("sellectAll");
		
		// sellectAll.onclick = function() {
		// 	sellectAll(x, y);
		// }



// 		sellectAll.onclick = function() {
// 			checkboxes = x, y;
//     		for(var i in checkboxes)
//         checkboxes[i].checked = source.checked;
// }
		
		




// myObj.categories.subCategories.forEach(function(subCategories) {
// 	console.log(subCategories);
// })
// myObj.categories.[2].forEach(function(subCategories) {
// 	console.log(subCategories);
// })
// myObj.categories.forEach(function(categories){
// console.log(categories[0].subCategories);
	
// })