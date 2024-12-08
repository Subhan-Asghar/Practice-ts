var Filepermission;
(function (Filepermission) {
    Filepermission[Filepermission["Read"] = 1] = "Read";
    Filepermission[Filepermission["Write"] = 2] = "Write";
    Filepermission[Filepermission["ReadWrite"] = 3] = "ReadWrite";
})(Filepermission || (Filepermission = {}));
console.log(Filepermission.Read);
console.log(Filepermission.Write);
console.log(Filepermission.ReadWrite);
// 2
var Season;
(function (Season) {
    Season[Season["Summer"] = 0] = "Summer";
    Season[Season["Winter"] = 1] = "Winter";
    Season[Season["Spring"] = 2] = "Spring";
    Season[Season["Autumn"] = 3] = "Autumn";
})(Season || (Season = {}));
var getSeasonMessage = function (season) {
    switch (season) {
        case Season.Summer:
            return "it's Summer holidays";
        default:
            return "dsfdsfdsf";
    }
    // if(season==0){
    //     return "it's Summer holidays"
    // }
};
console.log(getSeasonMessage(Season.Summer));
