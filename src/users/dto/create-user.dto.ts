export class CreateUserDto {
  id: number;
  firstName?: string;
  lastName?: string;
  identificationNumber?: string;
  phone?: string;
  email: string;
  profilePic?: string;
  password: string;
}
