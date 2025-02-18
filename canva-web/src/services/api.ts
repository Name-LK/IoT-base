import { DailyTemperature } from '../types';

const API_BASE_URL = 'http://localhost:3000'; // Substitua pela URL base da sua API

export const api = {
  // Busca dados do mês inteiro
  async fetchMonthlyData(): Promise<DailyTemperature[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/temperatures/monthly`);
      if (!response.ok) {
        throw new Error('Falha ao carregar dados mensais');
      }
      const data = await response.json();
      return data.map((day: any) => ({
        date: new Date(day.date),
        hourlyData: day.hourlyTemperatures.map((hour: any) => ({
          hour: hour.hour,
          temperature: hour.temperature,
        })),
        average: Number((day.hourlyTemperatures.reduce(
          (sum: number, hour: any) => sum + hour.temperature, 0
        ) / day.hourlyTemperatures.length).toFixed(1))
      }));
    } catch (error) {
      console.error('Erro ao buscar dados mensais:', error);
      throw error;
    }
  },

  // Busca dados de um dia específico
  async fetchDailyData(date: string): Promise<DailyTemperature> {
    try {
      const response = await fetch(`${API_BASE_URL}/temperatures/daily/${date}`);
      if (!response.ok) {
        throw new Error('Falha ao carregar dados diários');
      }
      const data = await response.json();
      return {
        date: new Date(data.date),
        hourlyData: data.hourlyTemperatures.map((hour: any) => ({
          hour: hour.hour,
          temperature: hour.temperature,
        })),
        average: Number((data.hourlyTemperatures.reduce(
          (sum: number, hour: any) => sum + hour.temperature, 0
        ) / data.hourlyTemperatures.length).toFixed(1))
      };
    } catch (error) {
      console.error('Erro ao buscar dados diários:', error);
      throw error;
    }
  }
};