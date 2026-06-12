function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  alert(`Terima kasih, ${name}! Pesan kamu sudah terkirim ke tim nihbeli!.`);

  document.querySelector(".contact-form").reset();
}

const addButtons = document.querySelectorAll(".product-bottom button");

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Produk berhasil ditambahkan ke keranjang!");
  });
});