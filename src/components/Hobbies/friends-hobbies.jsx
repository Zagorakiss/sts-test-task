import React from 'react';
import imgAdd from '../../assets/add.gif';
import imgWarn from '../../assets/warn.png';
import imgOk from '../../assets/ok.png';

class FriendsHobbies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //
        }
    }

    report = (index) => {
        alert('Жалоба на элемент списка с индексом ' + index);
    }

    render() {
        const {isCollapsed} = this.props;
        const {array} = this.props;
		const arrayLimited = [];
		arrayLimited.push(array[0], array[1]);
        const list = isCollapsed ? arrayLimited : array
        
        return list.map((item, index) => {
			return (
                    <div
                        className="hobbies__item hobbies__item_friend"
                        key={index}
                    >
                        <div className="hobbies__item__text">
                            {item && item.name}
                            {item.isCopied &&
                            (
                                <div className="hobbies__item__copied">
                                    <img
                                        src={imgOk}
                                        alt="Copied"
                                        className="hobbies__item__copied__icon"
                                    />
                                    Добавлено в ваши увлечения
                                </div>
                            )}
                        </div>
                        <button
                            onClick={() => this.props.addFriendsItemToMyList(item, index)}
                            className="hobbies__item__add"
                        >
                            <img src={imgAdd} alt="add to my list" />
                        </button>
                        <button
                            className="hobbies__item__alert"
                            onClick={() => this.report(index)}
                        >
                            <img
                                src={imgWarn}
                                alt="alert"
                                className="hobbies__item__alert__icon"
                            />
                            Пожаловаться
                        </button>
                    </div>
			);
		});
    }
}

export default FriendsHobbies;