function postComment() {
  var commenter = document.getElementById('commenter').value;
  var comment = document.getElementById('comment').value;

  var commentTemplate = '<div class="comment"><p><%= comment %></p><br/><p>Posted by: <span class="commenter"><%= commenter %></span></p></div>';
  var templateFn = _.template(commentTemplate);

  var commentsDiv = document.getElementById('comments');
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  commentsDiv.innerHTML = templateHTML;
}
