function sleep(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

// 队列
function queen(list,callback,time){
    let len = list.length;
    const next = async (item, deepth)=>{
        if(deepth == len){
            return
        }
        await callback(item,deepth)
        await sleep(time)
        return next(list[deepth+1],deepth+1)
    }
    next(list[0],0)
}

module.exports = {
    sleep,
    queen
}

a = '123'
queen(a,(item,index)=>{
    console.log(item,index)
},500)