import {AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() search = new EventEmitter();
  @ViewChild('input') input: ElementRef;
  subscription = new Subscription();


  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    const inputSub = fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((res) => this.searchUser(this.input.nativeElement.value));

    this.subscription.add(inputSub);
  }

  searchUser(value) {
    this.search.emit(value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
