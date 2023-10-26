/** Máscara para o campo de e-mail */

const emailInput = document.getElementById('email')
emailInput.addEventListener("input", function() {
    let value = this.value;
    value = value.replace(/\s/g, "") // Remova os espaços em branco
    this.value = value
})

console.log(emailInput)