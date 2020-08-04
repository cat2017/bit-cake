function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    var id = getQueryStringId();
    if (id != null && name.toLowerCase() == "id") return id;
    return null;
}
function getQueryStringId() {
    var url = window.location.href;
    if (url.indexOf('?') < 0) {
        var len = url.lastIndexOf('/') + 1;
        var id = url.substr(len);
        console.log(id);
        return id;
    }
    return null;
}

//Json 转化为 2=2&3=4 拼接
function JsonConvertUrlParms(json) {
    var str = "";
    for (var m in json) {
        var value = json[m];
        if (value instanceof Array) {

            for (var item in value) {
                str += m + "=" + value[item] + "&"
            }

        } else {
            str += m + "=" + value + "&"
        }

    }
    if (str.length > 0)
        str = str.substring(0, str.length - 1);
    return str;
}
function flash(obj) {

    var that = $(obj);
    that.find("img").attr("src", "/Unitl/ValidateImgCode.ashx?1=" + Math.random());
}
function AjaxForm($Vue, url, data, callback) {
    var loading;
    $.ajax({
        url: url,
        data: data,
        type: "post",
        dataType: "json",
        beforeSend: function (XMLHttpRequest) {
            loading = $Vue.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
        },
        complete: function (XMLHttpRequest, textStatus) {
            loading.close();
        },
        success: function (data, textStatus) {
            callback(data, textStatus);
            loading.close();
        },
        error: function (data, textStatus) {
            $Vue.$message.error('繁忙中...,请稍后重试！');
        }
    });

}