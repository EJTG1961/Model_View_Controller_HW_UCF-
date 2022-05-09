const newFormHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/post`, {
    // Create the functionality to help create the buttons for your website.
    method: "post",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    alert("Account created! Logging you in.");
    document.location.replace("/dashboard");
  }
};
document
  .querySelector("#new-post-form")
  .addEventListener("submit", newFormHandler);
