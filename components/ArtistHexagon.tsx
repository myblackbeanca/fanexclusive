"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

interface ArtistProps {
  artist: {
    name: string;
    image: string;
    fans: string;
    latestMixtape: string;
  };
}

export function ArtistHexagon({ artist }: ArtistProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative group w-32"
    >
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 clip-hexagon bg-gradient-to-br from-purple-600 to-pink-600 p-[2px]">
          <div className="absolute inset-0 bg-black clip-hexagon m-[1px]" />
        </div>
        
        <img
          src={artist.image}
          alt={artist.name}
          className="absolute inset-0 w-full h-full object-cover clip-hexagon"
        />
        
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 clip-hexagon transition-all">
          <div className="absolute inset-0 flex items-center justify-center flex-col text-white p-4">
            <h4 className="font-bold text-xs text-center">{artist.name}</h4>
            <p className="text-[10px] opacity-80">{artist.latestMixtape}</p>
            <div className="flex items-center mt-1">
              <Users className="w-3 h-3 mr-1" />
              <span className="text-[10px]">{artist.fans}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}