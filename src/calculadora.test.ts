import { describe, test, expect } from 'vitest';
// Importa todas as 4 funções do arquivo de produção da mesma pasta
import { soma, subtracao, multiplicacao, divisao } from './calculadora'; 

describe('Testes Unitários - Calculadora Completa', () => {

  // --- TESTES DE SOMA ---
  describe('Operação de Soma', () => {
    test('Deve somar dois números corretamente', () => {
      const resultado = soma(5, 7);
      expect(resultado).toBe(12);
    });
  });

  // --- TESTES DE SUBTRAÇÃO ---
  describe('Operação de Subtração', () => {
    test('Deve subtrair dois números corretamente', () => {
      const resultado = subtracao(10, 4);
      expect(resultado).toBe(6);
    });
  });

  // --- TESTES DE MULTIPLICAÇÃO ---
  describe('Operação de Multiplicação', () => {
    test('Deve multiplicar dois números positivos corretamente', () => {
      expect(multiplicacao(4, 3)).toBe(12);
    });

    test('Deve retornar zero ao multiplicar qualquer número por zero', () => {
      expect(multiplicacao(7, 0)).toBe(0);
    });
  });

  // --- TESTES DE DIVISÃO ---
  describe('Operação de Divisão', () => {
    test('Deve dividir dois números corretamente', () => {
      expect(divisao(10, 2)).toBe(5);
    });

    test('Deve permitir resultados decimais', () => {
      expect(divisao(5, 2)).toBe(2.5);
    });

    test('Deve lançar um erro ao tentar dividir por zero', () => {
      expect(() => divisao(10, 0)).toThrow("Divisão por zero não é permitida.");
    });
  });

});