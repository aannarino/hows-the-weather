import { useState } from 'react';

export interface useError {
  error: Error;
  setError: (error: any) => void;
  resetError: () => void;
}

export const useError = () => {
  const [error, setErrorState] = useState();
  const setError = (e: any) => {
    if (!error) {
      setErrorState(e);
    }
  };
  const resetError = () => setErrorState(undefined);
  return { error, setError, resetError };
};
