import { IMemberCount } from "../memberCount/MemberCountType";
import { IProvince } from "../province/ProvinceType";

export interface IRegisterCompany {
  id?: string;
  companyName: string;
  taxCode?: string;
  companyWebsite?: string;
  companyEmail: string;
  phoneNumber?: string;
  provinceId: string;
  companyAddress: string;
  companyIntroduce?: string;
  companyDescription?: string;
  companyLogo?: string;
  companyBanner?: string;
  memberCountId: string;
}
export interface ICompany {
  id: string;
  companyName: string;
  taxCode?: string;
  companyWebsite?: string;
  companyEmail: string;
  phoneNumber?: string;
  companyAddress: string;
  companyIntroduce?: string;
  companyLogo?: string;
  companyBanner?: string;
  companyDescription?: string;
  memberCount: IMemberCount;
  province: IProvince;
  status: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
