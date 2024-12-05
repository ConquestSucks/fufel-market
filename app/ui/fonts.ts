import { Climate_Crisis } from 'next/font/google';
import { Merriweather_Sans } from 'next/font/google';
import { Open_Sans } from 'next/font/google';
 
export const climateCrisis = Climate_Crisis({
  weight: ['400'],
  subsets: ['latin'],
});

export const merriweatherSans = Merriweather_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin', 'cyrillic']
});