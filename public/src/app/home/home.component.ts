import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private fragment: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    }

    ngAfterViewInit(): void {
     try {
       document.querySelector('#' + this.fragment).scrollIntoView();
     } catch (e) { }
    }
}
