import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  type: "button" | "submit";
  title: string;
  buttonStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchBarProps {
  placeholder: string;
  hasIcon: boolean;
}

export interface CarType {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export interface Manufacturer {
  Country: string;
  Mfr_CommonName: string;
  Mfr_ID: number;
  Mfr_Name: string;
  VehicleTypes: any[];
}

export interface Makes{
  Make_ID : number;
  Make_Name : string;
  Mfr_Name : string;
}

export interface FetchMakesByManufacturer {
  Count: number;
  Message: string;
  Results: Makes[];
  SearchCriteria: string;
}

export interface FetchDataType {
  Count: number;
  Message: string;
  Results: CarType[] | Manufacturer[] | Makes[];
  SearchCriteria: string;
}

