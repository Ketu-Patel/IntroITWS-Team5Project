$.ajax({
    type: "GET",
    url: "http://localhost/IntroITWS-Team5Project/leaderboard/leaderboard.json",
    dataType: "json",
    success: function(responseData, status){
      var data =' <table id="leaderboard" class ="leaderboard"><tr>';
        data +='<th>Rank</th>';
        data+='<th>Name</th>';
        data+='<th>Survivor?</th>';
        data+='<th>Oxygen Tanks left</th>';
        data+='</tr>';    
     $.each(responseData.winners, function(i, value) {
      data+='<tr>';
      data+= '<td>'+value.rank+'</td>';
      data+= '<td>'+value.name+'</td>';
      data+= '<td>'+value.saved+'</td>';
      data+= '<td>'+value.tanks+'</td>';
    });
    data += '</tr></table>';
    $('#table').html(data);
  }
  });