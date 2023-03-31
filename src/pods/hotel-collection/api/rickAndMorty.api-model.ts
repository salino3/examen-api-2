
export interface Character {
  type?: string;
  id?: number | string;
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
  origin?: Origin;
  location?: Location;
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}


