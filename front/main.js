//Valida o cep e já preenche os campos com os dados

'use strict';
const limparFormulario = (endereco) => {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
}

const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
}
const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async() => {
    limparFormulario();
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = 'CEP não encontrado';
        } else {
            preencherFormulario(endereco);
        
        }

    }else{
        document.getElementById('endereco').value = 'CEP incorreto';
    }
}

document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);



//Conexão front com back

const Formulario =  () => {

    let form = {
        nome: document.getElementById('nome').value,
        cargo: document.getElementById('cargo').value,
        dia: document.getElementById('dia').value,
        estadocivil: document.getElementById('estadocivil').value,
        inputgenero: document.getElementById('inputgenero').value,
        cep: document.getElementById('cep').value,
        endereco: document.getElementById('endereco').value,
        bairro:document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        celular:document.getElementById('celular').value,
        email:document.getElementById('email').value,
        identidade:document.getElementById('identidade').value,
        cpf:document.getElementById('cpf').value,
        carro:document.getElementById('carro').value,
        habilitacao:document.getElementById('habilitacao').value,
    };
      
    console.log(form);
    return form;

};

const criarCandidato = async (candidato) => {
    const usuario = await fetch('http://localhost:5000/register', {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(Formulario())

    });
    if (usuario.status === 200){
        alert('Seu cadastro foi realizado com sucesso.');
	}
	else if (usuario.status === 500) {
    alert ('Puxa, já temos essas informações aqui.');
    }
    else {
        alert('Seu cadastro não pode ser realizado.')
    }
}

    function check_form() {
        var valid = true;
        if (!validacaoCPF() || !buscaCEP()) {valid = false; }

        if (!valid) {
            alert('Por gentileza, preencha todos os campos corretamente.');
            return false;

        } else {
            return true;
        }
    }

   
