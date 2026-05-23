"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Share2, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectGalleryProps {
  images: string[]
  videoUrl?: string
}

export function ProjectGallery({ images, videoUrl }: ProjectGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-3xl bg-card border border-border/50 shadow-2xl">
        <div className="relative aspect-[16/9]">
          <img
            src={images[currentImage] || "/placeholder.svg"}
            alt={`Imagen ${currentImage + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Navigation Buttons */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full shadow-xl bg-background/90 backdrop-blur-sm border border-border/50 hover:bg-background hover:scale-110 transition-all"
            onClick={prevImage}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full shadow-xl bg-background/90 backdrop-blur-sm border border-border/50 hover:bg-background hover:scale-110 transition-all"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-border/50">
            {currentImage + 1} / {images.length}
          </div>

          {/* Video Button */}
          {videoUrl && (
            <Button
              variant="secondary"
              className="absolute bottom-6 right-24 rounded-full shadow-xl bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
            >
              <Play className="h-4 w-4" fill="currentColor" />
              Ver video
            </Button>
          )}

          {/* Share Button */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-6 right-6 rounded-full shadow-xl bg-background/90 backdrop-blur-sm border border-border/50 hover:bg-background hover:scale-110 transition-all"
          >
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-6 gap-3">
        {images.slice(0, 6).map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`aspect-video rounded-xl overflow-hidden border-2 transition-all ${
              currentImage === idx
                ? "border-primary scale-105 shadow-lg shadow-primary/20"
                : "border-border/50 opacity-60 hover:opacity-100 hover:border-primary/50"
            }`}
          >
            <img src={img || "/placeholder.svg"} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
