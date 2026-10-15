export class EquipamentoModel {
#tagPatrimonio

constructor(tagPatrimonio, tipoEquipamento, capacidadeRam) {
 this.#tagPatrimonio = tagPatrimonio;
this.equipamento = tipoEquipamento;
this.memoria = capacidadeRam;

}

    static TIPOS_VALIDOS = ['Desktop', 'Notebook', 'Servidor'];
    static RAM_MINIMA_GB = 8;

get tagPatrimonio() {return this.#tagPatrimonio};

    registrarAtivo(tagPatrimonio, tipoEquipamento, capacidadeRam) {
        if( !tagPatrimonio === 'number' || tagPatrimonio.trim() === ""){
            throw new Error("ERR_ESPAÇO_VAZIO");
    }
     this.#tagPatrimonio = tagPatrimonio;

           if(!tipoEquipamento === 'string' || tipoEquipamento.trim() === ""){
            throw new Error("[BLOQUEIO]ERR_QUANTIDADE_INVÁLIDA");
        }

        if(!capacidadeRam <8 || !capacidadeRam === 'number') {
            throw new Error("ERR_CAPACIDADE_INVÁLIDA");
        }
    }

    static listarInventario(){
     const ativo = new EquipamentoModel(tagPatrimonio, tipoEquipamento, capacidadeRam);
    EquipamentoModel.push(ativo);
    return ativo;
    }
}