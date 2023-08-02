document.getElementById("generate-btn").addEventListener("click", function () {
  const textInput = document.getElementById("text-input").value;

  if (!textInput) {
      alert("Please enter some text or URL.");
      return;
  }

  const qrcodeDiv = document.getElementById("qrcode");
  qrcodeDiv.innerHTML = "";

  const qrcode = new QRCode(qrcodeDiv, {
      text: textInput,
      width: 256,
      height: 256,
  });
});
