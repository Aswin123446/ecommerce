import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileserviceService } from '../../services/profileservice.service';

@Component({
  selector: 'app-profile',
  imports: [CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user: any = {};

  constructor(private profileservice: ProfileserviceService) {}

  ngOnInit(): void {
    this.profileservice.getUser().subscribe((data) => {
      this.user = data;
    });
  }

}
