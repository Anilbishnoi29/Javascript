let commentArr = new Array(); // this is arr for store all comments
if (commentArr.length) renderComments();

// event handle
const addButton = document.getElementById("add-comment");
addButton.addEventListener("click",(e) => {
    e.preventDefault();
    let content = document.getElementById("comment");
    if (content.value.trim() !== "") {
        addComment(content.value,null);
        renderComments();
    } else {
        alert('write some good comments');
    }
    content.value = "";
});

// renderSingleComment and push to ui
let renderSingleComment = (comment) => {
    let list = `<div class="hr"><hr/></div>
        <li id="comment-${comment.id}" style="max-width:600px;">
        <div>${comment.content}</div>
        <div><a href="#" role="button" id="reply-${comment.id}">Reply</a></div>`;
    if (comment.childrenIds.length != 0) {
        list += `<ul id="childlist-${comment.id}">`;
        comment.childrenIds.forEach(commentId => {
            list += renderSingleComment(commentArr[commentId]);
        });
        list += `</ul>`;
    }
    list += `</li>`;
    return list;
};

// Pass parent comment from rootComments to renderComment
let renderComments = () => {
    let rootComments = [];
    let commentList = '';
    commentArr.forEach(comment => {
        if (comment.parentId === null || comment.parentId === 'null') {
            commentList += renderSingleComment(comment);
        }
    });
    document.querySelector("#commentsList").innerHTML = commentList;
};

// Adding new comment to UI
let addComment = (content,parent) => {
    let comment = new Comment(commentArr.length,content,parent);
    commentArr.push(comment);
    if (parent != null) {
        commentArr[parent].childrenIds.push(commentArr.length - 1);
        console.log(commentArr.length - 1,parent,commentArr[parent]);
    }
    renderComments();
};

// class for add new comment
class Comment {
    constructor (id,content,parentId) {
        this.id = id;
        this.content = content;
        this.childrenIds = [];
        this.parentId = parentId;

    }
}

// add reply to action
const commentsList = document.querySelector("#commentsList");

commentsList.addEventListener("click",(event) => {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'BUTTON') {
        let parts = event.target.id.split("-");
        let [type,id] = [...parts];
        if (type == 'reply') {
            let inputElem = `
					<li id="input-${id}">
					<div>
						<textarea rows="5" id="content-${id}" class="comment-box" placeholder="Your reply...."></textarea>
						<div>
							<button id="addreply-${id}" class="add-btn">Submit</button>
						</div>
					</div>
					</li>
					`;

            let childListElemId = `childlist-${id}`;
            let childListElem = document.getElementById(childListElemId);

            if (childListElem == null) {
                childListElem = `<ul id="childlist-${event.target.id.split("reply-")[1]}"> ${inputElem} </ul>`;
                document.getElementById(`comment-${id}`).innerHTML += childListElem;
                // commentsList.innerHTML += childListElem;
            } else {
                childListElem.innerHTML = inputElem + childListElem.innerHTML;
            }


        } else if (type == 'addreply') {
            let content = document.getElementById(`content-${id}`).value;
            addComment(content,id);
        }
    }
},false);