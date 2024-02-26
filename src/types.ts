export interface Prediction {
  prediction: string | null;
  point: number | null;
}

export interface RacePrediction {
  surprise: Prediction;
  flop: Prediction;
  pole: Prediction;
  shootout: Prediction;
  sprint: Prediction;
  p3: Prediction;
  p2: Prediction;
  p1: Prediction;
  crazy: Prediction;
}

export interface Race {
  fullName: string;
  name: string;
  country: string;
  city: string;
  circuit: string;
  website: string;
  image: string;
  startDate: string;
  startMonth: string;
  endDate: string;
  endMonth: string;
  isSprint: boolean;
  shootoutDate?: string;
  sprintDate?: string;
  qualifyingDate: string;
  raceDate: string;
  shootout?: string;
  sprint?: string;
  pole: string;
  p3: string;
  p2: string;
  p1: string;
  predictions: {
    matt: RacePrediction;
    tommy: RacePrediction;
  };
}
