const fdefinirtriangulo= ( la, lb ,lc )=> {

    if (la == lb && la == lc && lb== lc ) { 
    return " Equilatero"
}   if ( la!== lb && la !== lc && lb !== lc) {
        return "Escaleno"
     }
     else  {
    return "Isósceles"
    }
    
    }
    const resultado= fdefinirtriangulo ( 3 , 4 ,3)
    console.log (resultado)