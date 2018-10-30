import React from 'react';
import imgCross from '../../assets/close.png';

class MyHobbies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //
        }
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
					className="hobbies__item"
					key={index}
				>
                    {item && item.name}
                    <button
                        onClick={() => this.props.removeItem(index)}
                        className="hobbies__item__delete"
                    >
                        <img src={imgCross} alt="delete" />
                    </button>
				</div>
			);
		});
    }
}

export default MyHobbies;