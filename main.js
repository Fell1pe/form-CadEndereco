'use strict'; //ativa o modo restrito 
// codigo para consumo de API da via cep
//https://viacep.com.br/


// LIMPAR CONSULTA DO FORM JA REALIZADO

const limparFormlario = () =>{
    document.getElementById('Rua').value = '';
    document.getElementById('Cidade').value = '';
    document.getElementById('Bairro').value = '';
    document.getElementById('Estado').value = '';
} 

// Verifica se o CEP é valido
// faz uma expreção regular para verificar se apenas foram digitados números
const eNumero = (Numero) => /^[0-9]+$/.test(Numero);
// Verifica o tamanho do cep 
// Cria um const puxando o id de cep e limitando seu tamanho a oito caractéres
const cepValido = (cep) => cep.lengt == 8 && eNumero(cep);

//Função para preencher campos relacionados ao CEP
const preencherFormulario = (endereco) =>{
    document.getElementById('Rua').value = endereco.logradouro;
    //coloca o valor de logradouro da API dentro do campo Rua do formulário
    document.getElementById('Bairro').value = endereco.bairro;
    //coloca o valor de Bairro da API dentro do campo Bairro do formulário
    document.getElementById('Cidade').value = endereco.localidade;
    //coloca o valor de localidade da API dentro do campo Cidade do formulário
    document.getElementById('Estado').value = endereco.uf;
    //coloca o valor de uf da API dentro do campo Estado do formulário
}