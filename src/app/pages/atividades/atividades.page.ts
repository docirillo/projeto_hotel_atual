import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivityService } from 'src/app/services/activity.service';
import { Activity } from 'src/app/interfaces/activity';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.page.html',
  styleUrls: ['./atividades.page.scss'],
})
export class AtividadesPage implements OnInit {
  private loading: any;
  public activities = new Array<Activity>();
  private activitiesSubscription: Subscription;

  constructor(
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
