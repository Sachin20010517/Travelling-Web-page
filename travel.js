Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{
    e.addEventListener('keyup', (e1)=>{
        if (e.value.length > 0){
            document.getElementsByClassName('fa-solid fa-caret-down')[i].style.transform="rotate(180deg)";
        }
        else{
            document.getElementsByClassName('fa-solid fa-caret-down')[i].style.transform="rotate(0deg)";
        }
    })
})


/*This js part for Gallery */

var fullImg_Box = document.getElementById("fullImg_Box");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
    fullImg_Box.style.display = "flex"
    fullImg.src = pic;
}

function closeFullImg(){
    fullImg_Box.style.display = "none";
}