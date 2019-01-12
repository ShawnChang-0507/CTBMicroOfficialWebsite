var r11, r12, r21, r22, r31, r32, r33;
var imgs;

function updateImgWidthAndHeight() {
    // 父容器(获取变更之后的父容器宽度)
    var ar = document.querySelector("article");
    var row11 = document.querySelector(".row11").querySelector("img");
    var row12 = document.querySelector(".row12").querySelector("img");

    var row21 = document.querySelector(".row21").querySelector("img");
    var row22 = document.querySelector(".row22").querySelector("img");

    var row31 = document.querySelector(".row31").querySelector("img");
    var row32 = document.querySelector(".row32").querySelector("img");
    var row33 = document.querySelector(".row33").querySelector("img");

    // if (r11 == undefined || isNaN(r11) || r12 == undefined || isNaN(r12) || r21 == undefined || isNaN(r21) || r22 == undefined || isNaN(r22) || r31 == undefined || isNaN(r31) || r32 == undefined || isNaN(r32) || r33 == undefined || isNaN(r33)) {
    //     r11 = row11.width / row11.height;
    //     r12 = row12.width / row12.height;
    //     r21 = row21.width / row21.height;
    //     r22 = row22.width / row22.height;
    //     r31 = row31.width / row31.height;
    //     r32 = row32.width / row32.height;
    //     r33 = row33.width / row33.height;
    // }
    // var paddNum = 14;

    // var h = ar.clientWidth / (r11 + r12);

    var paddNum = 14;

    r11 = 1.36, r22 = 1.36, r31 = 1.36, r32 = 1.36, r33 = 1.36;
    r12 = 2.89, r21 = 2.89;

    var h = ar.clientWidth / (r31 + r32 + r33);

    row11.style.height = h - paddNum + 'px';
    row12.style.height = row11.style.height;
    row11.style.width = h * r11 - paddNum + 'px';
    row12.style.width = ar.clientWidth - h * r11 - paddNum + 'px';
    row11.style.margin = paddNum / 2;
    row12.style.margin = paddNum / 2;

    row21.style.height = h - paddNum + 'px';
    row22.style.height = row21.style.height;
    row21.style.width = ar.clientWidth - h * r22 - paddNum + 'px';
    row22.style.width = h * r22 - paddNum + 'px';
    row21.style.margin = paddNum / 2;
    row22.style.margin = paddNum / 2;

    row31.style.height = h - paddNum + 'px';
    row32.style.height = row31.style.height;
    row33.style.height = row31.style.height;
    row31.style.width = h * r31 - paddNum + 'px';
    row32.style.width = h * r32 - paddNum + 'px';
    row33.style.width = h * r33 - paddNum + 'px';
    row31.style.margin = paddNum / 2;
    row32.style.margin = paddNum / 2;
    row33.style.margin = paddNum / 2;


    // var h = ar.clientWidth / (r11 + r12);

    // row11.style.height = h - paddNum + 'px';
    // row12.style.height = row11.style.height;
    // row11.style.width = h * r11 - paddNum + 'px';
    // row12.style.width = h * r12 - paddNum + 'px';
    // row11.style.margin = paddNum / 2;
    // row12.style.margin = paddNum / 2;

    // h = ar.clientWidth / (r21 + r22);
    // row21.style.height = h - paddNum + 'px';
    // row22.style.height = row21.style.height;
    // row21.style.width = h * r21 - paddNum + 'px';
    // row22.style.width = h * r22 - paddNum + 'px';
    // row21.style.margin = paddNum / 2;
    // row22.style.margin = paddNum / 2;

    // h = ar.clientWidth / (r31 + r32 + r33);
    // row31.style.height = h - paddNum + 'px';
    // row32.style.height = row31.style.height;
    // row33.style.height = row31.style.height;
    // row31.style.width = h * r31 - paddNum + 'px';
    // row32.style.width = h * r32 - paddNum + 'px';
    // row33.style.width = h * r33 - paddNum + 'px';
    // row31.style.margin = paddNum / 2;
    // row32.style.margin = paddNum / 2;
    // row33.style.margin = paddNum / 2;
}

function checkImg() {
    if (imgs == undefined) {
        imgs = document.querySelectorAll(".small > img");
    }
    imgs.forEach(img => {
        img.onload = function () {
            updateImgWidthAndHeight();
        }
    });
    updateImgWidthAndHeight();
    window.onresize = updateImgWidthAndHeight();
}

window.onload = checkImg();