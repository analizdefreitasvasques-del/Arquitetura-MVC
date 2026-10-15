import { EquipamentoModel } from "./EquipamentoModel.js";
import { TecnicoModel} from "./TecnicoModel.js";

    export class AuditoriaController {

  static gerarRelatorioGeral() {
    try {
      const equipamentos = new EquipamentoModel();
      equipamentos.listarInventario();

      const tecnicos = new TecnicoModel();
      tecnicos.listarEquipe();

      return {
        status: 200,
        sucesso: true,
        titulo: 'Relatório de Auditoria Geral',
        geradoEm: new Date().toLocaleString('pt-BR'),
        totais: {
          equipamentos: equipamentos.length,
          tecnicos: tecnicos.length,
          operacao: equipamentos.length + tecnicos.length
        },
        equipamentos,
        tecnicos
      }
    } catch (erro) {
      return {
        status: 500,
        sucesso: false,
        mensagem: 'Falha ao gerar o relatório de auditoria.',
        erro: erro.message
      }
    }
  }
}