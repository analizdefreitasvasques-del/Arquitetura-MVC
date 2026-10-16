
class TecnicoModel {
 
  static #bancoTecnicos = [];

  static TURNOS_VALIDOS = ['Manhã', 'Tarde', 'Noite'];

  constructor(nomeCompleto, credencialAcesso, turnoTrabalho) {
    this.nomeCompleto = nomeCompleto;
    this.credencialAcesso = credencialAcesso;
    this.turnoTrabalho = turnoTrabalho;
  }

 
  contratarTecnico() {
    if (!this.nomeCompleto || String(this.nomeCompleto).trim() === '') {
      throw new Error('O Nome Completo não pode ficar vazio.');
    }

   
    if (!this.credencialAcesso || String(this.credencialAcesso).trim() === '') {
      throw new Error('A Credencial de Acesso não pode ficar vazia.');
    }

   
    if (!TecnicoModel.TURNOS_VALIDOS.includes(this.turnoTrabalho)) {
      throw new Error(
        `Turno inválido: "${this.turnoTrabalho}". Aceitos: ${TecnicoModel.TURNOS_VALIDOS.join(', ')}.`
      );
    }

    this.nomeCompleto = String(this.nomeCompleto).trim();
    this.credencialAcesso = String(this.credencialAcesso).trim();

    TecnicoModel.#bancoTecnicos.push({
      nomeCompleto: this.nomeCompleto,
      credencialAcesso: this.credencialAcesso,
      turnoTrabalho: this.turnoTrabalho,
    });

    return this;
  }

  
  static listarEquipe() {
    return TecnicoModel.#bancoTecnicos.map((t) => ({ ...t }));
  }
}

module.exports = TecnicoModel;
