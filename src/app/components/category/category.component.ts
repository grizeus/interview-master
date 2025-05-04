import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { TruncatePipe } from "../../pipes/truncate.pipe";
import { MOCK_DATA, QuestionItem } from "./category.component.config";
import { MatDialog } from "@angular/material/dialog";
import { DeleteConfirmationModalComponent } from "../delete-confirmation-modal/delete-confirmation-modal.component";

@Component({
  selector: "app-category",
  imports: [MatTableModule, MatButtonModule, TruncatePipe],
  templateUrl: "./category.component.html",
  styleUrl: "./category.component.scss",
})
export class CategoryComponent {
  displayedColumns: string[] = ["position", "question", "actions", "answer"];
  dataSource = new MatTableDataSource<QuestionItem>(MOCK_DATA);

  constructor(public dialog: MatDialog) { }

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
