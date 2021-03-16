function equation(str) {
    let str2 = str;
    let text = new Array();
    
    recer = (str) => {
      if (str.length != 0) {
        if (str[0] == "+" || str[0] == "-" || str[0] == "*") {
          text[text.length] = str[0];
          str = str.replace(text[text.length - 1], "");
        } else {
          text[text.length] = parseInt(str);
          str = str.replace(text[text.length - 1], "");
        }
        return recer(str);
      }
    };
  
    Mul = () => {
      if (
        "*" ==
        text.find((f) => {
          return f == "*";
        })
      ) {
        let len = text.indexOf("*");
        text[len - 1] = parseInt(text[len - 1]) * parseInt(text[len + 1]);
        text.splice(len, 2);
        return Mul();
      }
    };
  
    subAdd = () => {
      if (text.length != 1) {
        if (text[1] == "+") {
          text[0] = text[0] + text[2];
          text.splice(1, 2);
        } else if (text[1] == "-") {
          text[0] = text[0] - text[2];
          text.splice(1, 2);
        }
  
        return subAdd();
      }
    };
  
    recer(str);
    Mul();
    subAdd();
    return text[0];
  }
  
  console.log(equation("1+1+1+1+1"));
  console.log(equation("7*4-2"));
  console.log(equation("1+1"));
  console.log(equation("1+1*5*4-5-7"));