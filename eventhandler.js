window.onload = blurImage;
function blurImage(){
    let blur = document.getElementsByTagName("img");
    for(let i = 0; i < blur.length; i++){
        blur[i].onclick = unblurImage;//click event handler
    }
}
function unblurImage(eventObj){
    let unblur = eventObj.target;
    let name = unblur.id;
    name = name + ".jpg";
    unblur.src = name;
}