<script>
    // sabhi request buttons select karo
    let buttons = document.querySelectorAll(".card button");

    buttons.forEach(function(btn){
        btn.addEventListener("click", function(){
            alert("Request sent successfully!");
        })
    });
</script>