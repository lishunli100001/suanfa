
/* 
// 判断给定一个正整数v是否和除了它本身的所有正因子之和相等
// 输入28，正因子1,2,4,7,14,28，1+2+4+7+14=28  返回true
function fn1(v){
    let arr=[]
    for(let i=1;i<v;i++){
        if(v%i===0){
            arr.push(i)
        }
    }
    let num=arr.reduce((a,b)=>{
        return a+b
    },0)
    return num==v
}
console.log(fn1(28))  */
/* ********************************************** */
/*
// 输入一个正整数v，输出所有和为n的连续正整数
v=15，输出[[1,2,3,4,5],[4,5,6],[7,8]]     1+2+3+4+5=15 4+5+6=15 7+8=15
function fn2(v){
    let arr=[]
    for(let i=1;i<Math.ceil(v/2);i++){
        let num=0
        arrs=[]
        for(let j=i;num<v;j++){
            arrs.push(j)
            num+=j
            if(num===v){
                arr.push(arrs)
            }
        }    
    }
    return arr
}
console.log(fn2(14)) */

/* 
// 青蛙跳n节台阶多少种方法
function fn(n){
    if(n===1){
        return 1
    }else if(n===2){
        return 2
    }else{
        return fn(n-1)+fn(n-2)
    }
}
console.log(fn(45)) */
// 青蛙跳n节台阶的跳法
/* function fn2(n) {
    let arr=[],arrs=[],arrss=[]
    for(let i=1;i<=n;i++){
        if(i===1){
            arr.push([1])
        }else{
        arr.map(item=>{
            if(item[0]===1){
                arrs.push(...item)
                arrs.splice(0,1,2)
                arrss.push(arrs)
                arrs=[]
                item.unshift(1)
            }else{
                item.unshift(1)
            }           
        })  
        arr.push(...arrss)
        arrss=[]
        }
    }
    return arr
}

console.log(fn2(30));
       */

    //   xiaoshuo-ss-sfff-fe  变为驼峰xiaoshuoSsSfffFe
/* 
function fn3(str){
    var arr = str.split( '-' );
    return arr.map( function( item, index ) {
        console.log(item)
        if( index === 0 ){
            return item;
        }else{
            return item.charAt(0).toUpperCase() + item.slice( 1 );
        }
    }).join('');
}
console.log(fn3("xiaoshuo-ss-sfff-fe")) */
//编号为1到100，报数逢3退出，注意解法中数组下标是从0开始的

function fn4(){
    let arr=[],arr2=[]
    for(let i=1;i<100;i++){
        if((i).toString().includes(3)||i%3===0){
            arr.push(i)
        }else{
            arr2.push(i)
        }
        
    }
    return {arr,arr2}
}



console.log(fn4())