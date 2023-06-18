import { useState, useEffect } from 'react';

export const useUniqueId = () => {
  const [uniqueHex, setUniqueHex] = useState<string>();

  useEffect(() => {
    const num = Number(Math.random() * (16 ** 9 - 16 * 8) + 16 * 8);
    setUniqueHex(prev => num.toString(16).substring(0, 8));
  }, []);

  return uniqueHex;
};
