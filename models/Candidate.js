const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: {type: String, unique: false, required: true},
    cargo: {type: String, unique: false, required: true},
    dia: {type: String, unique: false, required: true},
    estadocivil: {type: String, unique: false, required: true},
    inputgenero: {type: String, unique: false, required: true},
    cep: {type: String, unique: false, required: true},
    endereco: {type: String, unique: false, required: true},
    bairro: {type: String, unique: false, required: true},
    cidade: {type: String, unique: false, required: true},
    celular: {type: String, unique: false, required: true},
    email: {type: String, unique: true, required: true},
    identidade: {type: String, unique: false, required: true},
    cpf: {type: String, unique: true, required: true},
    carro: {type: String, unique: false, required: true},
    habilitacao: {type: String, unique: false, required: true},
  }, {
     timestamps: true


});

module.exports = mongoose.model('Candidate', CandidateSchema);