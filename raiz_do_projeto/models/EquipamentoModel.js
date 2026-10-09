export class EquipamentoModel {
#tagPatrimonio
constructor(tagPatrimonio, tipoEquipamento, capacidadeRam) {
 this.#tagPatrimonio = tagPatrimonio;
this.equipamento = tipoEquipamento;
this.memoria = capacidadeRam;

}

get tagPatrimonio() {return this.#tagPatrimonio};

    registrarAtivo(erros) {
        if( !erros || erros.trim() === ""){
            throw new Error("ERR_ESPAÇO_VAZIO");
    }
     this.#tagPatrimonio = erros;

           if(erros <8){
            throw new Error("[BLOQUEIO]ERR_QUANTIDADE_INVÁLIDA");
        }
    }

    
}
// listarInventario?
// O TIPO DE EQUIPAMENTO PEGA NO INDEX