var num = 123;
var check = function (num) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (num == 123) {
                resolve(567);
            }
            else {
                reject(100);
            }
        }, 10000);
    });
};
check(num)
    .then(function (res) {
    console.log("the number is ", res);
})
    .catch(function (err) {
    console.log("Error", err);
});
