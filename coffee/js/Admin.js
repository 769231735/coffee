// 请求的假数据,正常情况下是发送ajax请求给后台，后台获取数据，然后ajax成功的回调函数接收
$.ajax({
    type:"GET",
    url:"data/data.json",
    data:{
    },
    success:function(res){
        console.log(res);
        var str = "";
        for (var i = 0; i < res.length; i++) {
            str+= `
            <tr>
                <td>${res[i].id}</td>
                <td>${res[i].username}</td>
                <td>${res[i].password}</td>
                <td>${res[i].phoneNum}</td>
                <td>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-id=${res[i].id} data-target="#myModal" data-username=${res[i].username}>编辑</button>
                    <button data-username=${res[i].username} data-id=${res[i].id}  class="btn btn-danger btn-sm" data-toggle="modal"  data-target="#delData" >删除</button>
                </td>
            </tr>
            `;
        }
        var v = $("table").html($("table").html()+str);
    }
})
// 添加数据
$("#add").click(function(){
    var username = $("#username").val();
    var password = $("#password").val();
    var phoneNum = $("#phoneNum").val();
    // 发送ajax请求将数据存入数据库
    // $.ajax({
    //     type:"GET",
    //     url:"",//这里写请求后台的地址
    //     data:{
    //         username:username,
    //         password:password,
    //         phoneNum:phoneNum
    //     },
    //     success:function(res){
    //
    //     }
    // });
    alert("发送ajax请求将数据存入数据库");
})

// 模态框的js操作及其数据传递
var id = "";
$('#myModal').on('show.bs.modal', function (event) {
var button = $(event.relatedTarget);
// 获取自定义属性的值
var username = button.data('username')
id = button.data("id");

console.log(id);
var modal = $(this)
modal.find('.modal-title').html('修改<strong>&nbsp;&nbsp;'+username+'</strong>&nbsp;&nbsp;用户的信息')
// modal.find('.modal-body input').val(recipient)
})

// 模态框确认修改按钮
$("#sureModify").click(function(){
    var username = $("#username1").val();
    var password = $("#password1").val();
    var phoneNum = $("#phoneNum1").val();
    console.log(id);
    // 这里通过ajax请求，将获得的id传到后台，然后对数据库里的数据进行修改
    // $.ajax({
    //     type:"GET",
    //     url:"",//这里写请求后台的地址
    //     data:{
    //         id:id,
    //         username:username,
    //         password:password,
    //         phoneNum:phoneNum
    //     },
    //     success:function(res){
    //
    //     }
    // });
    alert( '这里通过ajax请求，将获得的id等数据传到后台，然后对数据库里的数据进行修改');
    $('#myModal').modal('hide')
})

// 模态框确认删除
var delId = "";
$('#delData').on('show.bs.modal', function (event) {
var button = $(event.relatedTarget);
// 获取自定义属性的值
var username = button.data('username')
delId = button.data("id");

console.log(delId);
var modal = $(this)
modal.find('.modal-title').html('确认删除<strong>&nbsp;&nbsp;'+username+'</strong>&nbsp;&nbsp;用户的信息？')
// modal.find('.modal-body input').val(recipient)
})

// 模态框确认删除按钮
$("#sureDel").click(function(){
    console.log(id);
    // 这里通过ajax请求，将获得的id传到后台，然后对数据库里的数据进行修改
    $.ajax({
        type:"GET",
        url:"",//这里写请求后台的地址
        data:{
            delId:delId
        },
        success:function(res){
            // 成功的回调
        }
    });
    alert( '这里通过ajax请求，将获得的delId等数据传到后台，然后对数据库里的数据进行删除');
    $('#delData').modal('hide')
})
