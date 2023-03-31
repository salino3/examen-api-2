
interface SwitchRoutes {
  root: string;
  moreInfo: string;
  characters: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  moreInfo: '/characters/moreinfo/:id',
  characters: '/characters',
};


