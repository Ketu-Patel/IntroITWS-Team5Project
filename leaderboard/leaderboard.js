$.ajax({
    type: "GET",
    url: "http://itwsteam5gamers.great-site.net/leaderboard/leaderboard.json",
    dataType: "json",
    success: function(responseData, status){
     var data = "<td>";
     document.title ='Beans';  
     $.each(responseData.winners, function(i, value) {
     // data+='<p>';
      data+= '<p>'+value.rank+'</p>';
      data+= '<p>'+value.name+'</p>';
      data+= '<p>'+value.saved+'</p>';
      data+= '<p>'+value.tanks+'</p>';
    });
    //data += '</p>';
    $('#leaders').html(data);
  }
  });