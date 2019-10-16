import { Component, OnInit, Inject } from '@angular/core';
import {MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {FirebaseService} from '../shared/firebase.service';

@Component({
  selector: 'app-viewsettings',
  templateUrl: './viewsettings.component.html',
  styleUrls: ['./viewsettings.component.scss']
})
export class ViewsettingsComponent implements OnInit {
  theme;

  constructor(private snackBar: MatSnackBar, private dialogRef: MatDialogRef<ViewsettingsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog,
              private fbs: FirebaseService) { }

  ngOnInit() {
  }

  selectTheme() {
    console.log('Opening the Multi-Media Component');
    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = document.getElementById('settings').getBoundingClientRect();
    const right = bodyRect.right - elemRect.right;
    const top = elemRect.top - bodyRect.top;
    const dialogRef = this.dialog.open(ViewsettingsComponent, {
      // This is only if we wish to send parameters to the popup component
      data: {
        UserId: 0,
        ContactId: 0
      },
      panelClass: 'MultimediaCSS',
      position: { right: right + 'px', top: top + 'px' }
    });

    // If wish to apply a action after popup close
    dialogRef.afterClosed().subscribe(() => {
      console.log('Multi-Media Component popup has closed');
    });
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

  logOut() {
    this.fbs.Logoff(localStorage.getItem('currentUserId'));
    this.dialogRef.close();
  }
}
