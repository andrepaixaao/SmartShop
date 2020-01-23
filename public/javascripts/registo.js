function registo(){
    var nome=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    
    $.ajax({
        url:"/api/utilizador/registo",
        method : "post",
        contentType : "application/json",
        data : JSON.stringify({
            nome:nome,
            email:email,
            password:password,
            }),
        success: function(res, status){ 
            window.location.href='/';
        }
        
        , error : function() { alert(JSON.stringify('error')); }
        
        });
        
    };
    