import { addDays, setHours, startOfMonth } from 'date-fns';
import { DailyTemperature, HourlyTemperature } from './types';

// Função para carregar dados de uma API ou arquivo
export const loadCustomData = (data: {
  date: string;
  hourlyTemperatures: { hour: number; temperature: number; }[];
}[]): DailyTemperature[] => {
  return data.map(dayData => ({
    date: new Date(dayData.date),
    hourlyData: dayData.hourlyTemperatures,
    average: Number((dayData.hourlyTemperatures.reduce(
      (sum, hour) => sum + hour.temperature, 0
    ) / dayData.hourlyTemperatures.length).toFixed(1))
  }));
};

// Exemplo de como seus dados devem ser estruturados
const exampleCustomData = [
  {
    date: "2024-02-01",
    hourlyTemperatures: [
      { hour: 0, temperature: 22.5 },
      { hour: 1, temperature: 22.0 },
    ]
  },
  // ... mais dias
];

// Generate random temperature between min and max
const randomTemp = (min: number, max: number) => 
  Math.round((Math.random() * (max - min) + min) * 10) / 10;

// Generate hourly data for a single day
const generateHourlyData = (baseTemp: number): HourlyTemperature[] => {
  return Array.from({ length: 24 }, (_, hour) => ({
    hour,
    temperature: randomTemp(baseTemp - 3, baseTemp + 3),
  }));
};

// Generate one month of temperature data
export const generateMonthData = (): DailyTemperature[] => {
  const startDate = startOfMonth(new Date());
  
  return Array.from({ length: 30 }, (_, index) => {
    const date = addDays(startDate, index);
    const baseTemp = randomTemp(20, 30);
    const hourlyData = generateHourlyData(baseTemp);
    
    return {
      date,
      average: Number((hourlyData.reduce((sum, hour) => sum + hour.temperature, 0) / 24).toFixed(1)),
      hourlyData,
    };
  });
};