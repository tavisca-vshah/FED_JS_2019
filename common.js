"use strict";
var items = [];

function insertNode()
{
	document.getElementById("myInputautocomplete-list").innerHTML="";
	for (let i = 0; i < items.length; i++)
	{
		let item = document.createElement("div");
		item.innerHTML = items[i];
		item.className = "itemlist";
		item.style.display = "none";
		item.onmouseover = function(){
			populateInput(this);
		}
		document.getElementById("myInputautocomplete-list").appendChild(item);
	}
}

function populateInput(element)
{
	document.getElementById("myInput").value = element.innerHTML;
}

function hidePrompt()
{
	let a = document.getElementsByClassName("itemlist");
	for (let i = 0; i < a.length; i++)
	{
		a[i].style.display = "none";

	}
}

function filterFunction()
{
	insertNode();
	let input, filter, a, i,txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	a = document.getElementsByClassName("itemlist");
	for (i = 0; i < a.length; i++)
	{
		txtValue = a[i].textContent || a[i].innerText;
		if (!txtValue.toUpperCase().startsWith(filter))
		{
			a[i].style.display = "none";
		}
		else
		{
			a[i].style.display = "block";
		}
	}
}


// display list on table row
function AddItem()
{
	let txt = document.getElementById("myInput").value;
	if (txt != '' && items.indexOf(txt) == -1)
	{
		let table = document.getElementById("myTable");
		let rowcount = table.rows.length;
		let row = table.insertRow(rowcount);
		let cell1 = row.insertCell(0);
		let cell2 = row.insertCell(1);
		cell1.innerHTML = txt;
		cell2.innerHTML = `<input type='button' class='button' value='Edit'  onclick='return editRow(this)' name='Edit'><input type='button' data-row=${txt} class='button' value='Delete' name='delete' onclick='return deleteRow(this)'>`;
		document.getElementById("myInput").value = '';
		items.push(txt);
	}
}
function editRow(element){
	let temp=element.parentNode.parentNode;
	let currentItem = temp.firstChild.innerHTML;
	temp.innerHTML=`<td><input type="text" placeholder="Update Item" ></td><input type='button' class='button' value='Update'  onclick='return updateItem(this,"${currentItem}")' name='Update'>`;	
}
function updateItem(element,currentItem){
	let updateItem = element.previousSibling.firstChild.value;
	if(!updateItem)
		alert("update field cannot be null");
	else{
		items[items.indexOf(currentItem)] = updateItem;
		element.parentNode.innerHTML = `<td>${updateItem}</td><td><input type='button' class='button' value='Edit'  onclick='return editRow(this)' name='Edit'><input type='button' data-row=${updateItem} class='button' value='Delete' name='delete' onclick='return deleteRow(this)'></td>`;	  
	}
}
function deleteRow(element){
	let i =element.parentNode.parentNode.rowIndex;
	let row = element.getAttribute("data-row");
	let temp = items.indexOf(row);
	items.splice(temp, 1)
	document.getElementById("myTable").deleteRow(i);;
}
function searchItemOpen(){
	let table = document.getElementById("myTable");
	let rows = table.rows;
	let input = document.getElementById("myInput");
	let filter = input.value.toUpperCase();
	for(let a =1;a<rows.length;a++){
		let content = rows[a].firstElementChild.innerText;
		if (!content.toUpperCase().startsWith(filter))
		{
			rows[a].style.display = "none";
		}
		else
		{
			rows[a].removeAttribute("style");
		}
	}
}

function searchItemClose(){
	let table = document.getElementById("myTable");
	let rows = table.rows;
	for(let a =1;a<rows.length;a++){
		rows[a].removeAttribute("style");
	}
}
function showSuggestionToggle(element){
	let input = document.getElementById("myInput");
	if(!input)
		return;
	let status = element.getAttribute("data-suggest");
	if(status ==="open"){
		element.value = "Close"
		element.setAttribute("data-suggest", "close");
		searchItemOpen();
	} else{
		element.value = "Search";
		element.setAttribute("data-suggest", "open");
		searchItemClose();
	}
}