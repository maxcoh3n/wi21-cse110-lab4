let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars:2
}


for (let name in statistics){
    if(name.substring(0,1).toLowerCase() == "r" || statistics[name] % 2 == 1){
        console.log(statistics[name])    
    }
}