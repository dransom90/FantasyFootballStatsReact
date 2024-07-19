import { Member } from "./Member";
export class League {
  gameId: number;
  id: number;
  members: Member[];

  getMembers() {
    this.members.forEach(function (value) {
      console.log(value.displayName);
    });
  }
}
