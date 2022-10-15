const form = document.querySelector(".login-button");
const log = document.querySelector(".login-title");
const log2 = document.querySelector(".form");

let var_input_name,
  var_input_prenom,
  var_input_nom,
  var_input_tel,
  var_input_panne;

function logSubmit(e) {
  e.preventDefault();
  fetch(
    `https://api.trello.com/1/cards/?idList=634b37c5f7e5d401d4c05098&key=cac0821690113ff0ceed24a1ab52f4f7&token=3d546e65dab9653b4f0efb01c3ec216a9f9aed1c45e9b1afa571910058448b01&name=${var_input_name}&desc=${`Le client ${
      "**" + var_input_prenom + "**"
    } ${
      "**" + var_input_nom + "**".toUpperCase()
    } au numéro de téléphone Indique ${
      "**" + var_input_tel + "**"
    } que son appareil est en panne. Voici sa description : ${
      "**" + var_input_panne + "**"
    }`}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    }
  );

  log.textContent = `Merci, à bientôt !`;
  log2.innerHTML = `
  <p class="msg-valide">Le message a été correctement envoyé</p>
  <p class="msg-valide">The message was successfully sent</p>`;
}

form.addEventListener("click", (e) => {
  logSubmit(e);
  document.querySelector(".login-container").style.width = "400px";
});

input_name.addEventListener("input", (e) => {
  console.log(e.target.value);
  var_input_name = e.target.value;
});

input_prenom.addEventListener("input", (e) => {
  console.log(e.target.value);
  var_input_prenom = e.target.value;
});

input_nom.addEventListener("input", (e) => {
  console.log(e.target.value);
  var_input_nom = e.target.value;
});

input_tel.addEventListener("input", (e) => {
  console.log(e.target.value);
  var_input_tel = e.target.value;
});

input_panne.addEventListener("input", (e) => {
  console.log(e.target.value);
  var_input_panne = e.target.value;
});
