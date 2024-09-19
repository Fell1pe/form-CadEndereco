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
const eNumero = (Numero) => /^[0-9]+$/.test(Numero);
// Verifica o tamanho do cep 
const cepValido = (cep) => cep.lengt == 8 && eNumero(cep);