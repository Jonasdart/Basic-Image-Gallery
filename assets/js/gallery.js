var actualImage;
var _openedImage

function openImage(imageName){
    hasOpenedImages = document.getElementsByClassName("opened").length > 0;

    if (!hasOpenedImages){
        image = document.getElementById(imageName);
        setOpenedImage(image);
    }
}

function setOpenedImage(imageObject){
    openedImage = imageObject.cloneNode()
    openedImage.classList.add("opened");
    openedImage.classList.remove("image");

    try{
        document.getElementById("opened-image").removeChild(_openedImage);
    }catch {

    }

    document.getElementById("opened-area").style.display = "block";
    document.getElementById("opened-image").appendChild(openedImage)

    _openedImage = openedImage;
    actualImage = imageObject;
}

function closeImage() {
    document.getElementById("opened-area").style.display = "none";
    document.getElementById("opened-area").innerHTML = `
            <section id="opened-image"></section>
    `
}

function nextImage() {
    images = document.getElementsByClassName("image")
    let actualIndex;

    for(index=0; index < images.length; index++){
        if (images[index] === actualImage){
            actualIndex = index;
        }
    }

    if (images[actualIndex + 1] !== undefined){
        setOpenedImage(images[actualIndex + 1]);
    }else {
        setOpenedImage(images[0]);
    }
}

function prevImage() {
    images = document.getElementsByClassName("image")
    let actualIndex;

    for(index=images.length-1; index >= 0; index--){
        if (images[index] === actualImage){
            actualIndex = index;
        }
    }

    if (images[actualIndex - 1] !== undefined){
        setOpenedImage(images[actualIndex - 1]);
    }else {
        setOpenedImage(images[images.length - 1]);
    }
}

function interact(command){
    command = command.key;

    console.log(command);

    if (command === "Escape" || command === " ") {
        closeImage();        
    }

    if (command === "ArrowRight"){
        nextImage();
    }

    if (command === "ArrowLeft"){
        prevImage();
    }
}

document.onkeydown = interact;