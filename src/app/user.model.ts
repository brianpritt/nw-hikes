export class User {
  public bio: string = "";
  public comments = [];
  public favorited = [];
  constructor(public userName: string, public userEmail: string) {}
}
