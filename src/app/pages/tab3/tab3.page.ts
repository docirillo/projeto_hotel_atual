import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivityService } from 'src/app/services/activity.service';
import { Activity } from 'src/app/interfaces/activity';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  private loading: any;
  public activities = new Array<Activity>();
  private activitiesSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private activityService: ActivityService,
    private toastCtrl: ToastController
    ) {
      this.activitiesSubscription = this.activityService.getActivities().subscribe(data => {
        this.activities = data;
      });
    }

ngOnInit() { }

ngOnDestroy() {
    this.activitiesSubscription.unsubscribe();
  }

  async logout() {
    await this.presentLoading();

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde...' });
    return this.loading.present();
  }

  async deleteActivity(id: string) {
    try {
      await this.activityService.deleteActivity(id);
    } catch (error) {
      this.presentToast('Erro ao tentar deletar');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

}
