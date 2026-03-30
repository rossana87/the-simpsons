import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import { useFetchSimpsons } from './hooks/useFetchSimpsons';

const App = () => {
  const [search, setSearch] = useState('');
  const { error, loading, simpsons, page, setPage, next, prev } =
    useFetchSimpsons();

  const searchByName = simpsons
    .filter((s) =>
      s.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1 className="flex justify-center mb-6 font-bold">Simpsons</h1>
      <div className="border rounded border-gray-200 p-4 mb-4">
        <input
          id="name"
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="outline-none"
        />
        <p>
          {search.trim()
            ? `Showing ${searchByName.length} result(s) for "${search}" on page ${page}`
            : `Showing ${searchByName.length} characters on page ${page}`}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {searchByName.map((s) => (
          <Card
            key={s.id}
            name={s.name}
            gender={s.gender}
            portrait={s.portrait_path}
          />
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <button
          className="border rounded border-gray-200 p-2 mb-2 disabled:cursor-not-allowed disabled:shadow-none disabled:opacity-40"
          onClick={() => setPage(page - 1)}
          disabled={!prev}
          aria-label={`Go to page ${page - 1}`}
        >
          Prev
        </button>
        <span className="flex items-center">{page}</span>
        <button
          className="border rounded border-gray-200 p-2 mb-2 disabled:cursor-not-allowed disabled:shadow-none disabled:opacity-40"
          onClick={() => setPage(page + 1)}
          disabled={!next}
          aria-label={`Go to page ${page + 1}`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default App;
