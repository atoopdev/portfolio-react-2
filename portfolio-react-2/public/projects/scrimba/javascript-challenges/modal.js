// contact me button
const openModal = document.getElementById("open-modal");
const overlayEL = document.getElementById("overlay");
// close button
const closeModal = document.getElementById("close-modal");

openModal.addEventListener("click", function(){
    console.log("click contact me button");

        // reveal address
        overlayEL.style.display = "block";
})

closeModal.addEventListener("click", function(){
    console.log("close button clicked");

    overlayEL.style.display = "none";
})