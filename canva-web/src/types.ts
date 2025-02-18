export interface DailyTemperature {
  date: Date;
  average: number;
  hourlyData: HourlyTemperature[];
}

export interface HourlyTemperature {
  hour: number;
  temperature: number;
}