if(window.SimpleSlide){

new SimpleSlide({
    slide: "quote", // nome do atributo
    time: 5000 // tempo de transição
})

new SimpleSlide({
    slide: "portfolio", 
    time: 5000,
    nav: true
})

}

if(window.SimpleAnime){
    new SimpleAnime();
}


if(window.SimplForm){
new SimpleForm({
    form: ".formphp", //seletor formulario
    button: "#enviar", //seletor botão
    erro:"<div id='form-erro'><p>Um erro ocorreu, tente para o email contato@bikcrafit.com</p></div>", //mensagem erro
    sucesso: "<div id='form-sucesso><h2>Formulário enviado com sucesso</h2><p>Em breve entro em contato com você.</p></div>"
});
}