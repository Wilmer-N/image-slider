const imageContainer = document.querySelector("#image-container")
const leftBtn = document.querySelector("#left")
const rightBtn = document.querySelector("#right")
function createImageDom(url, id){
    const image = document.createElement("img")
    image.setAttribute("src", url)
    image.setAttribute("id", id)
    imageContainer.appendChild(image) 
}

createImageDom("./images/dog.jpg", "dog")
createImageDom("./images/phil.jpg", "phil")
createImageDom("./images/sweden.jpeg", "sweden")
createImageDom("./images/mqdefault.jpg", "water")

let imageArray = []

function selectImagesAndArray(){
    const images = document.querySelectorAll("img")
    images.forEach(image => {
        imageArray.push(image)
    });
}
rightBtn.addEventListener("click", rightMove)

leftBtn.addEventListener("click", leftMove)

window.addEventListener("keydown", function(e){
    if(e.key == "a"){
        leftMove()
    }else if(e.key == "d"){
        rightMove()
    }
})

function leftMove(){
    imageArray.push(imageArray[0])
    imageArray.splice(0, 1)
    moveImages(true)
}

function rightMove(){
    imageArray.unshift(imageArray[imageArray.length - 1])
    imageArray.splice(imageArray.length - 1, 1)
    moveImages(false)
}

function moveImages(isLeft){
    imageArray[0].style.left = "0"
    imageArray[0].setAttribute("where", "middle")
    imageArray[1].setAttribute("where", "right")
    imageArray[imageArray.length - 1].setAttribute("where", "left")
    if(isLeft){
        imageArray[imageArray.length - 1].style.zIndex = "3"
        imageArray[0].style.zIndex = "5"
        imageArray[1].style.zIndex = "1"
        console.log(imageArray)
    }else{
        console.log(imageArray)
        imageArray[imageArray.length - 1].style.zIndex = "2"
        imageArray[0].style.zIndex = "5"
        imageArray[1].style.zIndex = "3"
    }
}


selectImagesAndArray()
moveImages()