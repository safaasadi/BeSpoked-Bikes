export interface Sale {
  id: number;
  productId: number;
  salesPersonId: number;
  customerId: number;
  date: string;
  product: {
    id: number;
    name: string;
    manufacturer: string;
    style: string;
    purchasePrice: number;
    salePrice: number;
    qtyOnHand: number;
    commissionPercentage: number;
  };
  salesPerson: {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
    startDate: string;
    terminationDate: string;
    manager: string;
  };
  customer: {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
    startDate: string;
  };
}
