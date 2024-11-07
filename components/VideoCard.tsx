"use client";

import { Button } from "@/components/ui/button";
import { Lock, Play, Users, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface VideoProps {
  video: {
    title: string;
    artist: string;
    thumbnail: string;
    duration: string;
    holders: string;
    comments: string;
  };
}

export function VideoCard({ video }: VideoProps) {
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleVerify = () => {
    // Here you would implement the verification logic
    console.log("Sending verification code to:", phoneNumber);
    setIsVerifyOpen(false);
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative group bg-gradient-to-br from-purple-900/20 to-black/20 rounded-xl overflow-hidden backdrop-blur-sm border border-purple-500/10"
      >
        <div className="aspect-video relative">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          
          <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded-full text-xs">
            {video.duration}
          </div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="ghost" size="icon" className="w-16 h-16 rounded-full bg-purple-600/80 hover:bg-purple-600">
              <Play className="w-8 h-8" />
            </Button>
          </div>

          <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-white">
            <div className="text-center">
              <Lock className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <p className="text-sm mb-3">Claim your MINY to watch</p>
              <Button 
                size="sm" 
                className="bg-purple-600 hover:bg-purple-700 rounded-full px-6"
                onClick={() => setIsVerifyOpen(true)}
              >
                Claim Now
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-white mb-1">{video.title}</h3>
          <p className="text-sm text-gray-400 mb-3">{video.artist}</p>
          
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{video.holders}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-1" />
                <span>{video.comments}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <Dialog open={isVerifyOpen} onOpenChange={setIsVerifyOpen}>
        <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-purple-900 to-black text-white border border-purple-500/20">
          <DialogHeader>
            <DialogTitle className="text-xl text-center">Your MINY will be sent here:</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-black/40 border-purple-500/20 rounded-lg"
            />
            <Button onClick={handleVerify} className="bg-purple-600 hover:bg-purple-700 rounded-lg py-6">
              Send Claim Link
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}