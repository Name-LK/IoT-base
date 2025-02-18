import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { format } from 'date-fns';
import { DailyTemperature } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MonthlyChartProps {
  data: DailyTemperature[];
  onDayClick: (day: DailyTemperature) => void;
}

export const MonthlyChart: React.FC<MonthlyChartProps> = ({ data, onDayClick }) => {
  const chartData = {
    labels: data.map(day => format(day.date, 'dd/MM')),
    datasets: [
      {
        label: 'Temperatura Média (°C)',
        data: data.map(day => day.average),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Temperatura Média Diária do Mês',
      },
    },
    onClick: (_: any, elements: any[]) => {
      if (elements.length > 0) {
        const dataIndex = elements[0].index;
        onDayClick(data[dataIndex]);
      }
    },
  };

  return <Line options={options} data={chartData} />;
};