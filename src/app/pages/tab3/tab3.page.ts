import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Activity } from 'src/app/interfaces/activity';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  private activities = new Array<Activity>();
  private activitiesSubscription: Subscription;

  constructor(private activitiesService: ActivityService) {
    this.activitiesSubscription = this.activitiesService.getActivities().subscribe(data => {
      this.activities = data;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.activitiesSubscription.unsubscribe();
  }

}
