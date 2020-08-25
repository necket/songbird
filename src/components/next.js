import React from 'react';

class Next extends React.Component {

    render() {
        
        let btn = this.props.btn ? 
            <button className="btn btn-success w-100" onClick={this.props.next}>Следующий уровень</button> : 
            <button className="btn btn-secondary w-100" disabled>Следующий уровень</button>

        return (
            <div className="row p-3">
                {btn}
            </div>
        )
    }
}

export default Next;