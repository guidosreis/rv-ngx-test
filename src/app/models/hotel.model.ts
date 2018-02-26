export class Hotel {
  name: String;
  description: String;
  image: String;
  rate: number;
  price: number;
  price_history: [
    {
      month: String,
      value: number
    }
  ]
}
