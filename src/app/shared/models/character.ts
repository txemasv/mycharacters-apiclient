export class Character {
  id: string;
  firstName: string;
  lastName: string;
  description: string;

  constructor(firstName: string, lastName: string, description: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.description = description;
  }

}
