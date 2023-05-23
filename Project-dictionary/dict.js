
// request based on jquery
$(document).ready(()=>{
  $('#lookup').click(()=>{
    var word= $('#word').val();
    $.ajax({
      "url": "http://localhost:2021/?word="+word, 
      //"data": word,  // user input to be send to the server, ?word='' with not using query string
      "type": "GET",
      "success": (data)=>{
        window.updateHtml(data);
      }, 
      "error": ()=> console.log('Error ocured from the server')
      });
  })

}
);

$(document).ready(()=>{
  $("#word").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#lookup").click();
    }
  });
})

// function showHTML(data){
//   // console.log(data);
//   window.updateHtml(data);

// }

// function errorHandler(){
//   console.log('Erroe ocured from the server');
// }


