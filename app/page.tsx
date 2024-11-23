'use client'
import HomePage from './home/page';
import { animateText3D } from '@/app/utils/3dtextEffect';
import { ScrambleEffect } from './utils/ScrambleEffect';
import { useEffect } from "react";

export default function Main() {
  useEffect(()=> {
    animateText3D()
    ScrambleEffect()
}, [])
  return (
    <div className='flex flex-col gap-y-5'>
     <HomePage />
    </div>
  );
}
