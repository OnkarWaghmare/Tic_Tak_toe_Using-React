import React from "react";

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            display:"",
        }
    }

    render(){
        
        return(
            <>
            {/* <h3>Player{this.props.result}wins</h3> */}
            {/* <button class="game--restart"></button> */}
            </>
        )
    }
}

export default Footer;