export interface IUser {
  id: number;
  name: string;
  age: number;
  eyeColor: string;
}
export class user implements IUser {
  id: number = 0;
  name: string = '';
  age: number = 0;
  eyeColor: string = '';
}
