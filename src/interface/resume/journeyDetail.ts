export interface ICardDetail {
  title: string;
  subTitle: string;
  description: string;
}

export interface IJourneyDetails {
  subTitle: string;
  title: string;
  details: ICardDetail[];
}
