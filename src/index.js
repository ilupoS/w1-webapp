import "./styles.css";

const addCommentButton = document.getElementById("add-comment");
const commentList = document.getElementById("comments");
const removeCommentsButton = document.getElementById("remove-comments");

addCommentButton.addEventListener("click", function () {
  var addedComment = document.getElementById("comment-field").value;
  let newParagraph = document.createElement("li");
  newParagraph.innerHTML = addedComment;
  commentList.appendChild(newParagraph);
  console.log("Comment added");
});

removeCommentsButton.addEventListener("click", function () {
  const removingChildrenConfirmation = window.confirm("Are You sure????");
  if (removingChildrenConfirmation === true) {
    while (commentList.childElementCount > 0) {
      commentList.removeChild(commentList.lastChild);
    }
    console.log("comment removed");
  } else {
    console.log("Comments not removed");
  }
});
