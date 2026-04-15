function coundown (n){
    if (n === 0){
        console.log('Done !')
        return ;
    }
    console.log(n);
    coundown(n-1);
}

n = '15';
const result = coundown(n);
console.log(result)