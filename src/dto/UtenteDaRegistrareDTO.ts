export class UtenteDaRegistrareDTO {

    email: string;
    nome: string;
    cognome: string;
    password: string;
    nazionalita: string;
    dataDiNascita: Date;

    constructor(email: string, nome: string, cognome: string, password: string, nazionalita: string, dataDiNascita: Date) {

        this.email = email;
        this.nome = nome;
        this.cognome = cognome;
        this.password = password;
        this.nazionalita = nazionalita;
        this.dataDiNascita = dataDiNascita;

    }

}