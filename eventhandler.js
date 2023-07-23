window.onload = blurImage;
function blurImage(){
    let blur = document.getElementsByTagName("img");
    for(let i = 0; i < blur.length; i++){
        blur[i].onclick = unblurImage;//click event handler
    
}
function unblurImage(eventObj){/* khi có 1 event xảy ra (cụ thể ở đây là click event), thì 1 event object sẽ đc tạo ra, sau đó
nó trở thành 1 parameter và đc gán vào hàm unblurImage (event handler). event object chứa nhũng thông tin về event đó: loại event là gì,
phần tử (element) nào tạo nên event đó...
*/
    let unblur = eventObj.target;/* .target property giữ tham chiếu (reference) tới object đã tạo ra click event. Tức là khi user 
    click vào tấm hình nào thì tấm hình đó trở thành 1 object (lưu vào event object), tham số unblur lúc này có giá trị là tấm hình mà user click vào
    */
    let name = unblur.id;
    name = name + ".jpg";
    unblur.src = name;
    setTimeout(reblur, 2000, unblur);
}
function reblur(unblur){
    let name = unblur.id;
    name = name + "blur.jpg";
    unblur.src = name;
}
}