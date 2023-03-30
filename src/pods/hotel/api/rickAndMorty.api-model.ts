export interface Character {
  preventDefault?: () => void;
  id: number | string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
  bestSentence: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}

export interface APIResponse {
  info: Info;
  results: Character[];
}


export interface RickAndMorty {
  info: Info;
  results: Character[];
}

