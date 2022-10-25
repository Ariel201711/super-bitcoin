import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service'
import { User } from '../../models/user.model'

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 public loggedinUser:User = new UserService().getLoggedinUser()

}
