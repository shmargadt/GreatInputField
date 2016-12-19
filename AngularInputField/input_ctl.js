var app = angular.module("AnulgarInput", []); 

app.controller("InputCtrl", function ($scope, $sce) {


 $scope.renderText = function (text) {
     var res = changeBiggerThanToQuote(text);
     res = changeAsteriskToBold(res);
     res = changeUnderScoreToItalic(res);
     $scope.result_text = $sce.trustAsHtml(res);
  };


 var changeBiggerThanToQuote = function (text) {
    if (!text) { return; }
    var res = '';
    var flag = false;
    for (var i = 0; i < text.length; i++) {
      if (text[i] === '>' && !flag) {
        res+= "&ensp;&ensp;&ensp;";
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

 var changeAsteriskToBold = function (text) {
    if (!text) { return; }
    var new_text = '';
    var res = '';
    var flag = false;
    new_text = text.replace(/(?:\r\n|\r|\n)/g, '<br />');
    for (var i = 0; i < new_text.length; i++) {
      if (new_text[i] === '*') {
        if (flag === false) {
          res += '<b>';
          flag = true;
        } else {
          res += '</b>';
          flag = false;
        }
      } else {
        res += new_text[i];
      }
    }
    return res;
 } 

 var changeUnderScoreToItalic = function (text) {
    if (!text) { return; }
    var new_text = '';
    var res = '';
    var flag = false;
    new_text = text.replace(/(?:\r\n|\r|\n)/g, '<br />');
    for (var i = 0; i < new_text.length; i++) {
      if (new_text[i] === '_') {
        if (flag === false) {
          res += '<i>';
          flag = true;
        } else {
          res += '</i>';
          flag = false;
        }
      } else {
        res += new_text[i];
      }
    }
    return res;
 } 


});