document
  .getElementById("btn-post-comment")
  .addEventListener("click", function () {
    const commentTextBox = document.getElementById("comment-text-box");
    const newComment = commentTextBox.value;
    const commentsContainer = document.getElementById("comments-container");
    const commentElement = document.createElement("p");
    commentElement.classList.add("comments");
    commentElement.innerText = newComment;

    commentsContainer.appendChild(commentElement);
    commentTextBox.value = "";
  });
