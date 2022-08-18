const submitComment = document.getElementById('submitComment');

// array for comment store
let commentList = JSON.parse(localStorage.getItem("comments")) || [];

// submit comment
submitComment.addEventListener('click',(e) => {
    e.preventDefault();
    const commentText = document.getElementById('commentText').value;
    if (commentText.trim() !== "") createComment(commentText);
    renderComment();
    document.getElementById('commentText').value = null;
});

// create comment
function createComment(text,parentCommentId = null) {
    let commentTime = new Date().toISOString().split('T')[0];
    const comment = {
        parentCommentId,
        commentId: Math.random().toString().substr(2,7),
        userName: 'UserName Here',
        text,
        commentTime,
        like: 22,
        currentUserLike: 0,
        childNode: []
    };
    if (parentCommentId === null) {
        commentList.push(comment);
    } else {
        commentList.filter(list => {
            if (list.commentId === parentCommentId) {
                list.childNode.push(comment);
                console.log("sadsa;dksa;d");
            }
        });
    }
    localStorage.setItem("comments",JSON.stringify(commentList));
}
// create comment html
function createCommentHtml(list,margin,padding) {
    let fullComment = "";
    fullComment += `<div class="comment" style="margin-left:${margin}; margin-top:${padding}"  data-parentId="${list.parentCommentId}" id="${list.commentId}">
        <div class="d-flex flex-js"><h3>${list.userName}</h3><p>${list.commentTime}</div>
        <p class="text">${list.text}<p>
        <div class="d-flex comment-btn">
            <button id="likeCommentId" class="likeComment"><i style="color:${(list.currentUserLike === 1) ? "rgb(0, 212, 106)" : ""};" class="fa-solid fa-thumbs-up"></i>
            ${(list.like === 0) ? '' : list.like}</button>
            <button class="replyComment"><i class="fa-solid fa-reply"></i></button>
            <button id="deleteComment"><i class="fa-solid fa-pen-to-square"></i></button>
            <button id="deleteComment"><i class="fa-solid fa-trash"></i></button>
        </div>
        <div class='reply-comment' style='display:none;' id="${list.commentId}">
            <textarea type="text" class="replyCommentText"></textarea>
            <button class="replyCommentBtn"><i class="fa-solid fa-reply"></i></button>
        </div>
        </div>`;
    return fullComment;
}

function getCommentHTML(list,margin,padding = '0.5rem') {
    let comment = "";
    for (let i of list) {
        comment += createCommentHtml(i,margin,padding);
        if (i.childNode.length > 0) {
            comment += getCommentHTML(i.childNode,(margin = '1.3rem'),(padding = "0.2rem"));
            margin = "0";
            padding = ".7rem";
        }
    }
    return comment;
}

// render comment
renderComment();
function renderComment() {
    const commentUI = document.getElementById('commentUI');
    commentUI.innerHTML = "";
    if (commentList.length > 0) {
        const comment = getCommentHTML(commentList,margin = 0);
        // console.log(comment);
        commentUI.innerHTML += comment;
    }
}

// comment reply edit update
const cmtBtn = document.querySelector('.comment-list');
cmtBtn.addEventListener('click',e => {
    e.preventDefault();
    if (e.target.classList.contains('likeComment')) {
        const targetUI = e.target.parentNode.parentNode;
        commentList.filter(list => {
            if (list.commentId === targetUI.getAttribute('id')) {
                if (list.currentUserLike === 0) {
                    list.like += 1;
                    list.currentUserLike = 1;
                } else {
                    list.like -= 1;
                    list.currentUserLike = 0;
                }
                localStorage.setItem("comments",JSON.stringify(commentList));
                renderComment();
            }
        });
    }
    if (e.target.classList.contains('replyComment')) {
        e.target.addEventListener('click',() => {
            const child = e.target.parentNode.parentNode.childNodes;
            for (let i = 0; i < child.length; i++) {
                if (child[i].className == 'reply-comment') {
                    if (child[i].style.display === 'none') {
                        child[i].style.display = 'block';
                        const replyText = child[i].childNodes;
                        for (let i = 0; i < replyText.length; i++) {
                            if (replyText[i].className == 'replyCommentBtn') {
                                replyText[i].addEventListener('click',() => {
                                    console.log(e.target.parentNode.childNode.length);
                                });
                            }
                        }
                    } else {
                        child[i].style.display = 'none';
                    }
                }
            }
        });
    }
});

// reply box
