import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { TypingAnimationDirective } from '../../directives/typing-animation.directive';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { QuestionItem } from '../category/category.component.config';

@Component({
  selector: 'app-generate-answer-modal',
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule, TypingAnimationDirective],
  templateUrl: './generate-answer-modal.component.html',
  styleUrl: './generate-answer-modal.component.scss'
})
export class GenerateAnswerModalComponent implements OnInit {
  isLoading = false;

  constructor(
    public dialogRef: MatDialogRef<GenerateAnswerModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Pick<QuestionItem, 'question' | 'answer'>
  ) { }

  ngOnInit() {
    if (!this.data.answer) {
      this.regenerateAnswer();
    }
  }

  regenerateAnswer() {
    this.isLoading = true;
    setTimeout(() => {
      this.data.answer = 'New generated answer based on some API call or logic';
      this.isLoading = false;
    }, 2000);
  }
  saveAnswer() {
    this.dialogRef.close(this.data.answer);
  }
}
