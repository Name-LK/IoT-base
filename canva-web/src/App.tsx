import React, { useState, useEffect } from 'react';
import { Thermometer, Table, ArrowLeft } from 'lucide-react';
import { MonthlyChart } from './components/MonthlyChart';
import { DailyChart } from './components/DailyChart';
import { DataTable } from './components/DataTable';
import { api } from './services/api';
import { DailyTemperature } from './types';

function App() {
  const [monthData, setMonthData] = useState<DailyTemperature[]>([]);
  const [selectedDay, setSelectedDay] = useState<DailyTemperature | null>(null);
  const [showTable, setShowTable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadMonthlyData();
  }, []);

  const loadMonthlyData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.fetchMonthlyData();
      setMonthData(data);
    } catch (err) {
      setError('Erro ao carregar dados. Por favor, tente novamente.');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDayClick = async (day: DailyTemperature) => {
    try {
      setLoading(true);
      setError(null);
      const dateStr = day.date.toISOString().split('T')[0];
      const dailyData = await api.fetchDailyData(dateStr);
      setSelectedDay(dailyData);
    } catch (err) {
      setError('Erro ao carregar dados do dia. Por favor, tente novamente.');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading && monthData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Carregando dados...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">{error}</p>
          <button
            onClick={loadMonthlyData}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Thermometer className="h-8 w-8 text-blue-500" />
              <h1 className="text-3xl font-bold text-gray-900">
                Dashboard de Temperatura
              </h1>
            </div>
            <div className="flex items-center gap-4">
              {selectedDay && (
                <button
                  onClick={() => setSelectedDay(null)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Voltar
                </button>
              )}
              <button
                onClick={() => setShowTable(!showTable)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Table className="h-5 w-5" />
                Exportar Dados
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          {selectedDay ? (
            <DailyChart 
              data={selectedDay}
              standalone={true}
            />
          ) : (
            <MonthlyChart 
              data={monthData} 
              onDayClick={handleDayClick} 
            />
          )}

          {showTable && (
            <DataTable 
              data={selectedDay ? [selectedDay] : monthData}
              onClose={() => setShowTable(false)}
              title={selectedDay ? 'Dados do Dia' : 'Dados do Mês'}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;