var loguser=document.getElementById('loguser');
loguser.addEventListener('keyup', checkunamevalidity);
            function checkunamevalidity(e){
                var unameval=loguser.value;
                var validformat = /^[A-Za-z]{4,30}[0-9_]+[-Za-z0-9]*$/;

                if(validformat.test(unameval)){
                    loguser.classList.add('is-valid');
                    loguser.classList.remove('is-invalid');
                }
                else{
                    loguser.classList.add('is-invalid');
                    loguser.classList.remove('is-valid');
                }
            }
         
            var lpassword=document.getElementById('logpass');
            lpassword.addEventListener('keyup', checklogpass);
                           function checklogpass(e){
                              var lpassval=lpassword.value;
                             var lpasscheck=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
                                                                             
                             if(lpasscheck.test(lpassval)){
                                lpassword.classList.add('is-valid');
                                lpassword.classList.remove('is-invalid');
                                 }
                             else{
                                lpassword.classList.add('is-invalid');
                                lpassword.classList.remove('is-valid');
                                  }
                                 }