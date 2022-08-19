// select input and button
const commentBox = document.querySelector('#commentBox');
const commentSubmit = document.querySelector('#commentSubmit');

const commentListArr = []; // this for store comments

commentSubmit.addEventListener('click',(e) => {
    e.preventDefault();
    if (commentBox.value.trim() !== "") {
        addComment(commentBox.value,null);
        renderComments();
    } else {
        alert('write some good comment!');
    } commentBox.value = "";
});

// class for add new comment
class Comment {
    constructor (id,content,parentId) {
        this.id = id;
        this.content = content;
        this.childrenIds = [];
        this.parentId = parentId;
    }
}
// add comment
function addComment(content,parent) {
    let comment = new Comment(commentListArr.length,content,parent);// id = commentListArr.length
    commentListArr.push(comment);
    if (parent != null) {
        commentListArr[parent].childrenIds.push(commentListArr.length - 1); // this for child comment's parent id
    }
    renderComments();
}
// render comments
function renderComments() {
    let commentHTML = '';
    commentListArr.forEach(comment => {
        if (comment.parentId === null || comment.parentId === 'null') {
            commentHTML += renderSingleComment(comment);
        }
    });
    document.querySelector('#commentsList').innerHTML = commentHTML;
}
// renderSingleComment
function renderSingleComment(comment) {
    let list = `<div class="hr"><hr/></div>
        <li id="comment-${comment.id}" >
        <div>${comment.content}</div>
        <div><a href="#" role="button" id="reply-${comment.id}">Reply</a></div>`;

    if (comment.childrenIds.length != 0) {
        list += `<ul id="childlist-${comment.id}">`;
        comment.childrenIds.forEach(commentId => {
            list += renderSingleComment(commentListArr[commentId]);
        });
        list += `</ul>`;
    }

    list += `</li>`;
    return list;
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