const required:validatosType=(value)=>{
    if(value) return undefined
    return 'this is required'
}

export{
    required
}

type validatosType=(value:string)=>string|undefined