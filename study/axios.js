/*
  axios
*/
axios
  .get("https://api.github.com/users/daniloras")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (reject) {
    console.warn(reject);
  });
