import $ from 'jquery';

let isLike = false;
let isDislike = false;

$(document).ready(() => {
    $('.like-btn').on('click', () => {
        addLikeDislike(1);
    });
    $('.dislike-btn').on('click', () => {
        addLikeDislike(2);
    });
});

function addLikeDislike(type) {
    let likesCounter = $('.like-btn .counter'),
        countLikes = parseInt(likesCounter.text()),
        dislikesCounter = $('.dislike-btn .counter'),
        countDislikes = parseInt(dislikesCounter.text());

    switch (type) {
        case 1: {
            if (isLike) {
                isLike = false;
                likesCounter.text(countLikes - 1);
                break;
            }
            if (isDislike) {
                isDislike = false;
                dislikesCounter.text(countDislikes - 1);
            }
            isLike = true;
            likesCounter.text(countLikes + 1);
            break;
        }
        case 2: {
            if (isDislike) {
                isDislike = false;
                dislikesCounter.text(countDislikes - 1);
                break;
            }
            if (isLike) {
                isLike = false;
                likesCounter.text(countLikes - 1);
            }
            isDislike = true;
            dislikesCounter.text(countDislikes + 1);
            break;
        }
    }
}
