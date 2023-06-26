
function deleteElement (id) {
    // console.log("Element to remove ID:", id) ;
    document.querySelector(`#${id}`).remove();
    console.log("Element Removed : Yes")
}

// function like (id) {
//     console.log("like", document.getElementById(id).innerText);
//     var like = parseInt(document.getElementById(id).innerText);
//     like++;
//     document.getElementById(id).innerText
// }

function likeTwo (element){
    element.innerText++;
}

function onImage (element) {
    
    if(element.src == "http://127.0.0.1:5500/02-dom_manipulation/images/1.jpg"){
        element.src ="images/5.png"
    }else {
        element.src ="images/1.jpg"
    }
}

function onMouseImage(id){
    document.getElementById(id).src = 'images/6.png';
}
function outMouseImage(id){
    document.getElementById(id).src = "images/2.jpg"
}


function login(){
    console.log("START");
    setTimeout( function() {
        alert('Please try to Register');
    }, 3000);
    console.log("END");
}