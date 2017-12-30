<template>
    <div>
        跳转中……
    </div>
</template>
<script>
export default {
    data(){
        return{
            shortLink:'',
            longLink:''
        }
    },
    created(){
        this.shortLink = this.$route.params.link || ''
        if(this.shortLink === ''){
            alert('链接错误')
        }else{
            this.getLink()
        }
    },
    methods:{
        getLink(){
            this.$api_get({
                url:'/getLongLink',
                data:{
                    shortLink:this.shortLink
                }
            }).then(res=>{
                if(res.code === 200){
                    window.location.href = res.longLink
                }else{
                    alert(res.msg)
                    this.$router.push('/')
                }
            })
        }
    }
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
