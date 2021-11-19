import { Component } from '@angular/core';
import { UserServiceService } from 'projects/clooper-core/src/lib/services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trades';
  userRecord: any;

  constructor(private userService: UserServiceService) {

  }

  ngOnInit() {
    this.getUserData()
  }

  getUserData() {
    this.userService.getUsers().subscribe((res: any) => {
      this.userRecord = res;
      console.log(res)
    })
  }
}
