function count_likes() {
    var likes = parseInt(document.querySelector("#like").innerText);
    likes++;
    document.querySelector("#like").innerText = likes;
}