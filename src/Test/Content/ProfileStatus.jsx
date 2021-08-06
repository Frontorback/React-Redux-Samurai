import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        display: false,
    }
   
    activateInput () {
        this.setState({
            display: true
        });
    }

    deactivateInput () {
        this.setState({
            display: false
        });
    }
    
    render() {
        return (
                <div>
                    {!this.state.display &&
                        <div>
                            <span onDoubleClick={this.activateInput.bind(this)}>{this.props.status}</span>
                        </div>
                     }
                    
                     {this.state.display &&
                        <div>
                            <input autoFocus={true} onBlur={this.deactivateInput.bind(this)} value={this.props.status} />
                        </div>
                     }
                    
                </div>
        )
    }
}

export default ProfileStatus