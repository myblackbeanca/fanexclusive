import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { VideoCard } from "@/components/VideoCard";
import { MixtapeHexagon } from "@/components/MixtapeHexagon";
import { ArtistHexagon } from "@/components/ArtistHexagon";
import { Footer } from "@/components/Footer";
import { SubscriptionSection } from "@/components/SubscriptionSection";
import { mixtapes } from "./data/mixtapes";
import { artists } from "./data/artists";
import { videos } from "./data/videos";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-black text-white">
      <Header />
      <HeroSection />

      {/* Video Gallery Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Exclusive Content</h2>
          <p className="text-gray-400 text-center mb-12">Verify with MINY to unlock exclusive artist content</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <VideoCard key={index} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Mixtapes Section */}
      <section id="mixtapes" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Mixtapes</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {mixtapes.map((mixtape, index) => (
              <MixtapeHexagon key={index} mixtape={mixtape} />
            ))}
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Artists</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {artists.map((artist, index) => (
              <ArtistHexagon key={index} artist={artist} />
            ))}
          </div>
        </div>
      </section>

      <SubscriptionSection />
      <Footer />
    </div>
  );
}