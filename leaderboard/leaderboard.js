$.ajax({
    type: "GET",
    url: "leaderboard.json",
    dataType: "json",
    success: function(responseData, status){
     var winners = "<td>";
     $.each(responseData.winners, function(i, value) {
        winners+='<tr>';
        winners+= '<td>'+value.rank+'</td>';
        winners+= '<td>'+value.name+'</td>';
        winners+= '<td>'+value.saved+'</td>';
        winners+= '<td>'+value.tanks+'</td>';
    });
    output += "</tr>";
    $('#leaderboard').html(winners);
  }
  });