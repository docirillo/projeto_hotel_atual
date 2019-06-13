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
    this.activitiesCollection = this.afs.collection<Activity>('Activities', ref => ref.orderBy('time', 'asc'));

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
    return this.activitiesCollection.add(activity);

  }

  getActivity(id: string) {
    return this.activitiesCollection.doc<Activity>(id).valueChanges();
  }

  updateActivity(id: string, activity: Activity) {
    return this.activitiesCollection.doc<Activity>(id).update(activity);

  }

  deleteActivity(id: string) {
    return this.activitiesCollection.doc(id).delete();
  }


}
