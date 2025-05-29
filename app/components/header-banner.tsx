"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface HeaderBannerProps {
  title: string
  subtitle?: string
  description?: string
  imagePath: string
  height?: string
}




export default function HeaderBanner({
  title,
  subtitle,
  description,
  imagePath,
  height = "min-h-[85vh]",
}: HeaderBannerProps) {
  return (
    <header className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      <div className="absolute inset-0 z-0">
        <Image src={imagePath || "/placeholder.svg"} alt={title} fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-amber-950/70 to-stone-950/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/20 to-stone-950/95"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-stone-950/40"></div>
      </div>

      <div className="absolute inset-0 z-5">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"></div>
        <div className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-amber-500/30 to-transparent hidden lg:block"></div>
        <div className="absolute right-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-amber-500/30 to-transparent hidden lg:block"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-amber-100 drop-shadow-2xl leading-none tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <div className="mt-4 relative">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent w-32"></div>
                  <div className="mx-4 w-2 h-2 bg-amber-400 rounded-full"></div>
                  <div className="h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent w-32"></div>
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl text-amber-300 font-light italic tracking-wide">
                  {subtitle}
                </h2>
              </div>
            )}
          </div>

          {description && (
            <div className="mt-12 mb-16">
              <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl lg:text-3xl text-amber-200 leading-relaxed drop-shadow-lg font-light tracking-wide">
                  {description}
                </p>
                <div className="mt-8 flex justify-center">
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-16">
            <div className="relative">
              <div className="text-amber-300/80 text-lg md:text-xl font-light italic tracking-wider">
                "Elegance is the only beauty that never fades"
              </div>
              <div className="mt-2 text-amber-400/60 text-sm tracking-widest uppercase">— Audrey Hepburn</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
