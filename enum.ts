enum Filepermission {
    Read=1,
    Write=2,
    ReadWrite=Read|Write,
}
console.log(Filepermission.Read)
console.log(Filepermission.Write)
console.log(Filepermission.ReadWrite)

// 2
enum Season{
    Summer,
    Winter,
    Spring,
    Autumn
}

const getSeasonMessage=(season:Season):string=>{
    switch (season){
        case Season.Summer:
        return "it's Summer holidays"
        default:
            return "dsfdsfdsf";
    }

    // if(season==0){
    //     return "it's Summer holidays"
    // }
    

}
console.log(getSeasonMessage(Season.Summer));


