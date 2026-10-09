export class TecnicoModel {
    #credencial 
    constructor(nome, credencial, turno) {
        this.nome = nome;
        this.credencial = credencial;
        this.turno = turno;
    }

    get credencial() { return this.#credencial}


    verificarCredencial(espaco) {
         if( !espaco || espaco.trim() === ""){
            throw new Error("ERR_ESPAÇO_VAZIO");
    }
    this.#credencial = espaco;
}
    
    verificarTurno(turno) {
        if(turno !== Manhã || turno !== Tarde || turno !== Noite) {
            throw new Error("[BLOQUEIO] ERR_OPCAO_INVÁLIDA");
        }

    }
}