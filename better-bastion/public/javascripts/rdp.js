var socket = io();
$('#connect').click(function () {
    user = $('#username').val();
    dom = $('#domain').val();
    pass = $('#password').val();
    serv = $('#server').val();
    var input = {
        domain: dom,
        username: user,
        password: pass,
        server: serv
    }
    socket.emit('newConnection', input);
    socket.on('bitmap', function (bitmap) {
        $('#rdpWindow').css("background-image", bitmap);  
    })
})