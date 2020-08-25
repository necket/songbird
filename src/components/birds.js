import React from 'react';

class Birds extends React.Component {

    render() {

        let birds = this.props.birds.map(el => 
            <li key={el.id} onClick={() => this.props.chooseBird(el.id)}>
                <div className="li-btn unused" id={'li-' + el.id}></div> <p>{el.name}</p>
            </li>
        )

        return (
           <div className="col-12 col-md-6">
               <div className="birds">
                    <ul className="list-unstyled">
                        {birds}
                    </ul>
               </div>
           </div>
        )
    }
}

export default Birds;