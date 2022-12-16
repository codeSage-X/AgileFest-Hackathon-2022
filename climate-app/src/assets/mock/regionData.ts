export interface IRegion {
  id: number;
  name: string;
  temp: number;
  humidity: number;
  wind: number;
  pressure: number;
  soilFertility: number;
  stormProbability: number;
  floodProbability: number;
  emissionHealthRisk: number;
  environmentHarvard: number;
  agriculture: string;
  water: string;
  energy: string;
  health: string;
}

export class Region implements IRegion {
  id: number = 0;
  name: string = '';
  temp: number = 0;
  humidity: number = 0;
  wind: number = 0;
  pressure: number = 0;
  soilFertility: number = 0;
  stormProbability: number = 0;
  floodProbability: number = 0;
  emissionHealthRisk: number = 0;
  environmentHarvard: number = 90;
  agriculture: string = '';
  water: string = '';
  energy: string = '';
  health: string = '';
}
