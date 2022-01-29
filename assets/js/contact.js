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
      event.preventDefault();

      const data = {
        firstname: document.getElementById("first-name").value,
        lastname: document.getElementById("last-name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };
      const response = await axios.post("https://brandao-tripadvisor.herokuapp.com/form", data);
      console.log(response.data);
      document.getElementById("submit-btn").value = "Bien envoyé 🚀";
    });
  });
});
