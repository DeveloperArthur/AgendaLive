import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent implements OnInit {
  public liveForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<LiveFormDialogComponent>, public fb: FormBuilder,
    public liveService: LiveService) { }

  ngOnInit(): void {
    this.liveForm = this.fb.group({
      liveName: ['', [Validators.required]],
      channelName: ['', [Validators.required]],
      liveLink: ['', [Validators.required]],
      liveDate: ['', [Validators.required]],
      liveTime: ['', [Validators.required]],
    });
  }

  createLive(){
    console.log(this.liveForm.value)
    this.liveService.postLives(this.liveForm.value).subscribe(result => {});
    this.fecharDialogo();
  }

  cancel(): void {
    this.fecharDialogo();
  }

  fecharDialogo(){
    this.dialogRef.close();
    this.liveForm.reset;
  }

}
