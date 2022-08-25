let localComment = [];
if (JSON.parse(localStorage.getItem("comment"))) {
    localComment.push(JSON.parse(localStorage.getItem("comment")));
}
const commentArr = (localComment.length > 0) ? [...localComment[0]] : [];
// console.log(commentArr);
const emojiArr = ['👍️','🔥','😆','😂','🙂'];
const commentBTN = document.querySelector('#post-comment');
const commentFooter = document.querySelector('.commentFooter');
let mainCommentIsOpen = false;
renderComment();
commentBTN.addEventListener('click',e => {
    e.preventDefault();
    const isOpen = document.querySelector('.main-comment-container');
    if (isOpen.classList[1] === 'd-none') {
        isOpen.classList.remove('d-none');
    } else {
        isOpen.classList.add('d-none');
    }
});

document.querySelector('.commentFooter').addEventListener('click',e => {
    e.preventDefault();
    if (e.target.className === 'post-comment-submit') {
        const mainComment = document.querySelector('#main-comment').value;
        console.log(mainComment);
        addComment(mainComment,null);
        document.querySelector('#main-comment').value = '';
        document.querySelector('.main-comment-container').classList.add('d-none');
    }
});

// add comment to commentArr
function addComment(content,parentID) {
    const comment = new Comment(commentArr.length,content,parentID);
    commentArr.push(comment);
    if (parentID != null) {
        // commentArr[commentArr.length].childID.push(commentArr.length);
        commentArr[0].childID.push(commentArr.length - 1);
    }
    localStorage.setItem("comment",JSON.stringify(commentArr));
    // localStorage.setItem("comment",JSON.stringify([JSON.parse(localStorage.getItem("comment") || comment)]));
    renderComment();
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
        this.delete = idGet();
    }
}
function idGet() {
    let id = Math.trunc(Math.random() * 10000000000);
    if (commentArr.length > 0) {
        commentArr.forEach(comment => {
            if (comment.delete === +id) {
                idGet();
            }
        });
    } else {
        return id;
    }
}
// render comment on UI
function renderComment() {
    let commentHTML = '';
    commentArr.forEach(comment => {
        if (comment.parentID === null || comment.parentID === 'null') {
            commentHTML += renderSingleComment(comment);
        }
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
        list += `</div > <span class="like-post-icon">${emojiArr[0]}</span></a >`;
    }
    list += `<a href="" role="button" id="reply-${comment.id}">Reply</a>
            <a href="" role="button" id="delete-${comment.id}">Delete</a>
            <a style="margin-left:auto">${(comment.totalLike == 0) ? '' : comment.totalLike} ${comment.like}</a></div > `;
    if (comment.childID.length > 0) {
        list += `< ul id = "child-${comment.id}`;
        comment.childID.forEach(commendID => {
            list += renderSingleComment(commentArr[commendID]);
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
    if (e.target.nodeName === "SPAN") {
        e.target.parentNode.nextElementSibling.innerText = e.target.innerText;
        e.target.parentNode.nextElementSibling.classList.add('after-liked');
        const [type,id] = e.target.parentNode.parentNode.id.split('-');
        commentArr[id].like[0] = e.target.innerText;
        commentArr[id].totalLike = commentArr[id].like.length;
        console.log(commentArr);
        e.target.parentNode.nextElementSibling.style.fontSize = '1.5rem';
        e.target.parentNode.nextElementSibling.parentNode.style.marginTop = '0rem';
        // e.target.parentNode.nextElementSibling.parentNode.style.transform = 'translateY(-0.7rem)';
        // localStorage.setItem("comment",JSON.stringify(comment));
        localStorage.setItem("comment",JSON.stringify(commentArr));
        renderComment();
    }
    if (type === "delete") {
        // let deleteIndex;
        // commentArr.forEach((comment,i) => {
        //     if (comment.delete === +id) {
        //         console.log(i);
        //         deleteIndex = i;
        //         console.log(comment.delete === id);
        //         console.log(deleteIndex);
        //     }
        // });
        commentArr.splice(id);
        console.log(commentArr);
        localStorage.setItem("comment",JSON.stringify(commentArr));
        renderComment();
    }
});