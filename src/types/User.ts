export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  // Optional field, as it might not be present in all API responses
  age?: number; 
}