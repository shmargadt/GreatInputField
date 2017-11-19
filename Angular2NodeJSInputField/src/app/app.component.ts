import { Component } from '@angular/core';
import { NgModule }      from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  before_rendering: string = 'app';
  theHtmlResultString: string = "";
  inputField: HTMLInputElement = null;
  inputFieldString: string = '';

  converText(): void {
    if (!this.inputFieldString) { this.theHtmlResultString = ""; return; }
    this.theHtmlResultString = this.renderText(this.inputFieldString);
  }

  renderText(text): string {
    var res = this.changeBiggerThanToQuote(text);
    res = this.makeSignToHtml(res, '*', '<b>', '</b>');
    res = this.makeSignToHtml(res, '_', '<i>', '</i>');
    return res;
  };

  changeBiggerThanToQuote(text): string {
    if (!text) { return; }
    var res = '';
    var flag = false;
    for (var i = 0; i < text.length; i++) {
      if (text[i] === '>' && !flag) {
        res += "&ensp;&ensp;&ensp;";
        var flag = true;
      } else {
        if (text[i] !== ' ') {
          var flag = true;
        }
        res += text[i];
      }
    }
    return res;
  }

  makeSignToHtml(text, sign, start_tag, end_tag): string {
    if (!text) { return; }
    var new_text = '';
    var res = '';
    var flag = false;
    new_text = text.replace(/(?:\r\n|\r|\n)/g, '<br />');
    for (var i = 0; i < new_text.length; i++) {
      if (new_text[i] === sign) {
        if (flag === false) {
          res += start_tag;
          flag = true;
        } else {
          res += end_tag;
          flag = false;
        }
      } else {
        res += new_text[i];
      }
    }
    return res;
  }
}
