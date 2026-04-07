document.addEventListener("DOMContentLoaded", function(){

    let services = document.querySelectorAll(".service");

    let map = {
        "Electrician": "electrician",
        "Plumber": "plumber",
        "Painter": "painter",
        "Wall Repair": "wallrepair",
        "Home Cleaning": "homecleaning",
        "Pest Control": "pestcontrol",
        "Appliance Repair": "appliancerepair",
        "Carpenter": "carpenter"
    };

    services.forEach(function(service){
        service.addEventListener("click", function(){

            let key = map[service.innerText];

            // fallback if not in map
            if(!key){
                key = service.innerText.toLowerCase().replace(/\s+/g, "");
            }

            window.location.href = "../../services.html?service=" + key;

        });
    });

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
