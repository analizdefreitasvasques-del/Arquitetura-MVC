const TecnicoModel = require('../models/TecnicoModel');

class TecnicoController {
  static processarAdmissao(nomeCompleto, credencialAcesso, turnoTrabalho) {
    try {
      const tecnico = new TecnicoModel(nomeCompleto, credencialAcesso, turnoTrabalho);
      tecnico.contratarTecnico();

      return {
        status: 201,
        mensagem: 'Técnico admitido com sucesso!',
        dados: {
          nomeCompleto: tecnico.nomeCompleto,
          credencialAcesso: tecnico.credencialAcesso,
          turnoTrabalho: tecnico.turnoTrabalho,
        },
      };
    } catch (erro) {
      return {
        status: 400,
        mensagem: 'Falha ao admitir técnico.',
        erro: erro.message,
      };
    }
  }

  static consultarEquipe() {
    const equipe = TecnicoModel.listarEquipe();
    return {
      status: 200,
      total: equipe.length,
      dados: equipe,
    };
  }
}

module.exports = TecnicoController;
