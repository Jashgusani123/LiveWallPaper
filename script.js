let body  = document.querySelector("body");
body.addEventListener("click" , (e)=>{
    // console.log(e);
    body.innerHTML = "";
    let posx = e.offsetX;
    let posy = e.offsetY;
    let img = document.createElement("img");
    img.src = "https://media1.giphy.com/media/c1R3XcUXVWAFy/200w.gif?cid=6c09b952kfi012wwl9yrl6sh0t0p3djwx8zr94icjez1n6rf&ep=v1_gifs_search&rid=200w.gif&ct=g";
    img.style.top = posy + "px";
    img.style.left = posx + "px";
    body.append(img);

    setInterval(()=>{
        img.remove();
    } , 2800);
    // console.log("fjkal");
})
// console.log("jfdl");