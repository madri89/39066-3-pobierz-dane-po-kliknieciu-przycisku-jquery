console.log('Ajax Jquery - Warsztat - Pobierz dane po kliknięciu przycisku');

$(document).ready(function(){

        // Wariant 1
        $('#get-data').click(function(){
            $.get('https://akademia108.pl/api/ajax/get-post.php')
                .done(function(data){

                    let pId = $('<p></p>').text(`Post ID: ${data.id}`);
                    let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                    let pTitle = $('<p></p>').text(`Title ID: ${data.title}`);
                    let pBody = $('<p></p>').text(`Body ID: ${data.body}`);
                    let hr = $('<hr>');

                    let jqBody = $('body');
                    
                    jqBody.append(pId);
                    jqBody.append(pUserId);
                    jqBody.append(pTitle);
                    jqBody.append(pBody);
                    jqBody.append(hr);
                })
                .fail(function(error){
                    console.log(error);
                });
        });

        // Wariant 2
        $('#get-data').click(function(){
            $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
                .done(function(data){

                    let pId = $('<p></p>').text(`Post ID: ${data.id}`);
                    let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                    let pTitle = $('<p></p>').text(`Title ID: ${data.title}`);
                    let pBody = $('<p></p>').text(`Body ID: ${data.body}`);
                    let hr = $('<hr>');

                    let jqBody = $('body');
                    
                    jqBody.append(pId);
                    jqBody.append(pUserId);
                    jqBody.append(pTitle);
                    jqBody.append(pBody);
                    jqBody.append(hr);
                })
                .fail(function(error){
                    console.log(error);
                });
        });


});