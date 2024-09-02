'use client'

import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from 'react';

/// <reference path="./gradient/gradient.d.ts" />
import Gradient from './gradient/gradient';

export default function GradientMesh() {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, []);

  return (
    <div className='h-screen fixed top-0'>
      <canvas id="gradient-canvas" data-js-darken-top data-transition-in />
    </div>
  );
}