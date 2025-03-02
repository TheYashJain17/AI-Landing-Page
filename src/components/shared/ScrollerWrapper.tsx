"use client"

import React, { useEffect } from 'react'

import Lenis from 'lenis';

const ScrollerWrapper = ({children}: {children: React.ReactNode}): React.JSX.Element => {

useEffect(() => {

    const lenis = new Lenis({

        lerp: 0.1,
        smoothWheel: true,
        syncTouch: true,

    });

    const raf = (time: any) => {

        lenis.raf(time);

        requestAnimationFrame(raf);

    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();

}, [])

  return (

        <div>

            {children}

        </div>

  )
}

export default ScrollerWrapper