
export class RentableAssets {
  public id: number;
  public name: string;
  public rent: number;
  public vacant: boolean;
}

export enum PaymentMethod {
    Cash,
    BankTransfer
  }
  