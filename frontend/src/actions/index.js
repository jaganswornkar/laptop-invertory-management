export const files = (type,files) =>{
    if (files !== undefined){
        return {
            type:type,
            payload:files
        }
    }else{
        console.log('error in action-files : ',files)
    }
}