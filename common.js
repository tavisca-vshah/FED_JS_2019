var items = ["Afghanistan", "Albania", "Algeria", "Belize", "Benin",
 "Bermuda", "Guyana", "Hong Kong", "Hungary", "Iceland", "India"];

function insertNode()
{
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
  for (i = 0; i < a.length; i++)
  {
    a[i].style.display = "none";

  }
}

function filterFunction()
{
  let input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  console.log(filter);
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
  if (txt != '')
  {
    var table = document.getElementById("myTable");
    var rowcount = table.rows.length;
    var row = table.insertRow(rowcount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = txt;
    cell2.innerHTML = `<input type='button' class='button' value='Edit' name='Edit'><input type='button' data-row=${rowcount} class='button' value='Delete' name='delete' onclick='return deleteRow(this)'>`;
    document.getElementById("myInput").value = '';
  }
}
function deleteRow(element){
	let row = element.getAttribute("data-row");
	console.log(row);
	document.getElementById("myTable").deleteRow(row);
}

insertNode();