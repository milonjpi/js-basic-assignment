function kilometerToMeter(kilometer){ 
    if(kilometer <= 0 || isNaN(Number(kilometer))){
        return "This is not a valid kilometer.";
    }
    else{
        var meter = kilometer * 1000;      
    } 
    return meter;
}


function budgetCalculator(watch, mobile, laptop){
    if(watch <= 0 || mobile <= 0 || laptop <= 0 || isNaN(Number(watch)) || isNaN(Number(mobile)) || isNaN(Number(laptop))){
        return "The quantity must be a valid number.";
    }
    else{
        var watchPrice = 50 * watch;
        var mobilePrice = 100 * mobile;
        var laptopPrice = 500 * laptop;  
        var totalBudget = watchPrice + mobilePrice + laptopPrice;     
    }
    return totalBudget;
}


function hotelCost(days){
    var totalCost = 0;
    if(days <= 0 || isNaN(Number(days))){
        return "This is not valid days."
    }
    else if(days <= 10){
        totalCost = days * 100;
    }
    else if(days <= 20){
        var firstCost = 10 * 100;
        var secondCost = (days-10) * 80;
        totalCost = firstCost + secondCost;
    }
    else{
        var firstCost = 10 * 100;
        var secondCost = 10 * 80;
        var thirdCost = (days-20) * 50;
        totalCost = firstCost + secondCost + thirdCost;
    }
    return totalCost;
}


function megaFriend(friends){
    var myBigFriend = friends[0];
    if(friends.length == 0 || Array.isArray(friends)){
        return "There is no friends available.";
    }
    else{
        for(var i=0; i < friends.length; i++){
            if(friends[i].length > myBigFriend.length){
                myBigFriend = friends[i];
            }
        }
    }
    return myBigFriend;
}