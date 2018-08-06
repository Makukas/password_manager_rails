function generatePassword(){

    var lenght = document.getElementById("PasswordLenght").value;
    var numbers1 = document.getElementById("numbers").checked;
    var smallLetters1 = document.getElementById("smallLetters").checked;
    var capitalLetters1 = document.getElementById("capitalLetters").checked;
    var specialChar1 = document.getElementById("specialChar").checked;
  
    if(numbers1 == false && smallLetters1 == false && capitalLetters1 == false && specialChar1 == false){
      swal({type: 'error', title: 'Oops...', text: "You didn't select any options!"})
      return;
    }
  
    if(lenght == 0){
      swal({type: 'error', title: 'Oops...', text: "Your password can't be nothing!"})
      return;
    }
    if(lenght >= 64){
      swal({type: 'error', title: 'Oops...', text: "Why would you need a password this long?"})
      return;
    }
  
    var num = [0,1,2,3,4,5,6,7,8,9];
    var smallChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w", "x", "y", "z"];
    var capChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X", "Y", "Z"];
    var specChar = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","/","?",">","<",",",".","+","-"];
  
    var password = "";
    var randomNumber;
    var randomNumber1;
    var i;
    var infiniteLoopStop = 0;
  
    for(i=1; i<=lenght; i){
      randomNumber = Math.floor(Math.random() * 4);
  
        if(randomNumber == 0 && numbers1 == true){
          randomNumber1 = Math.floor(Math.random() * 10);
          password += num[randomNumber1].toString();
          i++;
        }
  
        else if(randomNumber == 1 && smallLetters1 == true){
          randomNumber1 = Math.floor(Math.random() * 26);
          password += smallChar[randomNumber1];
          i++;
        }
  
        else if(randomNumber == 2 && capitalLetters1 == true){
          randomNumber1 = Math.floor(Math.random() * 26);
          password += capChar[randomNumber1];
          i++;
        }
  
        else if(randomNumber == 3 && specialChar1 == true){
          randomNumber1 = Math.floor(Math.random() * 22);
          password += specChar[randomNumber1];
          i++;
        }
        infiniteLoopStop++;
        if(infiniteLoopStop == 100){
          i = lenght + lenght;
        }
    }
  
  document.getElementById("PasswordValueForm").style.display = 'block';
  document.getElementById("Password").value = password;
  
  }
