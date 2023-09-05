import {NativeStackNavigationProp} from '@react-navigation/native-stack';


import { Public } from '../../screens';




export type PublicRoutesTypes = {

  [key in keyof typeof Public]: undefined;

} 




export type PublicNavigationProps =

  NativeStackNavigationProp<PublicRoutesTypes>;