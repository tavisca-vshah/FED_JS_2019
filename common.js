var items = ["Afghanistan", "Albania", "Algeria", "Belize", "Benin", "Bermuda", "Guyana", "Hong Kong", "Hungary", "Iceland", "India"];

function insertNode()
{
  for (let i = 0; i < items.length; i++)
  {
    let item = document.createElement("div");
    item.innerHTML = items[i];
    item.className = "itemlist";
    item.style.display = "none";
    document.getElementById("myInputautocomplete-list").appendChild(item);
  }
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
    if (!txtValue.startsWith(filter))
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
var counter = 0;

function AddItem()
{
  let txt = document.getElementById("myInput").value;
  if (txt != '')
  {
    var table = document.getElementById("myTable");
    var row = table.insertRow(counter + 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = txt;
    cell2.innerHTML = "<a href='#'>Edit</a> <a href='#'>Delete</a>";
    counter++;
  }
}
insertNode();