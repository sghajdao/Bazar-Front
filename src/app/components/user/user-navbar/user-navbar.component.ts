import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription, map, startWith } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { KeywordsService } from 'src/app/services/keywords.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private userService:UserService,
    private keywordsService: KeywordsService,
  ) {}

  subscription: Subscription[] = []

  loggedInUser?:User;
  storeExist:boolean = false

  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions?: Observable<string[]>

  ngOnInit(): void {
    const email = this.userService.getLogedInUser()
    const sub:Subscription = this.userService.getUserByEmail(email).subscribe({
      next: user=> {
        this.loggedInUser = user;
        if (!user.store)
          this.storeExist = true
      }
    });
    this.subscription.push(sub)
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  searchQueryConvers() {
    if (this.myControl.value) {
      const sub: Subscription = this.keywordsService.getKeywords(this.myControl.value).subscribe(keywords=> {
        this.options = []
        keywords.forEach(key=> this.options.push(key.keyword))
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
      })
      this.subscription.push(sub)
    }
  }

  search() {
    if (this.myControl.value)
      this.router.navigateByUrl('/products/search/' + this.myControl.value)
  }

  storeSettings() {
    this.router.navigateByUrl('/settings/store')
  }

  logOut() {
    this.router.navigateByUrl('/login')
    localStorage.removeItem("token")
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub=> sub.unsubscribe())
  }
}
