class SistemaDeVotacao {
    constructor() {
        this.eleitoresVotaram = {}; 
        this.votos = {}; 
    }

    vote(idEleitor, candidato) {
        if (this.eleitoresVotaram[idEleitor]) {
            console.log("Erro: Eleitor já votou.");
        } else {
            this.eleitoresVotaram[idEleitor] = true; 
            if (!this.votos[candidato]) {
                this.votos[candidato] = 0; 
            }
            this.votos[candidato]++; 
            console.log(`Voto registrado para ${candidato}!`);
        }
    }

    show_results() {
        console.log("Resultado da eleição:");
        for (let candidato in this.votos) {
            console.log(`${candidato}: ${this.votos[candidato]} votos`);
        }
    }
}

const sistema = new SistemaDeVotacao();

sistema.vote("123", "Alice");
sistema.vote("124", "Bob");
sistema.vote("123", "Bob");

sistema.show_results();














