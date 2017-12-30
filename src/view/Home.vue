<template>
    <div>
        <div class="search d1">
            <input type="text" placeholder="搜索从这里开始...">
            <div class="btn">生成短链接</div>
        </div>
        <div class="show-link">
            <p>sjsjsjsj</p>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
body{margin: 0;}
div.search {
    padding: 30px 0;
    position: relative;
    width: 600px;
    margin: 100px auto;

}


.d1 input {
    float:left;
    width: 75%;
    height: 42px;
    padding-left: 10px;
    border: 2px solid #7BA7AB;
    border-radius: 5px;
    outline: none;
    background: #F9F0DA;
    color: #9E9C9C;
}
.btn{
    float:right;
    margin-left:20px;
    height: 42px;
    line-height: 42px;
    border: 2px solid #7BA7AB;
    border-radius: 5px;
    width: 100px;
    background: #F9F0DA;
    color: #9E9C9C;
    cursor: pointer;
}
.show-link{
    margin: 100px 0px;
    position: relative;
    width: 600px;
    margin: 0 auto;
    border: 2px solid #7BA7AB;
    border-radius: 5px;
    p{
        color:#7BA7AB;
        font-size: 30px;
    }
}
</style>
