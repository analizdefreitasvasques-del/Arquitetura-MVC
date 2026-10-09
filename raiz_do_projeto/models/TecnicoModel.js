
class TecnicoModel {
  
  static #equipe = [];

  static #TURNOS_VALIDOS = ["Manhã", "Tarde", "Noite"];

  constructor(nomeCompleto, credencialAcesso, turnoTrabalho) {
    this.nomeCompleto = nomeCompleto;
    this.credencialAcesso = credencialAcesso;
    this.turnoTrabalho = turnoTrabalho;
  }

  
  static contratarTecnico(nomeCompleto, credencialAcesso, turnoTrabalho) {
    if (nomeCompleto === undefined || nomeCompleto === null || String(nomeCompleto).trim() === "") {
      throw new Error("O nome completo não pode ficar vazio.");
    }

    
    if (credencialAcesso === undefined || credencialAcesso === null || String(credencialAcesso).trim() === "") {
      throw new Error("A Credencial de Acesso não pode ficar vazia.");
    }

    
    const turno = String(turnoTrabalho).trim();
    if (!TecnicoModel.#TURNOS_VALIDOS.includes(turno)) {
      throw new Error(
        `Turno inválido ("${turno}"). Turnos aceitos: ${TecnicoModel.#TURNOS_VALIDOS.join(", ")}.`
      );
    }

    const novo = new TecnicoModel(String(nomeCompleto).trim(), String(credencialAcesso).trim(), turno);
    TecnicoModel.#equipe.push(novo);
    return novo;
  }

  static listarEquipe() {
    return TecnicoModel.#equipe.map((t) => ({ ...t }));
  }
}

module.exports = TecnicoModel;
//

