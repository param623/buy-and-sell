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

  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentPrice = '';

  name: string = '';
  description: string = '';
  price: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onBtnClicked(): void {
    this.onSubmit.emit({
      id: '',
      name: this.name,
      description: this.description,
      price: Number(this.price),
      views: 0
    });
    this.router.navigateByUrl('/my-listings');
  }
}
