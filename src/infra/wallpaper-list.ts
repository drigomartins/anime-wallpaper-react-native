import { WallpaperItem } from '@/domain';

import { demonSlayerList } from './demon-slayer-list';
import { bokuNoHeroList } from './boku-no-hero-list';
import { jujutsuList } from './jujutsu-kaisen-list';
import { narutoList } from './naruto-list';
import { dragonBallList } from './dragon-ball-list';

export const wallpaperList: WallpaperItem[] = [
  ...demonSlayerList,
  ...bokuNoHeroList,
  ...jujutsuList,
  ...narutoList,
  ...dragonBallList
];
