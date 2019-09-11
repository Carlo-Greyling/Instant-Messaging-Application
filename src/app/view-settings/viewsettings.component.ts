import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-viewsettings',
  templateUrl: './viewsettings.component.html',
  styleUrls: ['./viewsettings.component.scss']
})
export class ViewsettingsComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private dialogRef: MatDialogRef<ViewsettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  Close() {
    this.dialogRef.close();
  }

  testSnackBar() {
    this.openSnackBar('Keep calm and Code', 'Close');
  }

  // We will use this message method to tell the user if the message where send successfully or not
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
