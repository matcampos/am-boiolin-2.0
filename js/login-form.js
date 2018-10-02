$('#login-form').submit(function(){
    var login_usuario = $('#login_usuario').val();
    var login_senha = $('#login_senha').val();
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    $('#login_usuario,#login_senha').attr('style','');
    if(!login_usuario){
        $('#login_usuario').css('border','1px solid red').focus();
        $('#login_msg').html('Favor preencher Email');
        return false;
    }
    if (!reg.test(login_usuario)){
        $('#login_usuario').css('border','1px solid red').focus();
        $('#login_msg').html('Email inválido!');
        return false;
    }
    if(!login_senha){
        $('#login_senha').css('border','1px solid red').focus();
        $('#login_msg').html('Favor preencher Senha');
        return false;
    }
    $('#login_usuario,#login_senha').attr('style','').val('');
    $('#login_msg').html('');
    alert('Estamos em construção!!!');
    $('#login_usuario').focus();
    return false;
});
