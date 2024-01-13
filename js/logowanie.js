
    const usersDatabase = {
        "user1": "password1",
        "user2": "password2"
      };
  
      function checkLogin() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
  
        if (usersDatabase[username] && usersDatabase[username] === password) {

          alert("Zalogowano pomyślnie!");
          window.location.href = "welcome.html"; 
        } else {

          alert("Błąd logowania. Sprawdź poprawność danych.");
        }
      }