import { Component } from '@angular/core';
import { UserData, userData } from '../user_data';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
   selectedUser: UserData = userData[0];

   onClick(){
    const randomIndex: number = Math.floor(Math.random() * userData.length);
    this.selectedUser = userData[randomIndex];
   }
}
