import React from "react";
import './GridItem.css';

class GridItem extends React.Component{


    
    render(){
        return (
        <button className="gridItem"  onClick={()=>{
            this.props.handleClick(this.props.colIndex);
            }}>{this.props.gamestate[this.props.colIndex]}   
        </button>
        )
    }
}

export default GridItem;