document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.getElementById("contact-btn");

  //EVENT OPEN FORM
  contactBtn.addEventListener("click", () => {
    document.getElementById("form").classList.add("show");
    document.querySelector("body").classList.add("no-scroll");

    //EVENT CLOSE FORM
    document.getElementById("icon-close").addEventListener("click", () => {
      document.getElementById("form").classList.remove("show");
      document.querySelector("body").classList.remove("no-scroll");
    });

    //EVENT SUBMIT FORM
    document.getElementById("contact-form").addEventListener("submit", async (event) => {
      // event.preventDefault();

      const data = {
        firstname: document.getElementById("first-name").value,
        lastname: document.getElementById("last-name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      //railway server deployment
      //
      //Bypassing the backend call as the server is no longer deployed
      //const response = await axios.post("https://brandao-tripadvisor.up.railway.app/form", data);

      //Ngrok local server with distant acces
      // const response = await axios.post("https://4b68-62-34-15-7.ngrok.io/form", data);

      //server local without distant acces
      // const response = await axios.post("http://localhost:3000/form", data);

      if (response.data.error === undefined) {
        document.getElementById("submit-btn").value = "Bien envoyé 👍";
      } else {
        document.getElementById("submit-btn").value = "Erreur ❌";
      }
    });
  });
});
