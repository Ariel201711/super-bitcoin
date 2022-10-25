import { Injectable } from '@angular/core'
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private loggedinUser:User = new User('5aff6bdced1cf349f0b47b4d', 'Stav Sharon', 100, [])

  private loggedinUser:User = {
    _id: '5aff6bdced1cf349f0b47b4d',
    name: 'Stav Sharon',
    balance: 100,
    transactions: []
  }

  constructor() { }

  // currently it's a synchronous function
  public getLoggedinUser():User {
    return this.loggedinUser
  }
}
 