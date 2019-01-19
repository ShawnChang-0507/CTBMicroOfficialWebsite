window.onload = function(){
    var rows = document.querySelectorAll(".row");
    for(let i=0; i<rows.length; i++){
        rows[i].addEventListener("click", () => {
            // alert(rows[i].getAttribute("id"));
            window.location = 'detailPage.html';
        });
    }
}