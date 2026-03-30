import { useEffect, useState } from 'react';

export interface SimpsonCharacther {
  id: number;
  age: number;
  gender: 'string';
  name: 'string';
  portrait_path: 'string';
  status: 'Alive' | 'Deceased';
}

export const useFetchSimpsons = () => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const [simpsons, setSimpsons] = useState<SimpsonCharacther[]>([]);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState<string | null>(null);
  const [prev, setPrev] = useState<string | null>(null);

  useEffect(() => {
    const fetchSimpsons = async () => {
      const url = `https://thesimpsonsapi.com/api/characters?page=${page}`;
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        setSimpsons(data.results);
        setPrev(data.prev);
        setNext(data.next);
      } catch {
        setError(new Error('Unable to fetch the simpsons'));
      } finally {
        setLoading(false);
      }
    };
    fetchSimpsons();
  }, [page]);

  return { error, loading, simpsons, page, setPage, next, prev };
};
