$('#email-form').submit(function(){
    var email_nome = $('#email_nome').val();
    var email_email = $('#email_email').val();
    var email_telefone = $('#email_telefone').val();
    var email_assunto = $('#email_assunto').val();
    var email_mensagem = $('#email_mensagem').val();
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    $('#cad_nome,#cad_email,#cad_senha').attr('style','');
    if(!email_nome){
        $('#email_nome').css('border','1px solid red').focus();
        $('#email_msg').html('Favor preencher Nome Completo');
        return false;
    }
    if(!email_email){
        $('#email_email').css('border','1px solid red').focus();
        $('#email_msg').html('Favor preencher Email');
        return false;
    }
    if (!reg.test(email_email)){
        $('#email_email').css('border','1px solid red').focus();
        $('#email_msg').html('Email inválido!');
        return false;
    }
    if(!email_telefone){
        $('#email_telefone').css('border','1px solid red').focus();
        $('#email_msg').html('Favor preencher Telefone');
        return false;
    }
    if(!email_assunto){
        $('#email_assunto').css('border','1px solid red').focus();
        $('#email_msg').html('Favor preencher Assunto');
        return false;
    }
    if(!email_mensagem){
        $('#email_mensagem').css('border','1px solid red').focus();
        $('#email_msg').html('Favor preencher Mensagem');
        return false;
    }
    $('#email_nome,#email_email,#email_telefone,#email_assunto,#email_mensagem').attr('style','').val('');
    $('#email_msg').html('');
});
