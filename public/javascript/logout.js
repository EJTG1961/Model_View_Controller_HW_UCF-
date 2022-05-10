function logout() {
  // log out the user
  // Create the functionality to help create the buttons for your website.
  fetch("/api/user/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  })
    .then(function () {
      document.location.replace("/");
    })
    .catch((err) => console.log(err));
} 
  
  document.querySelector('#logout-link').addEventListener('click', logout);
  