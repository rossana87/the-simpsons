import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { useFetchSimpsons } from './useFetchSimpsons';
import { renderHook, waitFor } from '@testing-library/react';

const mockSimpsons = [
  {
    id: 1,
    name: 'Homer Simpson',
    age: 39,
    gender: 'male',
    portrait_path: '/homer.jpg',
    status: 'Alive',
  },
];

describe('GET simpsons', () => {
  let mockedFetch: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockedFetch = vi.fn();
    vi.stubGlobal('fetch', mockedFetch);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('should return a list of simpsons', async () => {
    mockedFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: mockSimpsons }),
    });

    const { result } = renderHook(() => useFetchSimpsons());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.simpsons).toEqual(mockSimpsons);
    expect(result.current.error).toBeNull();
  });

  test('should return 500 when internal error', async () => {
    mockedFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ results: mockSimpsons }),
    });

    const { result } = renderHook(() => useFetchSimpsons());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.simpsons).toEqual([]);
    expect(result.current.error).toEqual(
      new Error('Unable to fetch the simpsons'),
    );
  });
});
