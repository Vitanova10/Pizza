emailjs.init("7A_O277GuTOPSHX56");
function send() {
   var date={
      nume: document.getElementById("nume").value,
      prenume: document.getElementById("prenume").value,
      email: document.getElementById("email").value,
      tema: document.getElementById("tema").value,
      mesaj: document.getElementById("mesaj").value
    };
     emailjs.send("service_vwxp3w5", "template_ud0mlsq", date)
     .then(function(raspuns) {
        alert("ваше письмо отправлено")
        document.getElementById("formular").reset();
     },
     function(error) {
       alert("ошибка при отправке")
     })
}