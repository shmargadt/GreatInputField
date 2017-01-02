var app = angular.module("AnulgarInput", []); 

app.controller("InputCtrl", function ($scope, $sce) {


 $scope.renderText = function (text) {
     var result_title = "<div class='result-title'> Result:</div>"; 
     var res = result_title + changeBiggerThanToQuote(text);
     res = makeSignToHtml(res, '*', '<b>', '</b>');
     res = makeSignToHtml(res, '_', '<i>', '</i>');
     if (!text) {$scope.result_text = ""; return;}
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

 var makeSignToHtml =   function (text, sign, start_tag, end_tag) {
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


});