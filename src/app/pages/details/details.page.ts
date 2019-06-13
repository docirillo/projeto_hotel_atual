import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import {
  LoadingController,
  ToastController,
  NavController
} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Activity } from 'src/app/interfaces/activity';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss']
})
export class DetailsPage implements OnInit {
  private activityId: string = null;
  public activity: Activity = {};
  private loading: any;
  private activitySubscription: Subscription;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private activityService: ActivityService,
    private navCtrl: NavController
  ) {
    this.activityId = this.activatedRoute.snapshot.params['id'];

    if (this.activityId) {
      this.loadActivity();
    }
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.activitySubscription) {
      this.activitySubscription.unsubscribe();
    }
  }

  loadActivity() {
    this.activitySubscription = this.activityService
      .getActivity(this.activityId)
      .subscribe(data => {
        this.activity = data;
      });
  }

  async saveActivity() {
    await this.presentLoading();

    this.activity.userId = this.authService.getAuth().currentUser.uid;

    if (this.activityId) {
      try {
        await this.activityService.updateActivity(
          this.activityId,
          this.activity
        );
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/dashboard');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    } else {
      this.activity.createdAt = new Date().getTime();
      try {
        await this.activityService.addActivity(this.activity);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/dashboard');
      } catch (error) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Por favor, aguarde...'
    });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}
