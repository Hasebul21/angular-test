import { Component, EventEmitter, Input, OnInit, Output, computed, signal } from '@angular/core';
import { dummyUserData } from '../../utilities/dummy_data';
import { IUserData } from '../../interface/IUserData.interface';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  @Input({ required: true }) selectedUser!: IUserData;
  @Output() selectedUserChange = new EventEmitter<number>();
  imagePath!: string;

  ngOnInit(): void {
    this.imagePath = 'assets/users/' + this.selectedUser.imagePath;
  }
  onSelctedUser() {
     this.selectedUserChange.emit(this.selectedUser.id);
  }
}
