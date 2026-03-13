"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { H2, H3, Paragraph, Span } from "@/components/ui/Typography";

interface AchievementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AchievementModal({ isOpen, onClose }: AchievementModalProps) {
  const [show, setShow] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  const handleClose = useCallback(() => {
    setShow(false);
    setTimeout(() => onClose(), 300);
  }, [onClose]);

  // Gerenciamento de foco e teclado
  useEffect(() => {
    if (isOpen) {
      // Salvar elemento focado anteriormente
      previouslyFocusedRef.current = document.activeElement as HTMLElement;

      const showTimer = setTimeout(() => {
        setShow(true);
        // Focar botão de fechar após animação
        closeButtonRef.current?.focus();
      }, 10);

      const closeTimer = setTimeout(() => {
        handleClose();
      }, 5000);

      // Handler para Escape
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          handleClose();
          return;
        }

        // Trap de foco
        if (e.key === "Tab" && modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );

          if (focusableElements.length === 0) return;

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(closeTimer);
        document.removeEventListener("keydown", handleKeyDown);
        // Restaurar foco ao elemento anterior
        previouslyFocusedRef.current?.focus();
      };
    }
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0"}`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="achievement-modal-title"
      >
        <div
          ref={modalRef}
          className={`relative bg-linear-to-br from-gray-900 via-gray-800 to-black border-2 border-green-500 rounded-3xl shadow-2xl max-w-md w-full transform transition-all duration-300 ${show ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
        >
          {/* Header */}
          <div className="border-b border-gray-700 px-6 py-4 flex items-center justify-between">
            <H2 id="achievement-modal-title" className="text-green-400 flex items-center gap-2">
              CÓDIGO SURPRESA ATIVADO!
            </H2>
            <button
              ref={closeButtonRef}
              onClick={handleClose}
              className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-sm"
              aria-label="Fechar modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-8 text-center">
            <div className="mb-6 relative inline-block" aria-hidden="true">
              <div className="absolute inset-0 blur-xl bg-yellow-500/50 animate-pulse" />
              <div className="relative text-8xl animate-bounce-slow">🏆</div>
            </div>

            <H3 className="text-white mb-4 animate-fade-in">
              Parabéns, verdadeiro gamer!
            </H3>

            <Paragraph variant="text1" className="text-gray-300 mb-6 animate-fade-in-delay">
              Você desbloqueou o easter egg secreto!
            </Paragraph>

            <div className="flex justify-center gap-2 flex-wrap animate-fade-in-delay-2">
              <Span variant="text3" weight="bold" className="bg-linear-to-r from-green-400 to-emerald-500 text-gray-900 px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform">
                ⭐ Conquista Desbloqueada
              </Span>
            </div>

            {/* Efeito coloridoooo  */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl" aria-hidden="true">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full animate-confetti"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: "-10%",
                    backgroundColor: [
                      "#ef4444",
                      "#f59e0b",
                      "#10b981",
                      "#3b82f6",
                      "#8b5cf6",
                    ][Math.floor(Math.random() * 5)],
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.5s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.5s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-confetti {
          animation: confetti linear forwards;
        }
      `}</style>
    </>
  );
}
