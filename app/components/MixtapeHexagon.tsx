"use client";

import { motion } from "framer-motion";
import { Play, Lock } from "lucide-react";

interface MixtapeProps {
  mixtape: {
    title: string;
    artist: string;
    image: string;
    plays: string;
    exclusive: boolean;
  };
}

export function MixtapeHexagon({ mixtape }: MixtapeProps) {
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
          src={mixtape.image}
          alt={mixtape.title}
          className="absolute inset-0 w-full h-full object-cover clip-hexagon"
        />
        
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 clip-hexagon transition-all">
          <div className="absolute inset-0 flex items-center justify-center flex-col text-white p-4">
            {mixtape.exclusive && (
              <Lock className="w-3 h-3 mb-1 text-purple-400" />
            )}
            <h4 className="font-bold text-xs text-center">{mixtape.title}</h4>
            <p className="text-[10px] opacity-80">{mixtape.artist}</p>
            <div className="flex items-center mt-1">
              <Play className="w-3 h-3 mr-1" />
              <span className="text-[10px]">{mixtape.plays}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}