const validate = (value, rules)=>{
    let isValid = true;
    for(let rule in rules){
        switch(rule){
            case "required" : isValid = isValid && isEmpty(value);
            break;
            case "isEmail" : isValid = isValid && isEmail(value);
            break;
            case "isPhoneNumber": isValid = isValid && isPhoneNumber(value);
            break;
            default : isValid = true
        }
    }
    return isValid;
}

const isEmpty = (value)=>{
   return value.trim().length > 0;
}

const isEmail = (value)=>{
  return  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value);
}

const isPhoneNumber = (value) => {
   return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value)

}

export default validate;