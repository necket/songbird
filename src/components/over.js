import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <div className="over">
                <h1>Поздравляем!</h1>
                <p className="mt-3">
                    Вы прошли викторину и набрали {this.props.score} из 30 возможных баллов
                </p>
                <button className={`btn btn-success mt-5 ${this.props.score === 30 ? 'd-none' : null}`} 
                        onClick={() => window.location.reload()}>
                    Попробовать еще раз!
                </button>
            </div>
        )
    }
}

export default Header;