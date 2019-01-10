window.onload = updateImgWidthAndHeight();

function updateImgWidthAndHeight(){
    var rs = document.querySelectorAll(".small");
    rs.forEach(r => {
        var img = r.querySelector("img");
        var percent = img.width / img.height;
    });
}