
<template>
    <div class="main">
        <div class="top">
            <Button @click=" restart()">重玩</Button>&nbsp;&nbsp;
            <span>分数:{{ conunta }}</span>
        </div>

        <div class="back">
            <div class="m" id="m-0-0">
                <div class="moudel" v-show="a00" id="acc">{{a00}}</div>
            </div>
            <div class="m" id="m-0-1">
                <div class="moudel" v-show="a01" id="acc">{{a01}}</div>
            </div>
            <div class="m" id="m-0-2">
                <div class="moudel" v-show="a02" id="acc">{{a02}}</div>
            </div>
            <div class="m" id="m-0-3">
                <div class="moudel" v-show="a03" id="acc">{{a03}}</div>
            </div>

            <div class="m" id="m-1-0">
                <div class="moudel" v-show="a10" id="acc">{{a10}}</div>
            </div>
            <div class="m" id="m-1-1">
                <div class="moudel" v-show="a11" id="acc">{{a11}}</div>
            </div>
            <div class="m" id="m-1-2">
                <div class="moudel" v-show="a12" id="acc">{{a12}}</div>
            </div>
            <div class="m" id="m-1-3">
                <div class="moudel" v-show="a13" id="acc">{{a13}}</div>
            </div>

            <div class="m" id="m-2-0">
                <div class="moudel" v-show="a20" id="acc">{{a20}}</div>
            </div>
            <div class="m" id="m-2-1">
                <div class="moudel" v-show="a21" id="acc">{{a21}}</div>
            </div>
            <div class="m" id="m-2-2">
                <div class="moudel" v-show="a22" id="acc">{{a22}}</div>
            </div>
            <div class="m" id="m-2-3">
                <div class="moudel" v-show="a23" id="acc">{{a23}}</div>
            </div>

            <div class="m" id="m-3-0">
                <div class="moudel" v-show="a30" id="acc">{{a30}}</div>
            </div>
            <div class="m" id="m-3-1">
                <div class="moudel" v-show="a31" id="acc">{{a31}}</div>
            </div>
            <div class="m" id="m-3-2">
                <div class="moudel" v-show="a32" id="acc">{{a32}}</div>
            </div>
            <div class="m" id="m-3-3">
                <div class="moudel" v-show="a33" id="acc">{{a33}}</div>
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
            restart() {//刷新重玩
            for(let i=0;i<4;i++) {
                for(let j=0;j<4;j++) {
                    this["a"+i+j]="";
                }
            }
            let c1=(Math.random()*3).toFixed(0);
            let c2=(Math.random()*3).toFixed(0);
            let random=Math.random().toFixed(1);;
            this["a"+c1+c2]=this.arr[random>0.6? 1:0];
            let c3=(Math.random()*3).toFixed(0);
            let c4=(Math.random()*3).toFixed(0);
            let randoms=Math.random().toFixed(1);;
            if(this["a"+c1+c2]== this["a"+c3+c4])
            {
            this.generate();
            }
            this["a"+c3+c4]=this.arr[randoms>0.6? 1:0];
           
            
        },
         
        


        // nulls(){
        //     let empty=false;
        //     for(let i=0; i<4;i++){
        //         for(let j=0; j<4; j++){
        //             if(this["a"+i+j]==""){
        //                 empty=true;
        //             }
        //         }
        //     }
        //     return empty;
        // },//判断是否空格子
   


        rightUP(){
            let flag=false
           
                for(let i=0;i<4;i++) {
                    for(let j=2;j>-1;j--) {
                        for(let k=3;k>j;k--) {//k为落子点坐标
                            if(this["a"+i+j]) {//如果要跳转的格子为空 那就跳过
                                if(this["a"+i+k]==""&&this.xaxis(i,j,k)) {//如果落子点为空的格子并且中间没障碍物则可落子
                                    this["a"+i+k]=this["a"+i+j];//格子赋值
                                    this["a"+i+j]="";
                                    flag=true

                                } else if(this["a"+i+k]==this["a"+i+j]&&this.xaxis(i,j,k)) {
                                    let a=parseInt(this["a"+i+k])+parseInt(this["a"+i+j]);
                                    this["a"+i+k]=a;
                                    this["a"+i+j]="";
                                    flag=true

                                }
                            }
                        }
                    }

                } return flag
             
        },

        leftUP(){
       let flag=false
                for(let i=0;i<4;i++) {
                    for(let j=1;j<4;j++) {
                        for(let k=0;k<j;k++) {//k为落子点坐标
                            if(this["a"+i+j]) {//如果要跳转的格子为空 那就跳过
                                if(this["a"+i+k]==""&&this.xaxis(i,k,j)) {//如果落子点为空的格子并且中间没障碍物则可落子
                                    this["a"+i+k]=this["a"+i+j];//格子赋值
                                    this["a"+i+j]="";
                                    flag=true
           
                                } else if(this["a"+i+k]==this["a"+i+j]&&this.xaxis(i,k,j)) {
                                    let a=parseInt(this["a"+i+k])+parseInt(this["a"+i+j]);
                                    this["a"+i+k]=a;
                                    this["a"+i+j]="";
                                    flag=true

                                }
                            }
                        }
                    }

                } return flag
           
        },
        topUP(){
            let flag=false
           
                for(let i=0;i<4;i++) {
                    for(let j=1;j<4;j++) {
                        for(let k=0;k<j;k++) {//k为落子点坐标
                            if(this["a"+j+i]) {//如果要跳转的格子为空 那就跳过
                                if(this["a"+k+i]==""&&this.yaxis(i,k,j)) {//如果落子点为空的格子并且中间没障碍物则可落子
                                    this["a"+k+i]=this["a"+j+i];//格子赋值
                                    this["a"+j+i]="";
                                    flag=true

                                } else if(this["a"+k+i]==this["a"+j+i]&&this.yaxis(i,k,j)) {
                                    let a=parseInt(this["a"+k+i])+parseInt(this["a"+j+i]);
                                    this["a"+k+i]=a;
                                    this["a"+j+i]="";
                                    flag=true

                                }
                            }
                        }
                    }

                } return flag
            


        },
        downUP(){
            let flag=false
                for(let i=0;i<4;i++) {
                    for(let j=2;j>-1;j--) {
                        for(let k=3;k>j;k--) {//k为落子点坐标
                            if(this["a"+j+i]) {//如果要跳转的格子为空 那就跳过
                                if(this["a"+k+i]==""&&this.yaxis(i,j,k)) {//如果落子点为空的格子并且中间没障碍物则可落子
                                    this["a"+k+i]=this["a"+j+i];//格子赋值
                                    this["a"+j+i]="";
                                    flag=true

                                } else if(this["a"+k+i]==this["a"+j+i]&&this.yaxis(i,j,k)) {
                                    let a=parseInt(this["a"+k+i])+parseInt(this["a"+j+i]);
                                    this["a"+k+i]=a;
                                    this["a"+j+i]="";
                                    flag=true

                                }
                            }
                        }
                    }

                } return flag
          


        },


        monitor(_this){
            window.onkeydown=function(e){
               
                switch(e.keyCode){
                    case 37:
                    if(_this.leftUP()){
                        _this.create(); }
                        break;
                    case 38:
                    if(_this.topUP())
                    {_this.create();}
                        break;
                    case 39:
                    if(_this.rightUP()){
                        _this.create();
                    } 
                        break;
                    case 40:
                    if(_this.downUP()){
                        _this.create(); 
                    }
                        break;

                    }

                
            }
        },//监听键盘

        xaxis(x,y,z) {//判断x轴中间是否有障碍物
            for(var i=y+1;i<z;i++)
                if(this["a"+x+i])
                    return false;
                    return true;
            
        },
        yaxis(x,y,z) {//判断y轴中间是否有障碍物
            for(var i=y+1;i<z;i++)
                if(this["a"+i+x])
                    return false
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

