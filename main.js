'use strict'; //ativa o modo restrito 
// codigo para consumo de API da via cep
//https://viacep.com.br/


// LIMPAR CONSULTA DO FORM JA REALIZADO

const limparFormlario = () =>{
    document.getElementById('rua').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('estado').value = '';
} 

//Função para preencher campos relacionados ao CEP
const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    //coloca o valor de logradouro da API dentro do campo Rua do formulário
    document.getElementById('bairro').value = endereco.bairro;
    //coloca o valor de Bairro da API dentro do campo Bairro do formulário
    document.getElementById('cidade').value = endereco.localidade;
    //coloca o valor de localidade da API dentro do campo Cidade do formulário
    document.getElementById('estado').value = endereco.uf;
    //coloca o valor de uf da API dentro do campo Estado do formulário
}

// Verifica se o CEP é valido
// faz uma expreção regular para verificar se apenas foram digitados números
const eNumero = (numero) => /^[0-9]+$/.test(numero);
// Verifica o tamanho do cep 
// Cria um const puxando o id de cep e limitando seu tamanho a oito caractéres
const cepValido = (cep) => cep.length == 8 && eNumero(cep);


const pesquisarCep =async() => {
    limparFormlario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.json();

    if(addres.hasOwnProperty('erro')){
        alert('CEP não encontado')  
    }
    else{
        preencherFormulario(addres);
    }
}else{
        alert('CEP incorreto')
    }
    } 
// Executa a ação de preenchimento do formulário ao deixar o campo CEP
document.getElementById('cep').addEventListener('focusout', pesquisarCep);
