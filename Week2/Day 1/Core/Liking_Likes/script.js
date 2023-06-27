function count_likes(likeId) {
    var likes = parseInt(document.querySelector("#" + likeId).innerText);
    likes++;
    document.querySelector("#" + likeId).innerText = likes;
}