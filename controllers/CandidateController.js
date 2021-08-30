const Candidate = require('./../controllers/CandidateController.js');

module.exports = {
    async register(req,res) {
        const {nome, cargo, dia, estadocivil, inputgenero, cep, endereco,bairro, cidade, celular, email, identidade, cpf, carro, habilitacao} = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.cargo = cargo;
        newCandidate.dia = dia;
        newCandidate.estadocivil = estadocivil;
        newCandidate.inputgenero = inputgenero;
        newCandidate.cep = cep;
        newCandidate.endereco = endereco;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.celular = celular;
        newCandidate.email = email;
        newCandidate.identidade = identidade;
        newCandidate.cpf = cpf;
        newCandidate.carro = carro;
        newCandidate.habilitacao = habilitacao;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send();
            }

            return res.status(200).send(savedCandidate);


        });


    },
    


};