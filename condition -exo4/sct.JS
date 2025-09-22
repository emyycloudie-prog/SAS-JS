let nombre1= prompt ("entrez nombre 1");
let nombre2= prompt ("entrez nombre 2");
let operation= prompt ("entrez +;-;*;:/");

switch (operation) {
    case "+" :
        alert ("result :" + (+nombre1 + +nombre2));
        break ;
    case "-" :
        alert ("result :" +(+nombre1 - +nombre2));
        break;
        case "*" :
            alert ("result:" +(+nombre1 * +nombre2));
            break;
            case "/":
                if(nombre2 != 0){
                alert (nombre1 / nombre2);
                }else {
                    alert (" error")
                }
                break ;
            default:
                alert ("hadchi ma9RINAHCH")


}