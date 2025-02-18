import React from 'react';
import { Line } from 'react-chartjs-2';
import { format } from 'date-fns';
import { DailyTemperature } from '../types';

interface DailyChartProps {
  data: DailyTemperature;
  onClose?: () => void;
  standalone?: boolean;
}

export const DailyChart: React.FC<DailyChartProps> = ({ 
  data, 
  onClose,
  standalone = false 
}) => {
  const chartData = {
    labels: data.hourlyData.map(hour => `${hour.hour}:00`),
    datasets: [
      {
        label: 'Temperatura por Hora (°C)',
        data: data.hourlyData.map(hour => hour.temperature),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
        text: `Temperatura Detalhada - ${format(data.date, 'dd/MM/yyyy')}`,
      },
    },
  };

  const chart = <Line options={options} data={chartData} />;

  if (standalone) {
    return chart;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">
            Detalhes de Temperatura - {format(data.date, 'dd/MM/yyyy')}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        {chart}
      </div>
    </div>
  );
};