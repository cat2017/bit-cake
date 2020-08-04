var MyValidate = {};
MyValidate.IsEmail = function (value) {

    return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value);
}
MyValidate.CheckUserName = function (value) {
    return /[^0-9a-zA-Z]+/.test(value);
}
MyValidate.IsMobile = function (value) {
    if (value.length != 11) {
        return false;
    }
    else if (/[^0-9]+/.test(value)) {
        return false;
    }
    return true;

}
MyValidate.IsInZhWord = function (value) {

    return /[\u4e00-\u9fa5]+/.test(value);

}
MyValidate.IsNumber = function (value) {

    return /^\d+(\.\d+)?$/.test(value);

}
