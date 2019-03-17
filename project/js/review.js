function reviewOpen(){
    var readOpen = document.getElementsByClassName('review_more');
    var point = document.getElementsByClassName('points');
    var reviewHidden = document.getElementsByClassName('review__hidden');
    for (var i = 0; i < readOpen.length && i < point.length && i < reviewHidden.length; i++) {
        readOpen[i].style.display = 'none';
        point[i].style.display = 'none';
        reviewHidden[i].style.display = 'inline';
    }

}
function reviewClose() {
    var readOpen = document.getElementsByClassName('review_more');
    var point = document.getElementsByClassName('points');
    var reviewHidden = document.getElementsByClassName('review__hidden');
    for (var i = 0; i < readOpen.length && i < point.length && i < reviewHidden.length; i++) {
        readOpen[i].style.display = 'inline';
        point[i].style.display = 'inline';
        reviewHidden[i].style.display = 'none';
    }
}
