import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { dummyUserData } from '../utilities/dummy_data';
import { IUserData } from '../interface/IUserData.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userData: IUserData[] = dummyUserData;
  selectedUser ?: IUserData
  onClickUser(id: number) {
    this.selectedUser = this.userData.find((user) => user.id === id)!;
  }
}
