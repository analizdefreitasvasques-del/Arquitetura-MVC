
class EquipamentoModel {
 
  static #bancoEquipamentos = [];

  static TIPOS_VALIDOS = ['Desktop', 'Notebook', 'Servidor'];
  static RAM_MINIMA_GB = 8;

  constructor(tagPatrimonio, tipoEquipamento, capacidadeRam) {
    this.tagPatrimonio = tagPatrimonio;
    this.tipoEquipamento = tipoEquipamento;
    this.capacidadeRam = capacidadeRam;
  }

  registrarAtivo() {
  
    if (!this.tagPatrimonio || String(this.tagPatrimonio).trim() === '') {
      throw new Error('A Tag de Patrimônio não pode ficar vazia.');
    }

    const tipo = EquipamentoModel.TIPOS_VALIDOS.find(
      (t) => t.toLowerCase() === String(this.tipoEquipamento).trim().toLowerCase()
    );
    if (!tipo) {
      throw new Error(
        `Tipo de equipamento inválido. Use: ${EquipamentoModel.TIPOS_VALIDOS.join(', ')}.`
      );
    }

    const ram = Number(this.capacidadeRam);
    if (!Number.isFinite(ram)) {
      throw new Error('A capacidade de RAM deve ser um número (em GB).');
    }

    
    if (ram < EquipamentoModel.RAM_MINIMA_GB) {
      throw new Error(
        `Equipamento defasado: mínimo de ${EquipamentoModel.RAM_MINIMA_GB}GB de RAM (informado: ${ram}GB).`
      );
    }

    this.tagPatrimonio = String(this.tagPatrimonio).trim();
    this.tipoEquipamento = tipo;
    this.capacidadeRam = ram;

    EquipamentoModel.#bancoEquipamentos.push({
      tagPatrimonio: this.tagPatrimonio,
      tipoEquipamento: this.tipoEquipamento,
      capacidadeRam: this.capacidadeRam,
    });

    return this;
  }


  static listarInventario() {
    return EquipamentoModel.#bancoEquipamentos.map((e) => ({ ...e }));
  }
}

module.exports = EquipamentoModel;
