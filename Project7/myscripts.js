var print1 = new Image();
var print2 = new Image();
var logo1 = new Image();
var logo2 = new Image();

var imgArray = [
    'Pet1Lg.jpg',
    'Pig1Lg.jpg',
    'CatandDogLg.jpg',
    'HuntingDogsLg.jpg'
];

var titleArray = [
    'Woman and Small Dog',
    'Pot Belly Pig',
    'Cat and Dog Together',
    'Two Dogs Portrait'
];

var imgPath = "Images/Fullsize/";

function preloadImages() {
    print1.src = "Images/print1.png";
    print2.src = "Images/print2.png";
    logo1.src = "Images/logo1.png";
    logo2.src = "Images/logo2.png";

    for (var i = 0; i < imgArray.length; i++) {
        var tmpImg = new Image();
        tmpImg.src = imgPath + imgArray[i];
    }
}

function swapImage(imgID) {
    var theImage = document.getElementById("theImage");
    var textDiv = document.getElementById("bottomText");

    if (theImage && textDiv) {
        theImage.src = imgPath + imgArray[imgID];
        textDiv.innerHTML = titleArray[imgID];
    }
}

function logoHover() {
    document.getElementById("logo").src = "Images/logo2.png";
}

function logoOut() {
    document.getElementById("logo").src = "Images/logo1.png";
}