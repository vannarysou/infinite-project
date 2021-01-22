$(document).ready(function() {
    var tabs = $('.tab'),
        tabsCon = $('.tab-container'),
        leaderBar = $('.leaderboard-bar');

    tabs.addClass('inactive');
    tabs.first().removeClass('inactive');
    tabsCon.hide();
    tabsCon.first().show();

    tabs.click(function() {
        var selected = $(this).attr('id');

        if($(this).hasClass('inactive')) {
            tabs.addClass('inactive');
            $(this).removeClass('inactive');

            tabsCon.hide();
            $('#' + selected + 'container').fadeIn(1000);
        }
    });

    //Leader Bar//

    leaderBar.click(function(){
        tabs.addClass('inactive');
        $('#tab2').removeClass('inactive');

        tabsCon.hide();
        $('#tab2container').show();
    });

    //Top players list//

    var playerAmount = $('#top-players-table').find('tr').length;

        for (i = 0;i < playerAmount ;i++){
            var tableData = $('#top-players-table').find('tr').eq(i).find('td'),
            playerRank = tableData.eq(0).html(),
            playerAvatar = tableData.eq(1).html(),
            playerName = tableData.eq(2).html(),
            playerScore = tableData.eq(3).html();

        $('.player-score').eq(i).html(playerRank);
        $('.player-avatar').eq(i).html(playerAvatar).addClass('avatar-img');
        $('.player-name').eq(i).html(playerName);
        $('.player-points').eq(i).html(playerScore);
        
        $('.player').first().clone().appendTo('.top-players');

        }

        $('.player').last().remove(); 
        $('#top-players-table').remove();

    //Drag and drop//

    let dragging;
    
    $(document).mousemove(
        function(e) {
           let x = e.clientX,
               y = e.clientY;
               
               $('.dragging-area').css({'left':x , 'top':y});
        }
    );
    
    $('.friends-grid-2by').mousedown(
        function() {
            dragging = $(this).detach();
            dragging.appendTo('.dragging-area');
        }
    );

    $(document).mouseup(
        function() {
            dragging = $('.dragging-area').children().detach();
            dragging.appendTo('.redrop');
            dragging = null;
            $('.friends-list-container').removeClass('redrop');
        }
    );

    $('.friends-list-container').mouseup(
        function(){
            dragging.appendTo($(this));
            dragging = null;

        }
    );

    $('.friends-list-container').mousedown(
        function(){
            $(this).addClass('redrop');
        }
    );
});

