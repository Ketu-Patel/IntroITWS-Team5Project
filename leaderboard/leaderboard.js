$.ajax({
    type: "GET",
    url: "http://itwsteam5gamers.great-site.net/leaderboard/leaderboard.json",
    dataType: "json",
    success: function(responseData, status){
     var leads = "<td>";
     document.title ='Beans';  
     $.each(responseData.winners, function(i, value) {
      leads+='<tr>';
      leads+= '<td>'+value.rank+'</td>';
      leads+= '<td>'+value.name+'</td>';
      leads+= '<td>'+value.saved+'</td>';
      leads+= '<td>'+value.tanks+'</td>';
    });
    leads += '</tr>';
    $('#leaders').html(leads);
  }
  });