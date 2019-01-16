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

    var paddNum = 14;

    r11 = 1.36, r22 = 1.36, r31 = 1.36, r32 = 1.36, r33 = 1.36;
    r12 = 2.89, r21 = 2.89;

    var h = ar.clientWidth / (r31 + r32 + r33);
    
    var row01 = document.querySelector(".row01");
    row01.style.height = ar.clientWidth / 1.8 + 'px';

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
}

function checkImg() {
    if (imgs == undefined) {
        imgs = document.querySelectorAll(".small > img");
    }
    for(var i=0; i < imgs.length; i++){
        imgs[i].onload = function(){
            updateImgWidthAndHeight();
        }
    }
    createSlider();
    updateImgWidthAndHeight();
    window.onresize = updateImgWidthAndHeight();
}

var data = [
    {content: 'images/mainImg1.jpg'},
    {content: 'images/mainImg2.jpg'},
    {content: 'images/mainImg3.jpg'}
]

function createSlider(){
    var islider = new iSlider({
        dom: document.getElementById('iSlider-wrapper'),
        data: data,
        isLooping: true,
        isAutoplay: true,
        animateType: 'rotate',
        fixPage: false,
        initIndex: 0,
        fillSeam: true,
        // 每张图片停留时间
        duration: 5000
    });
}

window.onload = checkImg();