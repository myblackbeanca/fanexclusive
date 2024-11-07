'use client';

interface HexagonImageProps {
  imageUrl: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

export function HexagonImage({ imageUrl, alt, size = 'md' }: HexagonImageProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
  };

  return (
    <div className={`relative ${sizeClasses[size]} overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-black/20" />
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-full object-cover clip-hexagon transform hover:scale-110 transition-transform duration-300"
      />
    </div>
  );
}