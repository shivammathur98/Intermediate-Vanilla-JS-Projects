function getAndUpdate(){
	tit = document.getElementById('title').value;
	desc = document.getElementById('description').value;
	if (localStorage.getItem('itemsJson')==null) {
		itemJsonArray=[];
		itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
	}
	else if(tit =="" || desc == "") {
		alert("Please fill the required details !!")
        return false;    
	}
	else{
		itemJsonArrayStr= localStorage.getItem('itemsJson')
		itemJsonArray = JSON.parse(itemJsonArrayStr)
		itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
	}
	update();
}
function update(){
	// itemsJson is a new key created in the local storage whose default value is null.
	// getItem() is a storage method, when passed a key name, returns either null or that key value.
	if (localStorage.getItem('itemsJson')==null) { 
		// itemJsonArray is an empty new array created to locally store the values.
		itemJsonArray=[];
		// setItem() method sets the value of specified storage object item. 
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))    
	}
	else{
		itemJsonArrayStr= localStorage.getItem('itemsJson')
		itemJsonArray = JSON.parse(itemJsonArrayStr)
	}
		// Populate the table
	let tb=document.getElementById("tb");
	let str="";
	itemJsonArray.forEach((element,index) => {
	str += `
	        <tr>
	        <th scope="row" >${index + 1}</th>
	        <td>${element[0]}</td>
	        <td>${element[1]}</td>
	        <td><button class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
	      	</tr>
   		 `	
	});
	tb.innerHTML = str;
}
add=document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();	
function deleted (itemIndex){
	itemJsonArrayStr= localStorage.getItem('itemsJson')
	itemJsonArray = JSON.parse(itemJsonArrayStr)
	itemJsonArray.splice(itemIndex, 1);
	localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
	update();
}	
function clearStorage(){
	if (confirm("Do you really want to clear the whole Todo List ?")) {
	localStorage.clear();
	update();
	};
}
function vd(){
	tit = document.getElementById('title').value;
	desc = document.getElementById('description').value;
	if (tit =="" || desc == ""){
		alert("Please fill the required details !!")
		return false;
	};
}
