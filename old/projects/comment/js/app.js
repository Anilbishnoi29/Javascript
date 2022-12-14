let localComment = [];
if (JSON.parse(localStorage.getItem("comment"))) {
    localComment.push(JSON.parse(localStorage.getItem("comment")));
}
const commentArr = (localComment.length > 0) ? [...localComment[0]] : [];
const emojiArr = ['👍️','🔥','😆','😂','🙂'];
const commentBTN = document.querySelector('#post-comment');
const commentFooter = document.querySelector('.commentFooter');
// open comment box
commentBTN.addEventListener('click',e => {
    e.preventDefault();
    const isOpen = document.querySelector('.main-comment-container');
    isOpen.classList[1] === 'd-none' ? isOpen.classList.remove('d-none') : isOpen.classList.add('d-none');
});
document.querySelector('.commentFooter').addEventListener('click',e => {
    e.preventDefault();
    if (e.target.className === 'post-comment-submit') {
        const mainComment = document.querySelector('#main-comment').value;
        addComment(randomID(),mainComment,randomID());
        document.querySelector('#main-comment').value = '';
        document.querySelector('.main-comment-container').classList.add('d-none');
        renderComment();
    }
});
// create random id
function randomID() {
    return Math.trunc(Math.random() * 10000000);
}
// Create new comment
function addComment(id,content,parentID) {
    let comment = new Comment(id,content,parentID);
    commentArr.push(comment);
    renderComment();
    localStorage.setItem("comment",JSON.stringify(commentArr));
}
class Comment {
    constructor (id,content,parentID) {
        this.id = id;
        this.content = content;
        this.like = [];
        this.parentID = parentID;
        this.childID = [];
        this.likeIcon = (this.like.length > 0) ? this.like[0] : emojiArr[0];
        this.totalLike = 0;
    }
}
// renderComment
renderComment();
function renderComment() {
    let commentHTML = '';
    commentArr.forEach(comment => {
        commentHTML += renderSingleComment(comment);
    });
    document.querySelector('#childComment').innerHTML = commentHTML;
}

// renderSingleComment()
function renderSingleComment(comment) {

    let list = `
            <li class="d-flex" id="comment-${comment.id}">
            <div class="userDP">DP</div>
            <div class="d-flex flex-column flex-1 ml-2">
            <div id="content">${comment.content}</div>
            <div class="d-flex">
            <a role="button" class="like-post" id="like-${comment.id}">
            <div class="like-empji">`;
    emojiArr.forEach(emoji => {
        list += `<span id="emoji-${emoji}">${emoji}</span>`;
    });
    if (comment.like.length > 0) {
        list += `</div><span class="after-liked like-post-icon" style="font-size:1.5rem; margin-top:0rem; transform:translateY(-0.7rem)">${comment.like[0]}</span></a>`;
    } else {
        list += `</div> <span class="like-post-icon">${emojiArr[0]}</span></a>`;
    }
    list += `<a href="" role="button" id="reply-${comment.id}">Reply</a>
            <a href="" role="button" id="delete-${comment.id}">Delete</a>
            <a style="margin-left:auto">${(comment.totalLike == 0) ? '' : comment.totalLike} ${comment.like}</a></div > `;
    if (comment.childID.length > 0) {
        list += `<ul id = "child-${comment.id}">`;
        comment.childID.forEach(commendID => {
            commentArr.forEach((isPresent,index) => {
                if (commendID === index) {
                    list += renderSingleComment(commentArr[commendID]);
                }
            });
        });
        list += `</ul>`;
    }
    list += `</div></li>`;
    return list;
}
document.querySelector('#childComment').addEventListener('click',e => {
    e.preventDefault();
    const [type,id] = e.target.id.split("-");
    console.log(type,id);

    if (type === "reply") {
        const childCommentContainer = document.createElement('div');
        childCommentContainer.innerHTML = `<div class='child-comment-container' id='childCommentList'>
                    <textarea id='childComment'></textarea>
                    <a href="" role="button" id="childCommentSubmit"
                            class='post-comment-submit'>Submit</a>
                </div>`;
        const childCommentParent = e.target.parentNode.parentNode;
        childCommentParent.append(childCommentContainer);
        getChildComment(+id);
    }
});
function getChildComment(id) {
    const parentCommentID = id;
    document.querySelector('#childCommentList').addEventListener('click',e => {
        e.preventDefault();
        const [type,id] = e.target.id.split("-");
        if (type === 'childCommentSubmit') {
            e.target.addEventListener('click',e => {
                e.preventDefault();
                addComment(e.target.previousElementSibling.value,parentCommentID);
            });
        }
    });
}