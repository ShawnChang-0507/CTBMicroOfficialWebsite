window.onload = function(){
    var rows = document.querySelectorAll(".row");
    for(var i=0; i<rows.length; i++){
        rows[i].addEventListener("click", function(){
            // alert(this.getAttribute("id"));
            window.location = 'detailPage.html';
        });
    }
}