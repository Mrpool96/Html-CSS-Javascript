<<<<<<< HEAD
function cards(card){
    var count=0;
    switch(card){
        case 2:
        case 3:
        case 4: 
        case 5:
        case 6:
            count++;
            break;
            case 10:
            case 'A':
            case 'K':
            case 'Q': 
            case 'J':
                count--;
                break;
    }
    var holdbet="hold";
    if(count>0){
        holdbet="bet";
    }
    return count+ " "+holdbet;
}
cards(2); cards(6); cards('K'); cards('Q'); cards('A');
=======
function cards(card){
    var count=0;
    switch(card){
        case 2:
        case 3:
        case 4: 
        case 5:
        case 6:
            count++;
            break;
            case 10:
            case 'A':
            case 'K':
            case 'Q': 
            case 'J':
                count--;
                break;
    }
    var holdbet="hold";
    if(count>0){
        holdbet="bet";
    }
    return count+ " "+holdbet;
}
cards(2); cards(6); cards('K'); cards('Q'); cards('A');
>>>>>>> abd4eda4a65f0455143948c90949118ddc14f538
console.log(cards(6));