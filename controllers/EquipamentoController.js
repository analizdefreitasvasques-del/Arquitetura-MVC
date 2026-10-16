const EquipamentoModel = require('../models/EquipamentoModel');

class EquipamentoController {
  static processarEntradaEquipamento(tagPatrimonio, tipoEquipamento, capacidadeRam) {
    try {
      const equipamento = new EquipamentoModel(tagPatrimonio, tipoEquipamento, capacidadeRam);
      equipamento.registrarAtivo();

      return {
        status: 201,
        mensagem: 'Equipamento cadastrado com sucesso!',
        dados: {
          tagPatrimonio: equipamento.tagPatrimonio,
          tipoEquipamento: equipamento.tipoEquipamento,
          capacidadeRam: `${equipamento.capacidadeRam}GB`,
        },
      };
    } catch (erro) {
      return {
        status: 400,
        mensagem: 'Falha ao cadastrar equipamento.',
        erro: erro.message,
      };
    }
  }

  static consultarCatalogo() {
    const inventario = EquipamentoModel.listarInventario();
    return {
      status: 200,
      total: inventario.length,
      dados: inventario,
    };
  }
}

module.exports = EquipamentoController;
