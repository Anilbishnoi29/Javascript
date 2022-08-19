let commentArr = new Array();
if (commentArr.length) renderComments();

const addButton = document.getElementById("add-comment");
addButton.addEventListener("click",() => {
	let content = document.getElementById("comment").value;
	addComment(content,null);
});

const commentsList = document.getElementById("commentsList");



// Storing in local storage


let renderComment = (comment) => {
	let id = comment.id;
	let listElem = `
			<div class="hr"><hr/></div>
			<li id="comment-${id}" style="max-width:600px;">
			<div>
			 ${comment.content}
			</div>
			<div>
				<a href="#" role="button" id="reply-${id}">Reply</a>
			</div>`;
	if (comment.childrenIds.length != 0) {
		listElem += `<ul id="childlist-${id}">`;
		comment.childrenIds.forEach(commentId => {
			listElem += renderComment(commentArr[commentId]);
		});
		listElem += "</ul>";
	}
	listElem += "</li>";
	return listElem;
};

// Pass parent comment from rootComments to renderComment
let renderComments = () => {
	let rootComments = [];
	commentArr.forEach(comment => {
		if (comment.parentId === null || comment.parentId == "null") {
			rootComments.push(comment);
		}
	});
	let commentList = '';
	rootComments.forEach(comment => {
		commentList += renderComment(comment);
	});
	document.getElementById("commentsList").innerHTML = commentList;
};

// Adding new comment to memory and UI
let addComment = (content,parent) => {
	let comment = new Comment(commentArr.length,content,parent);
	commentArr.push(comment);
	console.log(commentArr.length - 1);
	if (parent != null) {
		commentArr[parent].childrenIds.push(commentArr.length - 1);
	}
	renderComments();
};

class Comment {
	constructor (id,content,parentId) {
		this.id = id;
		this.content = content;
		this.childrenIds = [];
		this.parentId = parentId;
	}
}
commentsList.addEventListener("click",(event) => {
	if (event.target.nodeName === 'A' || event.target.nodeName === 'BUTTON') {
		let parts = event.target.id.split("-");
		let type = parts[0];
		let id = parts[parts.length - 1];
		let abc = event.target.id.split("reply-")[1];
		if (type == 'reply') {
			let inputElem = `
					<li id="input-${abc}">
					<div>
						<textarea rows="5" id="content-${abc}" class="comment-box" placeholder="Your reply...."></textarea>
						<div>
							<button id="addreply-${abc}" class="add-btn">Submit</button>
						</div>
					</div>
					</li>
					`;

			let childListElemId = `childlist-${abc}`;
			let childListElem = document.getElementById(childListElemId);

			if (childListElem == null) {
				childListElem = `<ul id="childlist-${event.target.id.split("reply-")[1]}"> ${inputElem} </ul>`;
				document.getElementById(`comment-${abc}`).innerHTML += childListElem;
			} else {
				childListElem.innerHTML = inputElem + childListElem.innerHTML;
			}
		} else if (type == 'addreply') {
			let content = document.getElementById(`content-${abc}`).value;
			addComment(content,id);
		}
	}
},false);