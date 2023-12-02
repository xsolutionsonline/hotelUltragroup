import { MatSnackBar } from '@angular/material/snack-bar';

export class Utilities {
  static showSnackbar(
    snackBar: MatSnackBar,
    message: string,
    duration: number = 3000,
    verticalPosition: 'top' | 'bottom' = 'bottom',
    panelClass: string[] = []
  ): void {
    snackBar.open(message, 'Cerrar', {
      duration,
      verticalPosition,
      panelClass,
    });
  }
}
