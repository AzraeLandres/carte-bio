export interface Place {
  id: number;
  raisonSociale: string;
  adressesOperateurs: {
    ville: string;
    codePostal: string;
    lat: number;
    long: number;
  }[];
}
