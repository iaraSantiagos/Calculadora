# 🧮 Projeto Calculadora: Testes Unitários com Vitest

Este projeto implementa uma calculadora matemática básica estruturada em *TypeScript* e validada com testes unitários automatizados utilizando o framework *Vitest*.

---

## 🛠️ Funcionalidades (src/calculadora.ts)

O arquivo de produção contém as quatro operações matemáticas fundamentais strongly typed (fortemente tipadas) e possui tratamento robusto para operações inválidas.

* *Soma (soma):* Recebe dois números e retorna a soma deles.
* *Subtração (subtracao):* Recebe dois números e retorna a diferença.
* *Multiplicação (multiplicacao):* Recebe dois números e retorna o produto.
* *Divisão (divisao):* Recebe dois números e retorna o quociente. Caso o divisor seja 0, a função interrompe a execução disparando uma exceção (Error) para evitar retornos inconsistentes como Infinity.

---

## 📐 Estrutura do Código e Validações (src/calculadora.test.ts)

A suite de testes está dividida em blocos lógicos (describe) cobrindo *7 cenários de teste* estruturados:

1. *Soma:* Valida se dois inteiros são somados corretamente.
2. *Subtração:* Garante o cálculo exato da diferença de valores.
3. *Multiplicação:* 
   * Valida o produto de números positivos.
   * Certifica que qualquer multiplicação por zero resulta em zero.
4. *Divisão:* 
   * Valida divisões exatas.
   * Certifica o suporte a retornos decimais (ponto flutuante).
   * Valida com uma arrow function se a exceção "Divisão por zero não é permitida." é lançada corretamente.

---

## 📁 Estrutura de Arquivos

O projeto está organizado da seguinte forma no VS Code:

text
Promise/
│
├── src/
│   ├── calculadora.ts        <-- Funções com as regras de negócio
│   └── calculadora.test.ts   <-- Cenários de testes unitários (Vitest)
│
├── README.md                 <-- Documentação do projeto (Este arquivo)
├── package.json              <-- Dependências (Vitest, TypeScript) e scripts
└── tsconfig.json             <-- Configurações do compilador TypeScript


---

## 🚀 Como Executar o Projeto

Siga os passos abaixo no terminal do seu VS Code para rodar os testes:

### 1. Instalar as dependências
Caso ainda não tenha instalado os pacotes mapeados no package.json, execute:
bash
npm install


### 2. Executar os Testes Unitários
Para rodar a suite de testes no modo contínuo (Watch Mode), digite:
bash
npm test


### 3. Executar em Modo Único (CI)
Se quiser rodar os testes apenas uma vez e fechar o terminal (ideal para esteiras de automação):
bash
npx vitest run