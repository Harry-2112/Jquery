$('#btn').click(function () { 
    var objUser = {
        name:$('#name').val(),
        lastname:$('#lastName').val(),
        mail:$('#email').val(),
        genero:$('#genero').val(),
        cumple:$('#cumple').val(),
        telefono:$('#telefono').val()
    }
    alert("Su nombre es "+objUser.name+"  su apellido "+objUser.lastname+" su email es "+objUser.mail+" de genero "+objUser.genero+" y su cumpleaños es "+ objUser.cumple+' y tu telefono es '+objUser.telefono) 
});