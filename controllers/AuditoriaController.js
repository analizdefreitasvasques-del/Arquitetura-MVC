const EquipamentoModel = require('../models/EquipamentoModel');
const TecnicoModel = require('../models/TecnicoModel');


class AuditoriaController {
  static gerarRelatorioGeral() {
    const equipamentos = EquipamentoModel.listarInventario();
    const tecnicos = TecnicoModel.listarEquipe();

    return {
      status: 200,
      titulo: 'Relatório de Auditoria Geral - TechPrime Infraestrutura',
      geradoEm: new Date().toLocaleString('pt-BR'),
      totais: {
        equipamentos: equipamentos.length,
        tecnicos: tecnicos.length,
        operacao: equipamentos.length + tecnicos.length,
      },
      equipamentos,
      tecnicos,
    };
  }
}

module.exports = AuditoriaController;
