import React from 'react';
import { format } from 'date-fns';
import { DailyTemperature } from '../types';
import { X } from 'lucide-react';

interface DataTableProps {
  data: DailyTemperature[];
  onClose: () => void;
  title: string;
}

export const DataTable: React.FC<DataTableProps> = ({ data, onClose, title }) => {
  const tableData = data.length === 1
    // For daily view, show hourly data
    ? data[0].hourlyData.map(hour => ({
        deviceId: 'TEMP-001',
        dateTime: format(
          new Date(data[0].date.setHours(hour.hour)), 
          'dd/MM/yyyy HH:mm'
        ),
        value: hour.temperature,
      }))
    // For monthly view, show daily averages
    : data.map(day => ({
        deviceId: 'TEMP-001',
        dateTime: format(day.date, 'dd/MM/yyyy'),
        value: day.average,
      }));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[80vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Device ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data/Hora
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Temperatura (°C)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.deviceId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.dateTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};