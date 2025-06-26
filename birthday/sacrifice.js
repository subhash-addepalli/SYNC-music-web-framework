function sendMessage() {
  const userInput = document.getElementById("userInput").value;
  const encodedParts = ['+91', '9948', '761', '423']; // Parts of your number
  const phoneNumber = encodedParts.join('');
  const message = encodeURIComponent(userInput);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  alert("Don't Panic Your message will be opened in WhatsApp after 20 seconds and then click on the send icon in your existing whatsapp.");

  setTimeout(() => {
  window.location.href = whatsappLink; // Works better on mobile, avoids popup issues
}, 20000);// 20000 ms = 20 seconds
}
