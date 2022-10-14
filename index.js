let str = "";

nameCARD.addEventListener("input", (e) => {
  console.log(e.target.value);
  str = e.target.value;
});

btntest.addEventListener("click", () => {
  fetch(
    `https://api.trello.com/1/cards/?idList=608ff372252b0d266c52af52&key=72cfd1a8946f44a8eb7466becb0276fe&token=94f8313353c0b9b31f09d17699491127e8125d4993a3b53880f0429c1ec66a27&name=${str}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then((response) => {
      console.log(`Response: ${response.status} ${response.statusText}`);
      return response.text();
    })
    .then((text) => console.log(text))
    .catch((err) => console.error(err));
});
