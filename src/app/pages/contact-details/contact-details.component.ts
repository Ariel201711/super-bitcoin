import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription, lastValueFrom } from 'rxjs'
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  contact!: Contact
  paramsSubscription!: Subscription

  ngOnInit(): void {
  //   this.paramsSubscription = this.route.data.subscribe(data => {
  //     console.log('data:', data)
  //     const contact = data['contact']
  //     console.log('contact:', contact)
  //     if (contact) this.contact = contact
  //   })
  // }
    this.paramsSubscription = this.route.params.subscribe(async params => {
      const id = params['id']
      if (id) {
        try {
          this.contact = await lastValueFrom(this.contactService.getContactById(id))
        } catch {
          this.router.navigateByUrl('/contact')
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe()
  }
}
