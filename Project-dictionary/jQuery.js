

function updateHtml(data){

  // console.log(data[0].definition);

  var showThis= "";
  for(var i=0; i<data.length; i++){
    var type= data[i].wordtype;
    var def= data[i].definition;
    showThis+= "<div class= 'row'>"+ (i+1) + "("+type+")"+ " :: "+def + ' </div> <hr>'
  }
  $("#show").html(showThis);

}