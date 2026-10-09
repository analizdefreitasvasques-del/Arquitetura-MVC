export class EquipamentoModel {
#tagPatrimonio
constructor(tagPatrimonio, tipoEquipamento, memoriaRam) {
 this.#tagPatrimonio = tagPatrimonio;
this.equipamento = tipoEquipamento;
this.memoria = memoriaRam;

}

get tagPatrimonio() {return this.#tagPatrimonio};

    verificarTag(vazio) {
        if( !vazio || vazio.trim() === ""){
            throw new Error("ERR_ESPAÇO_VAZIO");
    }
     this.#tagPatrimonio = vazio;
}

    verificarRam(quantidade){
        if( quantidade <8){
            throw new Error("[BLOQUEIO]ERR_QUANTIDADE_INVÁLIDA");
        }
    }
}

// O TIPO DE EQUIPAMENTO PEGA NO INDEX