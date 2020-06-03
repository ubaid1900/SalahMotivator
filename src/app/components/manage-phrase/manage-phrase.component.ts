import { Component, OnInit, Input } from '@angular/core';
import { Phrase } from '../models/phrase';
import { PhraseService } from '../services/phrase.service';
import { ConfirmationDialogService } from '../services/confirmation-dialog.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-manage-phrase',
  templateUrl: './manage-phrase.component.html',
  styleUrls: ['./manage-phrase.component.css']
})
export class ManagePhraseComponent implements OnInit {
  @Input() cssClass: string;
  @Input() phrase: Phrase;
  constructor(private phraseService: PhraseService
    , private confirmationDialogService: ConfirmationDialogService
    , private formBuilder: FormBuilder) { }

  editPhraseForm: FormGroup;
  ngOnInit() {
    this.editPhraseForm = this.formBuilder.group({
      id: [this.phrase.id],
      caption: [this.phrase.caption, Validators.compose([Validators.required, Validators.maxLength(10)])],
      text: [this.phrase.text, Validators.compose([Validators.required])],
    });
  }
  updatePhrase(phrase: Phrase) {
    console.log('caption is:' + phrase.caption);
    console.log('text is:' + phrase.text);
    this.phraseService.updatePhrase(phrase);
  }
  public openConfirmationDialog(phrase: Phrase) {
    const message: string = 'Do you really want to delete the phrase ' + phrase.caption + '?';
    this.confirmationDialogService.confirm('Please confirm..', message, 'Yes', 'probably not', 'lg')
      .then((confirmed) => {
        console.log('User confirmed:', confirmed);
        this.phraseService.deletePhrase(phrase);
        this.phraseService.getPhrases();
      })
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
}
