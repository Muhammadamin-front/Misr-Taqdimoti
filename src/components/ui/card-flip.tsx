"use client";

/**
 * @author: @dorianbaffier
 * @description: Card Flip
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 *
 * Adapted for the presentation: the front carries a photo and a headline
 * figure, the card also flips on click/Enter so it works on a projector.
 */

import { ArrowRight, Repeat2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface CardFlipProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  /** Background photo on the front face. */
  image?: string;
  /** Headline figure shown large on the front face. */
  metric?: string;
  /** Footer line on the back face. */
  footnote?: string;
  className?: string;
}

export default function CardFlip({
  title = "Design Systems",
  subtitle = "Explore the fundamentals",
  description = "Dive deep into the world of modern UI/UX design.",
  features = ["UI/UX", "Modern Design", "Tailwind CSS", "Kokonut UI"],
  image,
  metric,
  footnote,
  className,
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn(
        "group relative h-[340px] w-full max-w-[280px] cursor-pointer [perspective:2000px]",
        className
      )}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter") setIsFlipped((v) => !v);
      }}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
    >
      <div
        className={cn(
          "relative h-full w-full",
          "[transform-style:preserve-3d]",
          "transition-[transform] duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]",
          "motion-reduce:transition-none",
          isFlipped
            ? "[transform:rotateY(180deg)]"
            : "[transform:rotateY(0deg)]"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[backface-visibility:hidden] [transform:rotateY(0deg)]",
            "overflow-hidden rounded-2xl",
            "bg-zinc-900",
            "border border-sand-800/60",
            "shadow-lg",
            "transition-shadow duration-500",
            "group-hover:shadow-xl"
          )}
        >
          <div className="relative h-full overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
            {image ? (
              <img
                src={image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                draggable={false}
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/95" />
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-start justify-center pt-24"
            >
              <div className="relative flex h-[100px] w-[200px] items-center justify-center">
                {[...Array(10)].map((_, i) => (
                  <div
                    className={cn(
                      "absolute h-[50px] w-[50px]",
                      "rounded-[140px]",
                      "animate-[cardflip-scale_3s_linear_infinite]",
                      "motion-reduce:animate-none",
                      "opacity-0",
                      "shadow-[0_0_50px_rgba(212,160,60,0.5)]",
                      "group-hover:animate-[cardflip-scale_2s_linear_infinite]"
                    )}
                    key={i}
                    style={{
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>
            </div>
            {metric ? (
              <div className="absolute inset-x-0 top-8 text-center font-display text-3xl font-bold text-sand-200 2xl:text-4xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                {metric}
              </div>
            ) : null}
          </div>

          <div className="absolute right-0 bottom-0 left-0 p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="space-y-1.5">
                <h3 className="font-semibold text-lg text-white leading-snug tracking-tighter transition-transform duration-500 group-hover:translate-y-[-4px]">
                  {title}
                </h3>
                <p className="line-clamp-2 text-sm text-zinc-200 tracking-tight transition-transform delay-[50ms] duration-500 group-hover:translate-y-[-4px]">
                  {subtitle}
                </p>
              </div>
              <div className="group/icon relative">
                <div
                  className={cn(
                    "absolute inset-[-8px] rounded-lg transition-opacity duration-300",
                    "bg-gradient-to-br from-sand-500/30 via-sand-500/10 to-transparent"
                  )}
                />
                <Repeat2
                  aria-hidden="true"
                  className="relative z-10 h-4 w-4 text-sand-300 transition-transform duration-300 group-hover/icon:-rotate-12 group-hover/icon:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "rounded-2xl p-6",
            "bg-gradient-to-b from-zinc-900 to-black",
            "border border-sand-800/60",
            "shadow-lg",
            "flex flex-col",
            "transition-shadow duration-500",
            "group-hover:shadow-xl"
          )}
        >
          <div className="flex-1 space-y-5">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-white leading-snug tracking-tight">
                {title}
              </h3>
              <p className="text-sm text-zinc-400 tracking-tight">
                {description}
              </p>
            </div>

            <div className="space-y-2">
              {features.map((feature, index) => (
                <div
                  className="flex items-start gap-2 text-sm text-zinc-200 transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  key={feature}
                  style={{
                    transform: isFlipped
                      ? "translateX(0)"
                      : "translateX(-10px)",
                    opacity: isFlipped ? 1 : 0,
                    transitionDelay: `${index * 50 + 150}ms`,
                  }}
                >
                  <ArrowRight
                    aria-hidden="true"
                    className="mt-1 h-3 w-3 shrink-0 text-sand-400"
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {footnote ? (
            <div className="mt-4 border-t border-zinc-800 pt-3 text-xs text-zinc-500">
              {footnote}
            </div>
          ) : null}
        </div>
      </div>

      <style>{`
        @keyframes cardflip-scale {
          0% {
            transform: scale(2);
            opacity: 0;
            box-shadow: 0px 0px 50px rgba(212, 160, 60, 0.5);
          }
          50% {
            transform: translate(0px, -5px) scale(1);
            opacity: 1;
            box-shadow: 0px 8px 20px rgba(212, 160, 60, 0.5);
          }
          100% {
            transform: translate(0px, 5px) scale(0.1);
            opacity: 0;
            box-shadow: 0px 10px 20px rgba(212, 160, 60, 0);
          }
        }
      `}</style>
    </div>
  );
}
