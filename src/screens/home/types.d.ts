export type headerProps = {
  country: string;
  name: string;
};

export type mainContentProps = {
  date: string;
  icon: string;
  desc: string;
  temp: number;
  windSpeed: number;
  humidity: number;
};

type ItemOptionsProps = {
  title: string;
  active: boolean;
};

export type listOptionsProps = {
  data: ItemOptionsProps[];
};
