
import React, {Component} from "react";
//import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class AppClass extends Component{
    constructor(props){
        super(props)
        this.state={
            kilasy: "",
            filiere: ""

        }
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange=(e)=>{
        this.setState(
            {
                kilasy: e.target.value, 
        
            }
        )
    }

    render(){
        return(
            <div>
                <h1>bonjour bonhome</h1>
                <p>tu es en  {this.state.kilasy},
                 filiere {this.props.filiere} et tu utilisa la version {this.props.version} de react</p>
                <input type="text" value={this.state.kilasy} onChange={this.handleChange}/>
                </div>
        )
    }
}
export default AppClass;