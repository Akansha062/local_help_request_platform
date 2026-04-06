// Wait till page loads
document.addEventListener("DOMContentLoaded", function(){

    // 1️⃣ SERVICE CLICK
    let services = document.querySelectorAll(".service");

    services.forEach(function(service){
        service.addEventListener("click", function(){
            alert(service.innerText + " selected!");
        });
    });

    // 2️⃣ SEARCH FUNCTION
    let searchInput = document.querySelector(".search-box input");

    searchInput.addEventListener("keyup", function(){
        let value = searchInput.value.toLowerCase();

        services.forEach(function(service){
            let text = service.innerText.toLowerCase();

            if(text.includes(value)){
                service.style.display = "block";
            } else {
                service.style.display = "none";
            }
        });
    });

});