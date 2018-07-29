//Register input component
Vue.component('input-component', {
  template: '<div>' +
              '<div class="title"> MY GREAT INPUT </div>' +
              '<input v-model="inputText" />' +
              '<div class="instr"> *bold* _italics_  >qoute </div>' +
              '<div @click="renderText" class="convert-btn">Convert text</div>' +
              '<div class="result" v-html="resultText"></div>' +
              '<div class="footer">&copy; Created By Tomer Shmargad - Learning By Doing, 2016 </div>' +
            '</div>', 
  data: function() {
    return {
      inputText: '',
      resultText: ''
    }
  },
  methods: {
    renderText () {
      const text = this.inputText;
      const result_title = "<div class='result-title'> Result:</div>"; 
      let res = result_title + this.changeBiggerThanToQuote(text);
      res = this.makeSignToHtml(res, '*', '<b>', '</b>');
      res = this.makeSignToHtml(res, '_', '<i>', '</i>');
      if (!text) {this.resultText = ""; return;}
      this.resultText = res
    },
    changeBiggerThanToQuote (text) {
      if (!text) { return; }
      let res = '';
      let flag = false;
      for (let i = 0; i < text.length; i++) {
        if (text[i] === '>' && !flag) {
          res+= "&ensp;&ensp;&ensp;";
          flag = true;
        } else {
          if (text[i] !== ' ') {
            flag = true;
          }
          res += text[i];
        }
      }
      return res;
    },
    makeSignToHtml (text, sign, startTag, endTag) {
      if (!text) { return; }
      let newText = '';
      let res = '';
      let flag = false;
      newText = text.replace(/(?:\r\n|\r|\n)/g, '<br />');
      const openAndCloseSign = 2
      const numOfSigns = text.split(sign).length -1
      if ( numOfSigns !== openAndCloseSign ) { return newText ;} 
      for (var i = 0; i < newText.length; i++) {
        if (newText[i] === sign) {
          if (flag === false) {
            res += startTag;
            flag = true;
          } else {
            res += endTag;
            flag = false;
          }
        } else {
          res += newText[i];
        }
      }
      return res;
    } 
  }
});

//Root Instance
new Vue({
  el: '#app',
  data: {},
})