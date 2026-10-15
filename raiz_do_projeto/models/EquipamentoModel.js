export class EquipamentoModel {
#tagPatrimonio

static #ativos=[];
static #TIPOS_VALIDOS = ['Desktop', 'Notebook', 'Servidor'];
static #RAM_MINIMA_GB = 8;


constructor(tagPatrimonio, tipoEquipamento, capacidadeRam) {
 this.#tagPatrimonio = tagPatrimonio;
this.equipamento = tipoEquipamento;
this.memoria = capacidadeRam;

}
   
get tagPatrimonio() {return this.#tagPatrimonio};

    registrarAtivo(tagPatrimonio, tipoEquipamento, capacidadeRam) {
        if( !tagPatrimonio === 'number' || tagPatrimonio.trim() === ""){
            throw new Error("ERR_ESPAÇO_VAZIO");
        }
     if(tagPatrimonio === 'undefined' || tagPatrimonio === null || String(tagPatrimonio).trim() === ""){
            throw new Error("A tag de Patrimônio não pode ficar vazia");
    }
     this.#tagPatrimonio = tagPatrimonio;

           if(!tipoEquipamento === 'string' || tipoEquipamento.trim() === ""){
            throw new Error("[BLOQUEIO]ERR_QUANTIDADE_INVÁLIDA");
        }
     const tipoValido = EquipamentoModel.#TIPOS_VALIDOS.find((t)=> t.toLowerCase() === String(tipoEquipamento).trim().toLowerCase());
           if(!tipoValido){
            throw new Error(`Tipo de equipamento inválido. Use: ${EquipamentoModel.#TIPOS_VALIDOS.join(', ')}`);
      }

        if(!capacidadeRam <8 || !capacidadeRam === 'number') {
            throw new Error("ERR_CAPACIDADE_INVÁLIDA");
        }

        const ram = Number(capacidadeRam);
        if(Number.isNaN(ram)) {
            throw new Error("A capacidade de RAM deve ser um número.");
    }
    if(ram < EquipamentoModel.#RAM_MINIMA_GB) {
        throw new Error(`Equipamento defasado: mínimo de ${EquipamentoModel.#RAM_MINIMA_GB}GB de RAM (informado: ${ram}GB).`);
    }

     const novo = new EquipamentoModel(String(tagPatrimonio).trim(), tipoValido, ram);
    EquipamentoModel.#ativos.push(novo);
    return novo;
} 

    static listarInventario(){
    return EquipamentoModel.#ativos.map((a) => ({...a}));
    } 
}  

   