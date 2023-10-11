import {Component} from '@angular/core';
import {PaginationService} from "./pagination.service";
import {BehaviorSubject, Observable, of, switchMap} from "rxjs";
import {faGear} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  faGear = faGear;

  currentPage$ = new BehaviorSubject<number>(1);
  data$ = this.currentPage$.pipe(
    switchMap(page => this.paginationService.getPages(page))
  );

  constructor(private paginationService: PaginationService) {}

  onNext(){
    this.currentPage$.next(this.currentPage$.value + 1)
  }

  onPrevious(){
    if (this.currentPage$.value > 1){
      this.currentPage$.next(this.currentPage$.value - 1)
    }
  }
}
