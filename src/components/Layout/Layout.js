import React,{Component} from 'react';
import Aux from '../../hoc/Auxillary';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideBar from '../Navigation/SideBar/SideBar'

class Layout extends Component {
constructor(props){
    super(props)
    this.state = {
        showSideBar:false,
    }
}

sideBarCloseHandler =()=> {
    this.setState({
        showSideBar:false
    })
}

toggleSideBarHandler = () => {
    this.setState((prevState) => {
        return {showSideBar:!this.state.showSideBar}
    })

}
    render(){
        return (
           <Aux>
                <Toolbar click={this.toggleSideBarHandler}/>
                <SideBar show={this.state.showSideBar} closed={this.sideBarCloseHandler}/>
                <main>
                    {this.props.children}
                </main>
           </Aux>
        )
    }
}

export default Layout;