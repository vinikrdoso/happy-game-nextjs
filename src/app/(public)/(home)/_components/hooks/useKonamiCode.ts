"use client";

import { useEffect, useState, useCallback } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
];

export function useKonamiCode(callback: () => void) {
  const [sequence, setSequence] = useState<string[]>([]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      setSequence((prev) => {
        const newSequence = [...prev, event.key].slice(-KONAMI_CODE.length);

        // Verifica se a sequência está correta
        const isMatch = KONAMI_CODE.every(
          (key, index) => key === newSequence[index]
        );

        if (isMatch && newSequence.length === KONAMI_CODE.length) {
          callback();
          return []; // Reseta a sequência após ativar
        }

        return newSequence;
      });
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return sequence;
}
