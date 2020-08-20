import React from 'react';

class Birds extends React.Component {

    render() {

        let birds = this.props.birds.map(el => 
            <li id={el.id} key={el.id} onClick={() => this.props.chooseBird(el.id)}>
                <div className="li-btn"></div> <p>{el.name}</p>
            </li>
        )

        return (
           <div className="col-12 col-lg-6">
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