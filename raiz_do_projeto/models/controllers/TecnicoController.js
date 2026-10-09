
const TecnicoModel = require("../models/TecnicoModel");

class TecnicoController {
  static processarAdmissao(nomeCompleto, credencialAcesso, turnoTrabalho) {
    try {
      const tecnico = TecnicoModel.contratarTecnico(nomeCompleto, credencialAcesso, turnoTrabalho);
      return {
        status: 201,
        mensagem: "Técnico contratado com sucesso.",
        dados: tecnico,
      };
    } catch (erro) {
      return {
        status: 400,
        mensagem: "Falha ao contratar técnico.",
        erro: erro.message,
      };
    }
  }

  static consultarEquipe() {
    const equipe = TecnicoModel.listarEquipe();
    return {
      status: 200,
      mensagem: "Equipe de técnicos consultada.",
      total: equipe.length,
      dados: equipe,
    };
  }
}

module.exports = TecnicoController;
