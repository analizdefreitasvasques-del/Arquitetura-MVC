import { EquipamentoModel } from "./EquipamentoModel.js";
export class EquipamentoController {

    static processarEntradaEquipamento(tagPatrimonio, tipoEquipamento, capacidadeRam){
        try{
        const ativo = EquipamentoModel.registrarAtivo(
        tagPatrimonio,
        tipoEquipamento,
        capacidadeRam
      );

      return {
        status: 201,
        mensagem: 'Equipamento cadastrado com sucesso.',
        dados: ativo
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

        
        
    

