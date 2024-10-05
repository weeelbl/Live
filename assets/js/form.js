
function handleSubmit() {
    // 提交表单到 Google 表单
    document.getElementById('bootstrapForm').submit();

    // 提交后跳转到自定义页面
    setTimeout(function() {
        window.location.href = './thankyou/'; // 自定义感谢页面的 URL
    }, 500); // 可根据需要调整延时
}
