import type { NextConfig } from "next";

/**
 * Security Headers - Proteção contra ataques comuns
 * Baseado nos princípios de Defesa Cibernética da Palo Alto Networks
 */
const securityHeaders = [
  {
    // Força uso de HTTPS por 2 anos
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    // Previne Clickjacking - página não pode ser carregada em iframe
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    // Previne MIME type sniffing
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Ativa filtro XSS do navegador
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    // Controla informações enviadas no header Referer
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Desabilita APIs do navegador não utilizadas (câmera, microfone, geolocalização)
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Whitelist de domínios permitidos para imagens (previne SSRF)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  // Aplica headers de segurança em todas as rotas
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
