// arr for store comment
let localComment = [];
if (JSON.parse(localStorage.getItem("comment"))) {
    localComment.push(JSON.parse(localStorage.getItem("comment")));
}
const emojiArr = ['👍️','🔥','😆','😂','🙂'];
// copy deep copy of localstorage to commentList
function createDeepCopy(input) {
    // base condition
    if (typeof input !== "object") return input;
    // BASE CASE when input is of instance Date
    if (input instanceof Date) return new Date(input.getTime());
    // copy
    let copy = Array.isArray(input) ? [] : {};
    for (let key in input) copy[key] = createDeepCopy(input[key]);
    return copy;
}
const commentList = (localComment.length > 0) ? createDeepCopy(JSON.parse(localStorage.getItem("comment"))) : [];
console.log(commentList);
let isMainComment = true;
let commentID,childCommentContent,childParentID; // global variable for replay
// getComment text
document.querySelector('#mainCommentBtn').addEventListener('click',e => {
    e.preventDefault();
    const content = document.querySelector('#mainComment').value;
    if (isMainComment) {
        createComment(randomID(),content,randomID(),'parent');
    } else {
        createComment(commentID,content,childParentID,'child');
        isMainComment = true;
    }
    document.querySelector('#mainComment').value = '';
    renderComment();
});
// random id for comment id or parent id
function randomID() {
    return Math.trunc(Math.random() * 10000000);
}
function getUserName() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
// create comment
function createComment(id,content,parentID,type) {
    const comment = {
        id,
        parentID,
        content,
        childIDs: [],
        type,
        time: new Date(),
        userName: getUserName(),
        like: [],
        likeIcon: null,
        totalLikes: 0,
        setIcon() {
            this.likeIcon = this.like.length > 0 ? this.like[0] : emojiArr[0];
        },
        totalLikesUpdate() {
            this.totalLikes = this.like.length;
        }
    };
    comment.setIcon();
    comment.totalLikesUpdate();
    commentList.push(comment);
    commentList.forEach((oldComment,index) => {
        if (oldComment.id === comment.parentID) {
            commentList[index].childIDs.push(+id);
        }
    });
    localStorage.setItem("comment",JSON.stringify(commentList));
}
renderComment();
// render comment
function renderComment() {
    document.querySelector('#childComment').innerHTML = '';
    let list = '';
    commentList.forEach(comment => {
        if (comment.type === 'parent') {
            list += nestedComment(comment);
        }
    });
    document.querySelector('#childComment').innerHTML += list;
}

// render nested comment
function nestedComment(childComment,replyUserName = null) {
    time = (Math.floor((new Date() - Date.parse(childComment.time)) / 1000 / 60));
    let list = `<li id='${childComment.id}' parentID='${childComment.parentID}'>
            <div class='d-flex'>
                <h1 class='dp'><img src='https://cdn4.iconfinder.com/data/icons/instagram-ui-twotone/48/Paul-18-512.png' width='40px'
                height='auto' alt=''></h1>
                <div class='d-flex column'>
                <span id='repliedON'>${(replyUserName === null) ? "" : `@replied on<a href="#">${replyUserName}</a>`}</span>
                <p>
                    <a href="#">${childComment.userName}</a> ${childComment.content}
                </p><span id='totalLikes'>${(childComment.totalLikes === 0) ? "" : `<a href="#">${childComment.totalLikes} ${childComment.like[0]}</a>`}</span>
                    <div class='d-flex flex-sb'>
                    <span class='time'>${time < 60 ? time + ' MINUTES ' : time / 60 + ' HOURS '}AGO</span >
                    <div class='d-flex'>
                        <a role="button" class="like-post" id="like-${childComment.id}">
            <div class="like-empji">`;
    emojiArr.forEach(emoji => {
        list += `<span id="emoji-${emoji}" data-id="${childComment.id}">${emoji}</span>`;
    });
    if (childComment.like.length > 0) {
        list += `</div><span class="after-liked like-post-icon" style="font-size:1.5rem; margin-top:0rem; transform:translateY(-0.7rem)">${childComment.like[0]}</span></a>`;
    } else {
        list += `</div> <span class="like-post-icon">${emojiArr[0]}</span></a>`;
    };
    list += `<a href='#' id='reply-${childComment.id}' parentID='${childComment.parentID}'>Reply</a>
                        <a href='#' id='delete-${childComment.id}' parentID='${childComment.parentID}'>Delete</a>
                    </div>
                    </div>
                </div>
            </div> `;
    if (childComment.childIDs.length > 0) {
        list += `<ul class='innerComment'> `;
        childComment.childIDs.forEach((comment) => {
            commentList.forEach((mainComment,index) => {
                if (mainComment.id === +comment) {
                    list += nestedComment(commentList[index],childComment.userName);
                }
            });
        });
        list += `</ul> `;
    }
    list += `</li > `;
    return list;
}

// replay comment
document.querySelector('#childComment').addEventListener('click',e => {
    e.preventDefault();
    const [type,id] = e.target.id.split('-');
    console.log(type,id);
    if (type === 'reply') { document.querySelector('#mainComment').focus(); }
    // global variable update for replay 
    isMainComment = false;
    commentID = randomID();
    childParentID = +id;
    // save emoji in like
    if (type === 'emoji') {
        console.log(id);
        let dataID = e.target.getAttribute('data-id');
        console.log(dataID);
        commentList.forEach((element,index) => {
            if (element.id === +dataID) {
                commentList[index].like.splice(0,1,id);
                commentList[index].totalLikes = commentList[index].like.length;
                localStorage.setItem("comment",JSON.stringify(commentList));
            }
        });
    }
    renderComment(); // render 
});

// delete comment
function deleteComment() { }