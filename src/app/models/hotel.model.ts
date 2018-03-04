export class Hotel {
  name: string;
  description: string;
  image: string;
  rate: number;
  price: number;
  price_history: [
    {
      month: string,
      value: number
    }
  ];
}
