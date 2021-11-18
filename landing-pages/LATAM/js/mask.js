$(function () { 
    var $Cpf = $("#cpf");
    $Cpf.mask('000.000.000-00', {reverse: false});
                
    var $Telefone = $("#telefone");
    $Telefone.mask('00 0000-0000', {reverse: true});
                
    var $Celular = $("#celular");
    $Celular.mask('00 00000-0000', {reverse: true});
                
    var $Cep = $("#cep");
    $Cep.mask('00000-000', {reverse: false});
    
    var $Data_Nascimento = $("#data-nascimento");
    $Data_Nascimento.mask('00/00/0000', {reverse: false});
    
});

