import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Activity } from '../interfaces/activity';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private activitiesCollection: AngularFirestoreCollection<Activity>;

  constructor(private afs: AngularFirestore) {
    this.activitiesCollection = this.afs.collection<Activity>('Activities');

  }

  getActivities() {
    return this.activitiesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }

  addActivity(activity: Activity) {

  }

  getActivity(id: string) {

  }

  updateActivity(id: string, activity: Activity) {

  }

  deleteActivity(id: string) {

  }


}
