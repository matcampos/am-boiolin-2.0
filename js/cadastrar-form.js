$('#cadastrar-form').submit(function(){
    var cad_nome = $('#cad_nome').val();
    var cad_email = $('#cad_email').val();
    var cad_senha = $('#cad_senha').val();
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    $('#cad_nome,#cad_email,#cad_senha').attr('style','');
    if(!cad_nome){
        $('#cad_nome').css('border','1px solid red').focus();
        $('#cad_msg').html('Favor preencher Nome Completo');
        return false;
    }
    if(!cad_email){
        $('#cad_email').css('border','1px solid red').focus();
        $('#cad_msg').html('Favor preencher Email');
        return false;
    }
    if (!reg.test(cad_email)){
        $('#cad_email').css('border','1px solid red').focus();
        $('#cad_msg').html('Email inválido!');
        return false;
    }
    if(!cad_senha){
        $('#cad_senha').css('border','1px solid red').focus();
        $('#cad_msg').html('Favor preencher Senha');
        return false;
    }
    $('#cad_nome,#cad_email,#cad_senha').attr('style','').val('');
    $('#cad_msg').html('');
    alert('Estamos em construção!!!');
    $('#cad_nome').focus();
    return false;
});
