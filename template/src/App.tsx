import './App.css';
import { useFetchSimpsons } from './hooks/useFetchSimpsons';

const App = () => {
  const { error, loading, simpsons } = useFetchSimpsons();

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Simpsons</h1>
          <div className="text-gray-700">
            {simpsons.map((c) => (
              <ul>
                <li key={c.id}>{c.name}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
