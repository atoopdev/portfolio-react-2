


// event listener on input field
document.getElementById("searchInput").addEventListener("keyup", function(){

    // grabs the event off the eventlistner - function() returns event - function(event)
    let searchQuery = event.target.value.toLowerCase();
    console.log("searchQuery", searchQuery);

    let allNamesDOMCollection = document.getElementsByClassName("name");

// list out all names
for(let counter = 0; counter < allNamesDOMCollection.length; counter++)
{
    const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
    console.log(currentName);
    // search for searchInput in list - only matches left visible
    if(currentName.includes(searchQuery)){
        console.log("Match!");
        allNamesDOMCollection[counter].style.display = "block";
    }
    else{
        console.log("No match");
        allNamesDOMCollection[counter].style.display = "none";
    }
}

})