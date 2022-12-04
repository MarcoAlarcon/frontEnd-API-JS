async function buscaEndereco (cep){

    var msgErro = document.getElementById("erro")
    msgErro.innerHTML = ""
    try{
        const constultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var constultaCEPConvertida = await constultaCEP.json()
        if (constultaCEPConvertida.erro){
            throw Error("CEP não existente!")
        }

        var cidade = document.getElementById("cidade")
        var logradouro = document.getElementById("endereco")
        var estado = document.getElementById("estado")
        var bairro = document.getElementById("bairro")

        cidade.value = constultaCEPConvertida.localidade
        logradouro.value = constultaCEPConvertida.logradouro
        estado.value = constultaCEPConvertida.uf
        bairro.value = constultaCEPConvertida.bairro

        console.log(constultaCEPConvertida)
        return constultaCEPConvertida
    } catch (erro) {
        msgErro.innerHTML = `<p>CEP inválido. Tente novamente! </p>`
        console.log(erro) 
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", ()=> buscaEndereco(cep.value))