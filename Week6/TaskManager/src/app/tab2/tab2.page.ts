import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  taskForm: FormGroup;

  constructor(private builder: FormBuilder, private taskService: TaskService, private alertController: AlertController) {
    this.taskForm = this.builder.group({
      title: ['', [Validators.required]],
      description: [''],
      category: ['', [Validators.required]],
      task_date: ['', [Validators.required]],
      priority_level: ['', [Validators.required]],
      progress_level: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.taskService.add_task(this.taskForm.value).subscribe((result) => {
      this.showMessage("Success", "Task was successfully added");
      this.taskForm.reset();
    }, (err) => {
      this.showMessage("Error", "something went wrong");
    });
  }

  async showMessage(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    alert.present();
  }

  get titleFormControl() {
    return this.taskForm.get('title');
  }

  get categoryFormControl() {
    return this.taskForm.get('category');
  }
}
