import React from "react";

// Tipos para as posições dos entalhes
type NotchPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-diagonal"
  | "bottom-diagonal"
  | "all-corners";

// Interface para as props do componente
interface NotchedCardProps {
  /** Posição do entalhe */
  position?: NotchPosition;
  /** Tamanho do entalhe em pixels */
  size?: number;
  /** Cor da borda (classe Tailwind bg-*). Se fornecida, cria card com borda */
  borderColor?: string;
  /** Espessura da borda em pixels (só funciona com borderColor) */
  borderWidth?: number;
  /** Classes CSS adicionais */
  className?: string;
  /** Conteúdo do card */
  children: React.ReactNode;
  /** Estilos inline adicionais */
  style?: React.CSSProperties;
  /** Cor de fundo do conteúdo (classe Tailwind bg-*) */
  bgColor?: string;
  /** Cor do texto (classe Tailwind text-*) */
  textColor?: string;
}

// Função para gerar o clip-path baseado na posição e tamanho
const getClipPath = (position: NotchPosition, size: number): string => {
  switch (position) {
    case "top-left":
      return `polygon(${size}px 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${size}px)`;
    case "top-right":
      return `polygon(0% 0%, calc(100% - ${size}px) 0%, 100% ${size}px, 100% 100%, 0% 100%)`;
    case "bottom-left":
      return `polygon(0% 0%, 100% 0%, 100% 100%, ${size}px 100%, 0% calc(100% - ${size}px))`;
    case "bottom-right":
      return `polygon(0% 0%, 100% 0%, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0% 100%)`;
    case "top-diagonal":
      return `polygon(0% ${size}px, ${size}px 0%, 100% 0%, 100% 100%, 0% 100%)`;
    case "bottom-diagonal":
      return `polygon(0% 0%, 100% 0%, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0% 100%)`;
    case "all-corners":
      return `polygon(${size}px 0%, calc(100% - ${size}px) 0%, 100% ${size}px, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, ${size}px 100%, 0% calc(100% - ${size}px), 0% ${size}px)`;
    default:
      return "none";
  }
};

// Componente Universal NotchedCard
export const NotchedCard: React.FC<NotchedCardProps> = ({
  position = "bottom-right",
  size = 16,

  // Para versão com borda
  borderColor,
  borderWidth = 3,

  // Para ambas versões
  className = "",
  children,
  style = {},

  // Cores padrão
  bgColor = "bg-white",
  textColor = "text-gray-800",
}) => {
  // Se tem borderColor, renderiza versão com borda
  if (borderColor) {
    return (
      <div className="relative" style={{ padding: `${borderWidth}px` }}>
        {/* Borda colorida (camada de fundo) */}
        <div
          className={`absolute inset-0 ${borderColor} shadow-lg`}
          style={{
            clipPath: getClipPath(position, size),
          }}
        />

        {/* Conteúdo do card */}
        <div
          className={`relative ${bgColor} ${textColor} shadow-lg transition-all duration-300 hover:shadow-xl ${className}`}
          style={{
            clipPath: getClipPath(position, size),
            ...style,
          }}
        >
          <div className="p-6">{children}</div>
        </div>
      </div>
    );
  }

  // Senão, renderiza versão preenchida
  return (
    <div
      className={`shadow-lg transition-all duration-300 hover:shadow-xl ${className}`}
      style={{
        clipPath: getClipPath(position, size),
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// Exemplos de uso com TypeScript:
/*

// CARD COM BORDA (passa borderColor)
<NotchedCard 
  position="top-left"           // ✅ Type-safe: só aceita posições válidas
  size={20}                     // ✅ Type-safe: número
  borderColor="bg-red-500"      // ✅ Type-safe: string opcional
  borderWidth={4}               // ✅ Type-safe: número
>
  <h3 className="font-bold mb-2">Card com Borda</h3>
  <p className="text-gray-600">Fundo branco, borda vermelha</p>
</NotchedCard>

// CARD PREENCHIDO (sem borderColor)
<NotchedCard 
  position="bottom-right"       // ✅ IntelliSense mostra opções
  size={18}
  className="bg-gradient-to-r from-green-400 to-blue-500"
>
  <h3 className="font-bold mb-2">Card Preenchido</h3>
  <p className="text-white">Totalmente colorido</p>
</NotchedCard>

// CARD PERSONALIZADO
<NotchedCard 
  position="all-corners"
  size={16}
  borderColor="bg-purple-500"
  borderWidth={3}
  bgColor="bg-gray-50"
  textColor="text-purple-800"
  className="hover:bg-purple-50"
>
  <h3 className="font-bold">Card Personalizado</h3>
  <p>Cores totalmente customizadas</p>
</NotchedCard>

// ❌ Erro de TypeScript - posição inválida
<NotchedCard position="invalid-position"> // TypeScript mostrará erro!

// ❌ Erro de TypeScript - size deve ser número  
<NotchedCard size="medium"> // TypeScript mostrará erro!

*/
