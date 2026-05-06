'use client'

import Image from 'next/image'
import { Component, type ErrorInfo, type ReactNode } from 'react'

import { STOREFRONT_HERO_IMAGE } from '@/lib/model-asset'

type Props = { children: ReactNode }

type State = { hasError: boolean }

export class ModelCanvasBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ShopModel]', error.message, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="relative h-[min(52vh,420px)] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 sm:h-[min(58vh,480px)] md:h-[min(64vh,560px)]">
          <Image
            src={STOREFRONT_HERO_IMAGE}
            alt="Premium storefront — brand illustration"
            fill
            className="object-cover object-center opacity-95"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
        </div>
      )
    }
    return this.props.children
  }
}
