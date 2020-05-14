import React from 'react'

class Title extends React.Component{
    render(){
        return(
        <h1>{this.props.text}</h1>
        )
    }

    
}

class Nuevo extends React.Component{
    render(){
        return(
            <div className="Nuevo">
                <title></title>
            </div>
        )
    }
}

export default Nuevo