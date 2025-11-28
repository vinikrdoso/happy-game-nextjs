"use client";

import { useEffect, useState } from "react";

interface AchievementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AchievementModal({ isOpen, onClose }: AchievementModalProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      // Auto-close após 5 segundos
      const timer = setTimeout(() => {
        handleClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => onClose(), 300); // Aguarda animação antes de fechar
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/80 backdrop-blur-sm z-50
          transition-opacity duration-300
          ${show ? "opacity-100" : "opacity-0"}
        `}
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div
          className={`
            relative bg-linear-to-br from-gray-900 via-gray-800 to-black
            border-2 border-green-500
            rounded-3xl shadow-2xl
            max-w-md w-full
            transform transition-all duration-300
            ${show ? "scale-100 opacity-100" : "scale-75 opacity-0"}
          `}
        >
          {/* Header */}
          <div className="border-b border-gray-700 px-6 py-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-green-400 flex items-center gap-2">
              CÓDIGO SURPRESA ATIVADO!
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
            {/* Ícone do troféu com animação */}
            <div className="mb-6 relative inline-block">
              <div className="absolute inset-0 blur-xl bg-yellow-500/50 animate-pulse" />
              <div className="relative text-8xl animate-bounce-slow">🏆</div>
            </div>

            {/* Título */}
            <h3 className="text-3xl font-bold text-white mb-4 animate-fade-in">
              Parabéns, verdadeiro gamer!
            </h3>

            {/* Descrição */}
            <p className="text-gray-300 text-lg mb-6 animate-fade-in-delay">
              Você desbloqueou o easter egg secreto!
            </p>

            {/* Badge */}
            <div className="flex justify-center gap-2 flex-wrap animate-fade-in-delay-2 cursor-pointer">
              <span className="bg-linear-to-r from-green-400 to-emerald-500 text-gray-900 font-bold px-6 py-3 rounded-full text-sm shadow-lg transform hover:scale-105 transition-transform">
                ⭐ Conquista Desbloqueada
              </span>
            </div>

            {/* Efeito coloridooo */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
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
