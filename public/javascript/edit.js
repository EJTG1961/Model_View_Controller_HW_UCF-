const postId = document.querySelector('input[name="post-id"]').value;


  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;
//user edit title
  fetch("/api/post" + postId.value, {
    // Create the functionality to help create the buttons for your website.
    method: "put",
    body: JSON.stringify({
      title: titleEl.value,
      body: bodyEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  }).then(function () {
    document.location.replace("/dashboard");
  })
  .catch(err => console.log(err));


document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);
document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);
