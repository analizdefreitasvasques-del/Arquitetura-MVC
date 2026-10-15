const EquipamentoController = require("./controllers/EquipamentoController");
const TecnicoController = require("./controllers/TecnicoController");
const AuditoriaController = require("./controllers/AuditoriaController");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const linhas = rl[Symbol.asyncIterator]();

async function perguntar(texto) {
  process.stdout.write(texto);
  const { value, done } = await linhas.next();
  return done ? null : value;
}

function exibirMenu() {
  console.log("\n==========================================");
  console.log("   TECHPRIME INFRAESTRUTURA - GESTÃO TI");
  console.log("==========================================");
  console.log(" 1 - Cadastrar Equipamento");
  console.log(" 2 - Listar Equipamentos");
  console.log(" 3 - Cadastrar Técnico");
  console.log(" 4 - Listar Técnicos");
  console.log(" 5 - Relatório de Auditoria Geral");
  console.log(" 0 - Sair do Sistema");
  console.log("==========================================");
}

function exibirResposta(resposta) {
  console.log("\n--- RESPOSTA DO SISTEMA ---");
  console.log(JSON.stringify(resposta, null, 2));
}

async function main() {
  while (true) {
    exibirMenu();
    const opcao = await perguntar("Escolha uma opção: ");
    if (opcao === null) break; // entrada encerrada

    switch (opcao.trim()) {
      case "1": {
        const tag = await perguntar("Tag de Patrimônio: ");
        const tipo = await perguntar("Tipo (Desktop, Notebook ou Servidor): ");
        const ram = await perguntar("Memória RAM (GB): ");
        exibirResposta(EquipamentoController.processarEntradaEquipamento(tag, tipo, ram));
        break;
      }
      case "2":
        exibirResposta(EquipamentoController.consultarCatalogo());
        break;
      case "3": {
        const nome = await perguntar("Nome Completo: ");
        const credencial = await perguntar("Credencial de Acesso: ");
        const turno = await perguntar("Turno (Manhã, Tarde ou Noite): ");
        exibirResposta(TecnicoController.processarAdmissao(nome, credencial, turno));
        break;
      }
      case "4":
        exibirResposta(TecnicoController.consultarEquipe());
        break;
      case "5":
        exibirResposta(AuditoriaController.gerarRelatorioGeral());
        break;
      case "0":
        console.log("Encerrando o sistema. Até logo!");
        rl.close();
        return;
      default:
        console.log("Opção inválida! Escolha um número entre 0 e 5.");
    }
  }
  rl.close();
}

main();
//aninha diva fez