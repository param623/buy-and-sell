import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../../types';
import { fakeListings } from '../../fake-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements OnInit{

  listing: Listing | undefined;
  email: string = '';
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if(id) {
      this.listing = fakeListings.find(listing => listing.id === id);
      if(this.listing) {
        this.message = `Hi, I'm interested in your ${this.listing.name.toLocaleLowerCase()}!`;
      }
    }
    
  }

  sendMessage(): void {
    alert('Your message has been successfully sent!!!');
    this.router.navigateByUrl('/listings');
  }
}
