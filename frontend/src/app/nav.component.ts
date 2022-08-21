import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { QuestionComponent } from './question.component';

@Component({
  selector: 'nav',
  template: `<mat-toolbar color="primary">
                <button mat-button routerLink="/">My Quiz</button>
                <button mat-button routerLink="/play">Play</button>
                <button mat-button routerLink="/question">Question</button>
                <button mat-button routerLink="/questions">Questions</button>
                <button mat-button routerLink="/quiz">Quizzes</button>
                <span style="flex: 1 1 auto"></span>
                <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/register">Register</button>
                <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/login">Login</button>
                <button *ngIf="auth.isAuthenticated" mat-button (click)="auth.logout()">Logout</button>
            </mat-toolbar>
        `,
})
export class NavComponent {
  constructor(protected auth: AuthService) {}
}
