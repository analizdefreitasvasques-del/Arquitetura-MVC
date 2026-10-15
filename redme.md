# TechPrime Infraestrutura - Sistema de Gestão MVC

> Sistema centralizado via terminal (CLI) para a gestão de ativos de TI e recursos humanos da **TechPrime Infraestrutura**, desenvolvido em Node.js com arquitetura MVC.
> 
> 

---

## 💻 Sobre o Projeto

Este projeto consiste no núcleo *Back-End* de um sistema corporativo operado via linha de comandos. O seu objetivo principal é garantir o controlo centralizado e rigoroso de **Equipamentos de TI** e **Técnicos de Suporte**, aplicando regras de negócio e validações em tempo de execução através do padrão MVC (Model-View-Controller).

---

## 🎯 Funcionalidades e Regras de Negócio

### 🖥️ Módulo de Equipamentos

* **Registo de Ativos**: Adição de novos equipamentos especificando Tag de Património, Tipo (Desktop, Notebook ou Servidor) e Capacidade de RAM em GB.


* **Validação de Património**: A Tag de Património é obrigatória e nunca pode ficar vazia.


* **Bloqueio de Equipamentos Defasados**: O sistema bloqueia automaticamente qualquer tentativa de registo de máquinas com menos de 8GB de RAM.


* **Consulta de Inventário**: Listagem completa de todos os ativos no repositório.



### 👨‍💻 Módulo de Técnicos de Suporte

* **Admissão de Pessoal**: Registo de técnicos com Nome Completo, Credencial de Acesso (crachá numérico) e Turno de Trabalho.


* **Chave de Segurança**: A Credencial de Acesso é obrigatória e não pode ser deixada em branco.


* **Validação de Turno**: Aceitação exclusiva dos turnos oficiais `"Manhã"`, `"Tarde"` ou `"Noite"`.


* **Consulta de Equipa**: Listagem detalhada dos profissionais de suporte ativos.



### 📊 Módulo de Auditoria Geral

* **Relatório Unificado**: Orquestração superior que cruza os dados do inventário de equipamentos e da equipa de técnicos num único relatório consolidado de operações.



---

## 📂 Estrutura do Projeto

A estrutura de pastas e ficheiros do projeto encontra-se organizada da seguinte forma:

```text
.
├── models/
│   ├── EquipamentoModel.js   # Regras de negócio, exceções (RAM/Tag) e repositório de equipamentos[cite: 2]
│   └── TecnicoModel.js       # Regras de negócio, exceções (Credencial/Turno) e repositório de técnicos[cite: 3]
├── controllers/
│   ├── EquipamentoController.js # Trata entradas/saídas e formatação do inventário[cite: 2, 3]
│   ├── TecnicoController.js     # Trata admissões, erros de digitação e resposta JSON[cite: 3]
│   └── AuditoriaController.js   # Maestro superior para relatório unificado de operações[cite: 3]
└── index.js                   # Ponto de entrada, leitor readline e menu interativo em loop[cite: 3]

```

---

## 🛠️ Tecnologias Utilizadas

* **Linguagem**: JavaScript / Node.js


* **Módulo Native**: `readline` (interação com o utilizador via terminal)


* **Arquitetura**: MVC (Model-View-Controller)



---

## 🚀 Como Executar o Projeto

### Pré-requisitos

* **Node.js** instalado na sua máquina.



### Passos

1. **Clonar o repositório**:
```bash
git clone https://github.com/seu-usuario/techprime-infraestrutura.git
cd techprime-infraestrutura

```


2. **Iniciar a aplicação**:
```bash
node index.js

```



---

## 📑 Menu Interativo (CLI)

Ao executar o ficheiro `index.js`, o sistema apresenta o seguinte menu com 6 opções:

* **1 - Cadastrar Equipamento**: Recolhe os dados e envia para o `EquipamentoController`.


* **2 - Listar Equipamentos**: Exibe os equipamentos registados.


* **3 - Cadastrar Técnico**: Recolhe os dados do funcionário e envia para o `TecnicoController`.


* **4 - Listar Técnicos**: Exibe a equipa de suporte.


* **5 - Relatório de Auditoria Geral**: Executa o `AuditoriaController` para gerar o relatório consolidado.


* **0 - Sair do Sistema**: Encerra a execução da aplicação no terminal.



---

## 🧪 Checklist de Homologação (Testes de Qualidade)

Antes do envio final, a aplicação deve responder com êxito à seguinte bateria de testes:

* [ ] **Inserção Limpa (Equipamento)**: Cadastrar "Desktop", Tag "PC-001" e 16GB de RAM com mensagem de sucesso formatada (Status 201).


* [ ] **Segurança de Património**: Tentar cadastrar máquina com menos de 8GB de RAM e validar a captura da exceção no `catch` sem descolapsar/encerrar o Node.js.


* [ ] **Inserção Limpa (Técnico)**: Cadastrar o técnico "João", Credencial "7788" e Turno "Noite" com sucesso.


* [ ] **Segurança de RH**: Tentar cadastrar a técnica "Maria" com o turno "Madrugada", garantindo que o `TecnicoModel` dispara o erro e o `TecnicoController` trata a mensagem.


* [ ] **Auditoria Máxima**: Selecionar a opção `5` e verificar a impressão da vista consolidada unindo os dados seguros de ativos e pessoal.