const scriptURL = 'https://script.google.com/macros/s/AKfycbzETkUHS-sFdfoEJOVaHQJjofaTOnG_EonkX1in4A9FtFiHAD9razP2EXUuxjY969GF/exec'

const form = document.forms['lp-data']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  //.then(response => alert("Terima Kasih" ))
  //.then(() => { window.location.reload(); })
  .catch(error => console.error('Masukan Data Kamu dulu yah!', error.message)) })


//function towa() {
  // window.location.href="https://api.whatsapp.com/send?phone=6281122332060&text=Halo%20Laidlunos,%20aku%20mau%20claim%20Discount%20Produk%20Simple%20Flek%20Bundle%20yah!"; }

   function towa() {
    var fname = document.forms['lp-data']['fname'].value;
    var wnumber = document.forms['lp-data']['wnumber'].value;

    if (fname === "" || wnumber === "") {
        alert("Mohon isi Nama & No Whatsapp Kamu.");
    } else {
        // Semua field telah diisi, maka arahkan pengguna ke WhatsApp
        var whatsappLink = "https://api.whatsapp.com/send?phone=6281122332060&text=Halo%20Laidlunos,%20aku%20mau%20claim%20Discount%20Produk%20Simple%20Flek%20Bundle%20yah!";
        window.location.href = whatsappLink;
    }
}
