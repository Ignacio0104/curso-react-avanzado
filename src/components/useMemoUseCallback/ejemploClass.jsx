import React, { Component, PureComponent } from 'react'

function MiComponente (props){
    return(
        <h1>Componente memorizado</h1>
    )
}

function propsComparison (prevProps,nextProps){
                            //Funcion para validar si los props cambiaron o no
    
}

export const EjemploComponent = React.memo(MiComponente,propsComparison) //Cachea la información y no actualiza a menos que haya cambiado

/*export const EjemploComponent = React.memo(function MiComponente(props){ 
                                            //Memoriza la ejecucion de este componente funcional

})*/