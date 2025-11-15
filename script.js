
function insert_Row() {
    //Write your code here
	let row=document.createElement("tr");

	
	let cell1=document.createElement("td");
	cell1.textContent="New Cell1";
	row.appendChild(cell1);

	
	let cell2=document.createElement("td");
	cell2.textContent="New Cell2";
	row.appendChild(cell2);
  
  let tab=document.querySelector("#sampleTable tbody")||document.querySelector("#sampleTable");
	tab.prepend(row);
}
