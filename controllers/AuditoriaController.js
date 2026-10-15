const EquipamentoModel = require("../models/EquipamentoModel");
const TecnicoModel = require("../models/TecnicoMode");

class AuditoriaController {
  static gerarRelatorioGeral() {
    const equipamentos = EquipamentoModel.listarInventario();
    const tecnicos = TecnicoModel.listarEquipe();

    return {
      status: 200,
      mensagem: "Relatório de Auditoria Geral gerado com sucesso.",
      geradoEm: new Date().toLocaleString("pt-BR"),
      resumo: {
        totalEquipamentos: equipamentos.length,
        totalTecnicos: tecnicos.length,
        totalGeralOperacao: equipamentos.length + tecnicos.length,
      },
      equipamentos,
      tecnicos,
    };
  }
}

module.exports = AuditoriaController;
