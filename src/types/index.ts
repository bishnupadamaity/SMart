import {SvgProps} from 'react-native-svg';

export type IconType = SvgProps & {
  size?: number;
  color?: string;
};

export type FCMToken = {
  web: string | null;
  android: string | null;
  ios: string | null;
};

const Gender = {
  Male: 'Male',
  Female: 'Female',
};

export type Gender = keyof typeof Gender;

export type User = {
  id: string;
  photo: string;
  name: string;
  role: 'Student' | 'Canteen' | 'Admin';
  email: string;
  idNo: string;
  program: string;
  enrollYear: string;
  gender: string;
  discipline: string;
  course: string;
  balance: number;
  bloodGroup: string;
  token: string | null;
  emergencyContact: string;
  phone: string;
  canteenId?: string;
};

export type MENU = {
  name: string;
  price: string;
  time: string;
  type: string;
  photo?: string;
};
