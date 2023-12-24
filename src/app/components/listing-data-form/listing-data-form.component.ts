import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { fakeListings, fakeMyListings } from '../../fake-data';
import { Listing } from '../../types';


@Component({
  selector: 'app-listing-data-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listing-data-form.component.html',
  styleUrl: './listing-data-form.component.css'
})
export class ListingDataFormComponent {

  @Input() buttonText: string = '';
  @Output() onSubmit = new EventEmitter<Listing>();
  listing: Listing | undefined;
  name: string = '';
  description: string = '';
  price: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.listing = fakeMyListings.find(listing => listing.id === id);
      if(this.listing !== undefined) {
        this.name = this.listing?.name;
        this.description = this.listing?.description;
        this.price = this.listing?.price;
      }
    }
  }

  onBtnClicked(): void {
    this.onSubmit.emit({
      id: '',
      name: this.name,
      description: this.description,
      price: Number(this.price)
    });
    this.router.navigateByUrl('/my-listings');
  }
}
