function showAlert() {
  alert("Fitur jual barang akan segera tersedia di nihbeli!");
}

const productButtons = document.querySelectorAll(".product-card button");

productButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Produk berhasil dipilih! Lanjutkan ke halaman checkout.");
  });
});