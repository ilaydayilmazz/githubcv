axios.get("https://api.github.com/users/octocat").then((response) => {
  console.log(response.data);
});
