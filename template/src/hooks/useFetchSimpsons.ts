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

  useEffect(() => {
    const fetchSimpsons = async () => {
      const url = 'https://thesimpsonsapi.com/api/characters';
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        setSimpsons(data.results);
        console.log(data.results);
      } catch {
        setError(new Error('Unable to fetch the simpsons'));
      } finally {
        setLoading(false);
      }
    };
    fetchSimpsons();
  }, []);

  return { error, loading, simpsons };
};
