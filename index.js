function postComment() {
  var commenter = document.getElementById('commenter').value;
  var comment = document.getElementById('comment').value;

  var commentTemplate = document.getElementById('comment-template');;
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById('comments');
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  commentsDiv.innerHTML += templateHTML;
}
