const resolvedPromise = () =>{
    setTimeout(() => {
        let success = {'message': 'delayed success'}
        console.log(success);
    }, 500)
}

const rejectedPromise = () => {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            try{
                throw new Error('error: delayed exception!');
            }catch (e){
                console.error(e);
                reject({'error': 'delayed exception'})
            }
        }, 500)
    })
}

resolvedPromise()
rejectedPromise().then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.error(error)
})