import React from 'react';

class Header extends React.Component {

    state = {
        levels: ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы']
    };

    render() {
        
        let levels = this.state.levels.map((el, i) => {
            console.log(this.props.lvl + '//' + i);
            return <li className={`category' ${this.props.lvl === i ? 'active' : ''}`} key={'category' + i}>{el}</li>
        });

        return (
            <div className="header">
                <div className="header-top">
                    <img src={require('./../img/logo.png')} alt="logo" className="img-fluid"/>
                    <p className="score">Score: 0</p>
                </div>
                <ul className="nav">
                    {levels}
                </ul>
            </div>
        )
    }
}

export default Header;