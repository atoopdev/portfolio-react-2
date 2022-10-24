const emailCollectorForm=document.getElementById("email-collector")
const htmlContent = document.getElementById("maincontentEL")

console.log(htmlContent)
// console.log(emailCollectorForm)
emailCollectorForm.addEventListener("submit", event => {
    event.preventDefault()
    console.log("submit")
    const ourFormData = new FormData(event.target)
    console.log(ourFormData.get("firstName"))

    const userFirstName = ourFormData.get("firstName")
    const userEmailAddress = ourFormData.get("emailAddress")

    let updatedHTMLContent = `
    <h2>Congratulations, ${userFirstName}!</h2>
    
    <p class="all-caps accent-color">You're on your way to becoming a BBQ Master!</p>
    
    <p class="small-text">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
    `
    htmlContent.innerHTML = updatedHTMLContent
} )