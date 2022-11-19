const imageContainer = document.querySelector("#image-container")
const leftBtn = document.querySelector("#left")
const rightBtn = document.querySelector("#right")
const dotContainer = document.querySelector("#dot-container")

function createImageDom(url, id){
    const image = document.createElement("img")
    image.setAttribute("src", url)
    image.setAttribute("id", id)
    imageContainer.appendChild(image) 
}
let wichDot = 0
let canMove = true

createImageDom("./images/dog.jpg", "dog")
createImageDom("./images/phil.jpg", "phil")
createImageDom("./images/sweden.jpeg", "sweden")
createImageDom("./images/mqdefault.jpg", "water")
createImageDom("./images/rico.jpg", "rico")

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

function rightMove(){
    if(canMove){
    wichDotRemoveBlack(wichDot)
    imageArray.push(imageArray[0])
    imageArray.splice(0, 1)
    moveImages(true)
    if(wichDot == imageArray.length - 1){
        wichDot = 0
    }else{
        wichDot += 1
    }
    wichDotBlack(wichDot)
    canMove = false
    window.setTimeout(allowToMove, 400)
    }else{
        return
    }
}

function leftMove(){
    if(canMove){
    wichDotRemoveBlack(wichDot)
    imageArray.unshift(imageArray[imageArray.length - 1])
    imageArray.splice(imageArray.length - 1, 1)
    moveImages(false)
    if(wichDot == 0){
        wichDot = imageArray.length - 1
    }else{
        wichDot -= 1
    }
    wichDotBlack(wichDot)
    canMove = false
    window.setTimeout(allowToMove, 400)
    }else{
        return
    }
}

function moveImages(isRight){
    imageArray[0].style.left = "0"
    imageArray[0].setAttribute("where", "middle")
    imageArray[1].setAttribute("where", "right")
    imageArray[imageArray.length - 1].setAttribute("where", "left")
    if(isRight){
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

function createDots(){
    const images = document.querySelectorAll("img")
    images.forEach(image => {
        createDotDOM()
    });
}

function createDotDOM(index){
    const dot = document.createElement("div")
    dot.setAttribute("class", "dot")
    dot.setAttribute("id", index)
    dotContainer.appendChild(dot)
}
function wichDotBlack(positionIndex){
    const dots = document.querySelectorAll(".dot")
    dots[positionIndex].toggleAttribute("active")
}
function wichDotRemoveBlack(positionIndex){
    const dots = document.querySelectorAll(".dot")
    dots[positionIndex].toggleAttribute("active")
}


selectImagesAndArray()
moveImages()
createDots()
wichDotBlack(0)

window.setInterval(rightMove, 5000);

function allowToMove(){
    canMove = true
}