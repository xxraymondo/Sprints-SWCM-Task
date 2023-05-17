
function myShowMyFunc() {
 
    document.getElementById("ShowMe").style.display = "none"
    document.getElementById("mainDivSongList").style.display = "block"
    document.getElementById("hideMe").style.display = "inline"

}

function myHideMyfunc(){
    document.getElementById("hideMe").style.display = "none"
    document.getElementById("mainDivSongList").style.display = "none"

    document.getElementById("ShowMe").style.display = "block"
}