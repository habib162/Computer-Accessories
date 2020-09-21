// function validation(){


//     var fullname=document.getElementById('fname').value;
//     var Username=document.getElementById('uname').value;
//     var Email=document.getElementById('email').value;
//     var phonenum=document.getElementById('phone').value;
//     var password=document.getElementById('pwd').value;
//     var cpassword=document.getElementById('cpwd').value;

//     form.addEventListener('SIGN UP',(E) => {
//       e.preventDefault();
//     });
    
//     var fnamecheck=/^[A-Za-z. ]{3,30}$/;
//     var unamecheck=/^[A-A-Za-z0-9_]{4,30}$/
//     var emailcheck=/^[A-Za-z0-9_]{3,}[@]{1}[A-Za-z]{3,6}[.]{1}[A-Za-z.]{2,}$/;
//     var phonenumcheck=/ ^[0-9]{11}$/;
//     var passcheck=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

//     if(fnamecheck.test(fullname)){
//       document.getElementById('namerror').innerHTML="";
//     }
//     else{
//       document.getElementById('namerror').innerHTML="** Required Name";
//       return false;
//     }
//     if(unamecheck.test(Username)){
//       document.getElementById('usernamerror').innerHTML="";
//     }
//     else{
//       document.getElementById('usernamerror').innerHTML="** Username Invalid";
//       return false;
//     }
//     if(emailcheck.test(Email)){
//       document.getElementById('emailerror').innerHTML="";
//     }
//     else{
//       document.getElementById('emailerror').innerHTML="** Email Invalid";
//       return false;
//     }
//     if(phonenumcheck.test(phonenum)){
//       document.getElementById('numbererror').innerHTML="";
//     }
//     else{
//       document.getElementById('numbererror').innerHTML="** phone number Invalid";
//       return false;
//     }

//       if(passcheck.test(password)){
//       document.getElementById('passerror').innerHTML="";
//     }
//     else{
//       document.getElementById('passerror').innerHTML="** password Invalid";
//       return false;
//    }

//    if(password.match(cpassword)){
//      document.getElementById('cpasserror').innerHTML=" ";
//    }
//    else{
//      document.getElementById('cpasserror').innerHTML="** password doesn't match";
//      return false;
//    }

//   }

var fullname=document.getElementById('fname');
fullname.addEventListener('keyup', checkfname);
            function checkfname(e){
                var fnameval=fullname.value;
                var fnamecheck=/^[A-Za-z. ]{4,30}$/;

                if(fnamecheck.test(fnameval)){
                    fullname.classList.add('is-valid');
                    fullname.classList.remove('is-invalid');
                }
                else{
                    fullname.classList.add('is-invalid');
                    fullname.classList.remove('is-valid');
                }
            }
            var username=document.getElementById('uname');
            username.addEventListener('keyup', checkuname);
                        function checkuname(e){
                            var unameval=username.value;
                            var unamecheck=/^[A-Za-z]+[0-9_]+[-Za-z0-9]*$/;
            
                            if(unamecheck.test(unameval)){
                                username.classList.add('is-valid');
                                username.classList.remove('is-invalid');
                            }
                            else{
                                username.classList.add('is-invalid');
                                username.classList.remove('is-valid');
                            }
                        }

 var email=document.getElementById('email');
 email.addEventListener('keyup', checkemail);
                function checkemail(e){
                     var emalival=email.value;
                     var emailcheck=/^[A-Za-z0-9_]{3,}[@]{1}[A-Za-z]{3,6}[.]{1}[A-Za-z.]{2,}$/;
            
                     if(emailcheck.test(emalival)){
                        email.classList.add('is-valid');
                        email.classList.remove('is-invalid');
                     }
                     else{
                        email.classList.add('is-invalid');
                        email.classList.remove('is-valid');
                         }
                      }
                      var phonenum=document.getElementById('phone');
                      phonenum.addEventListener('keyup', checkphone);
                                     function checkphone(e){
                                          var pnumval=phonenum.value;
                                          var pnumcheck=/^([01]|\+88)?\d{11}$/;
                                 
                                          if(pnumcheck.test(pnumval)){
                                            phonenum.classList.add('is-valid');
                                            phonenum.classList.remove('is-invalid');
                                          }
                                          else{
                                            phonenum.classList.add('is-invalid');
                                            phonenum.classList.remove('is-valid');
                                              }
                                            }

                            var password=document.getElementById('pwd');
                             password.addEventListener('keyup', checkpass);
                                            function checkpass(e){
                                               var passval=password.value;
                                              var passcheck=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
                                                                                              
                                              if(passcheck.test(passval)){
                                                   password.classList.add('is-valid');
                                                   password.classList.remove('is-invalid');
                                                  }
                                              else{
                                                  password.classList.add('is-invalid');
                                                  password.classList.remove('is-valid');
                                                   }
                                                
                                                 var cpassword=document.getElementById('cpwd');
                                                   cpassword.addEventListener('keyup',checkcpass);
                                                   function checkcpass(e){
                                                       var cpassval=cpassword.value;
                                                        if(cpassval.match(passval)){
                                                            cpassword.classList.add('is-valid');
                                                            cpassword.classList.remove('is-invalid');
                                                        }
                                                        else{
                                                            cpassword.classList.add('is-invalid');
                                                            cpassword.classList.remove('is-valid');
                                                        }
                                                   }
                                                  }
                                                                                   
              
