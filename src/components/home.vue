
<template>
    <div class="main">
        <div class="top">
            <Button >重玩</Button>&nbsp;&nbsp;
            <span>分数</span>
        </div>

        <div class="back">
            <div class="m" id="m-0-0">
                <div class="moudel" v-show="a00">{{a00}}</div>
            </div>
            <div class="m" id="m-0-1">
                <div class="moudel" v-show="a01">{{a01}}</div>
            </div>
            <div class="m" id="m-0-2">
                <div class="moudel" v-show="a02">{{a02}}</div>
            </div>
            <div class="m" id="m-0-3">
                <div class="moudel" v-show="a03">{{a03}}</div>
            </div>

            <div class="m" id="m-1-0">
                <div class="moudel" v-show="a10">{{a10}}</div>
            </div>
            <div class="m" id="m-1-1">
                <div class="moudel" v-show="a11">{{a11}}</div>
            </div>
            <div class="m" id="m-1-2">
                <div class="moudel" v-show="a12">{{a12}}</div>
            </div>
            <div class="m" id="m-1-3">
                <div class="moudel" v-show="a13">{{a13}}</div>
            </div>

            <div class="m" id="m-2-0">
                <div class="moudel" v-show="a20">{{a20}}</div>
            </div>
            <div class="m" id="m-2-1">
                <div class="moudel" v-show="a21">{{a21}}</div>
            </div>
            <div class="m" id="m-2-2">
                <div class="moudel" v-show="a22">{{a22}}</div>
            </div>
            <div class="m" id="m-2-3">
                <div class="moudel" v-show="a23">{{a23}}</div>
            </div>

            <div class="m" id="m-3-0">
                <div class="moudel" v-show="a30">{{a30}}</div>
            </div>
            <div class="m" id="m-3-1">
                <div class="moudel" v-show="a31">{{a31}}</div>
            </div>
            <div class="m" id="m-3-2">
                <div class="moudel" v-show="a32">{{a32}}</div>
            </div>
            <div class="m" id="m-3-3">
                <div class="moudel" v-show="a33">{{a33}}</div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name:'home',
       data(){
           return {
            arr: [2,4,8,16,32,64,128,256,512,1024,2048],
            timeInterval: true,
            a00: "",a01: "",a02: "",a03: "",a10: "",a11: "",a12: "",a13: "",a20: "",a21: "",a22: "",
            a23: "",a30: "",a31: "",a32: "",a33: ""
        }
       },
       methods: {
           create(){
        let c3=(Math.random()*3).toFixed(0)
        let c4=(Math.random()*3).toFixed(0)
        let randoms=Math.random().toFixed(1)
        if(this["a"+c3+c4]){
            this.create()
        } 
        else{
        this["a"+c3+c4]=this.arr[randoms>0.6? 1:0]
        }//产生随机数（2||4）的方法
           },


        nulls(){
            for(let i=0; i<=3 ;i++){
                for(let j=0; j<=3; j++){
                    if(this["a"+i+j]==""){
                        empty=true;
                    }
                }
            }
            return empty;
        },//判断是否空格子


        rightUP(){
            for(let i=0;i<4;i++){
                for(let j=2;j>=0;j--){
                    for(let k=3;k>j;k--){
                        if(this["a"+i+k]){
                        if(this["a"+i+k]=""&&this.noBlockHorizontal(i,j,k)){
                            this["a"+i+k]=this["a"+i+j];
                            this["a"+i+j]=""
                            
                            }

                        }

                    }

                }

            }
        
            


            
           


        },
        leftUP(){
           this.create(); 


        },
        topUP(){
           this.create(); 


        },
        downUP(){
           this.create(); 


        },


        monitor(_this){
            window.onkeydown=function(e){
               
                switch(e.keyCode){
                    case 37:
                       _this.leftUP()
                        break;
                    case 38:
                         _this.topUP()  
                        break;
                    case 39:
                         _this.rightUP()
                        _this.create(); 
                        break;
                    case 40:
                        _this.downUP()
                        break;

                    }

                
            }
        },//监听键盘

        noBlockHorizontal(row,col1,col2) {//判断x轴中间是否有障碍物
            for(var i=col1+1;i<col2;i++)
                if(this["a"+row+i])
                    return false;
            return true;
        },
        toBlockHorizontal(row,col1,col2) {//判断y轴中间是否有障碍物
            for(var i=col1+1;i<col2;i++)
                if(this["a"+i+row])
                    return false;
            return true;
        
    },



           
       },
       
      
      mounted(){
       let c1=(Math.random()*3).toFixed(0)
        let c2=(Math.random()*3).toFixed(0)
        let random=Math.random().toFixed(1)
        this["a"+c1+c2]=this.arr[random>0.6? 1:0]
        this.create();
        this.monitor(this);
       
         
        
       },



       
       }
       
       
       


            
            


</script>

<style>

 @import "../assets/css/backg.css";
</style>

