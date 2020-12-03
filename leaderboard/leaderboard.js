$.ajax({
    type: "GET",
    url: "http://itwsteam5gamers.great-site.net/leaderboard/leaderboard.json",
    dataType: "json",
    success: function(responseData, status){
     var data = "<td>";
     document.title ='Beans';  
     $.each(responseData.winners, function(i, value) {
      data+='<tr>';
      data+= '<td>'+value.rank+'</td>';
      data+= '<td>'+value.name+'</td>';
      data+= '<td>'+value.saved+'</td>';
      data+= '<td>'+value.tanks+'</td>';
    });
    data += '</tr>';
    $('#leaders').html(data);
  }
  });