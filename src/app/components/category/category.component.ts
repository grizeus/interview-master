import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { TruncatePipe } from "../../pipes/truncate.pipe";
import { MOCK_DATA, QuestionItem } from "./category.component.config";
import { MatDialog } from "@angular/material/dialog";
import { DeleteConfirmationModalComponent } from "../delete-confirmation-modal/delete-confirmation-modal.component";
import { Subject, takeUntil } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { get } from "lodash";

@Component({
  selector: "app-category",
  imports: [MatTableModule, MatButtonModule, TruncatePipe],
  templateUrl: "./category.component.html",
  styleUrl: "./category.component.scss",
})
export class CategoryComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ["position", "question", "actions", "answer"];
  dataSource = new MatTableDataSource<QuestionItem>();

  private destroy$ = new Subject<void>();

  constructor(public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe((param) => {
      const mocks = get(MOCK_DATA, param.get("categoryId") || "");
      if (mocks) {
        this.dataSource = mocks;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openDeleteDialog(question: QuestionItem): void {
    const dialogRef = this.dialog.open(DeleteConfirmationModalComponent, {
      width: "333px",
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log("The dialog was closed", result);
      if (result) {
        console.log("Question would be deleted.", question);
        // TODO - call the service for deleting an answer
      }
    });
  }
}
