import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {

  year: number;
  month: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.year = Number(this.route.snapshot.paramMap.get('year'));
    this.month = Number(this.route.snapshot.paramMap.get('month'));
  }

  viewAll() {
    this.router.navigate(['/']);
  }

}
