function mascara(i) {

    var v = i.value;

    if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
        i.value = v.substring(0, v.length - 1);
        return;
    }

    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";

}

function validaForm() {
    var valor = document.getElementById("cpf").value;
    if (document.getElementById("nome").value == "") {
        alert('Por favor, preencha o campo nome');
        document.getElementById("nome").focus();
        return false
    } else if (document.getElementById("sobrenome").value == "") {
        alert('Por favor, preencha o campo sobrenome');
        document.getElementById("sobrenome").focus();
        return false
    } else if (document.getElementById("email").value == "" || document.getElementById("email").value.indexOf('@') == -1
        || document.getElementById("email").value.indexOf('.') == -1) {
        alert('Por favor, preencha o campo email corretamente');
        document.getElementById("email").focus();
        return false
    } else if (document.getElementById("cpf").value == "" || valor.length < 14) {
        alert('Por favor, preencha o campo CPF corretamente');
        document.getElementById("cpf").focus();
        return false
    } else if (document.getElementById("dataDeNascimento").value == "") {
        alert('Por favor, preencha o campo data de nascimento');
        document.getElementById("dataDeNascimento").focus();
        return false
    } else if (document.getElementById("motivacao").value == "") {
        alert('Por favor, preencha o campo de texto');
        document.getElementById("motivacao").focus();
        return false
    } else {
        alert('Formulário enviado!');
        window.location.href = "index.html";
    }
}