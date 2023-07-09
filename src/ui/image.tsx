"use client"

import * as React from "react"
import NextImage from "next/image"

import { cn } from "@/lib/shadcn-ui"

const Image = React.forwardRef<
  React.ElementRef<typeof NextImage>,
  React.ComponentPropsWithoutRef<typeof NextImage>
>(({ className, ...props }, ref) => (
  <NextImage
    ref={ref}
    width={999999999999999}
    height={999999999999999}
    className={cn("w-full h-full object-center object-cover", className)}
    {...props}
  />
))
Image.displayName = "Image"

export { Image }
