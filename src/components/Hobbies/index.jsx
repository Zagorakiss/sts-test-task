import React from 'react';
import MyHobbies from './my-hobbies';
import FriendsHobbies from './friends-hobbies';
import '../../styles/hobbies.scss';

class Hobbies extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            myHobbies: {
                isCollapsed: true,
                list: [
                    {
                        name: 'Хоккей'
                    },
                    {
                        name: 'Высокоточная вёрстка под старые версии Microsoft Internet Explorer, начиная с версии 5.01'
                    },
                    {
                        name: 'Хоккей2'
                    },
                    {
                        name: 'Хоккей3'
                    },
                    {
                        name: 'Хоккей4'
                    }
				],
				newItem: ''
            },
            friendsHobbies: {
                isCollapsed: true,
                list: [
                    {
                        name: 'Баскетбол',
                        isCopied: false
                    },
                    {
                        name: 'Нарезка Photoshop/Fireworks макетов на скорость, в экстримельных условиях, на природе',
                        isCopied: false
                    },
                    {
                        name: 'Баскетбол2',
                        isCopied: false
                    },
                    {
                        name: 'Баскетбол3',
                        isCopied: false
                    },
                    {
                        name: 'Баскетбол4',
                        isCopied: false
                    }
				]
            }
        }
	}

	toggleExpandBtn = (listName) => {
        this.setState(() => {
            return {
                [listName]: {
                    ...this.state[listName],
                    isCollapsed: !this.state[listName].isCollapsed
                }
            };
        });
	}

	addNewItem = (e, newItem) => {
		e && e.preventDefault();
		const newArr = this.state.myHobbies.list;
		newArr.unshift({name: newItem});
		this.setState(() => {
            return {
                myHobbies: {
                    ...this.state.myHobbies,
					list: newArr,
					newItem: ''
                }
            };
        });
	}

	addFriendsItemToMyList = (item, index) => {
		this.addNewItem(null, item.name);
		const newArr = this.state.friendsHobbies.list;
		newArr[index].isCopied = true;
		this.setState(() => {
            return {
                friendsHobbies: {
                    ...this.state.friendsHobbies,
                    list: newArr
                }
            };
        });
	}
	
	handleInputChange = (text) => {
		this.setState(() => {
            return {
                myHobbies: {
                    ...this.state.myHobbies,
                    newItem: text
                }
            };
        });
	}

	removeItem = (index) => {
		const newArr = this.state.myHobbies.list;
		newArr.splice(index, 1);
		this.setState(() => {
            return {
                myHobbies: {
                    ...this.state.myHobbies,
                    list: newArr
                }
            };
        });
	}

    render() {
		return (
			<React.Fragment>
				<div className="hobbies hobbies_my">
					<h2 className="hobbies__title2">
						О себе
					</h2>
					<h3 className="hobbies__title3">
						<div className="hobbies__title3__text">
							Хобби
						</div>
						<div className="hobbies__title3__divider" />
					</h3>
					<form
						onSubmit={(event) => this.addNewItem(event, this.state.myHobbies.newItem)}
					>
						<input
							type="text"
							className="hobbies__input"
							placeholder="Введите текст"
							value={this.state.myHobbies.newItem}
							onChange={(event) => this.handleInputChange(event.target.value)}
						/>
					</form>
					<div className="hobbies__list">
						<MyHobbies
							array = {this.state.myHobbies.list}
							isCollapsed = {this.state.myHobbies.isCollapsed}
							removeItem = {this.removeItem}
						/>
					</div>
					<button
						onClick={() => this.toggleExpandBtn('myHobbies')}
						className="hobbies__btn"
					>
						{
							this.state.myHobbies.isCollapsed ?
							`еще ${
								this.state.myHobbies.list.length - 2 >= 0 ?
								this.state.myHobbies.list.length - 2 :
								0
							} интереса` :
							'Скрыть'
						}
					</button>
				</div>
				<div className="hobbies hobbies_friend">
					<h2 className="hobbies__title2">
						Интересы друга
					</h2>
					<h3 className="hobbies__title3">
						<div className="hobbies__title3__text">
							Хобби
						</div>
						<div className="hobbies__title3__divider" />
					</h3>
					<div className="hobbies__list">
						<FriendsHobbies
							array = {this.state.friendsHobbies.list}
							isCollapsed = {this.state.friendsHobbies.isCollapsed}
							addFriendsItemToMyList = {this.addFriendsItemToMyList}
						/>
					</div>
					<button
						onClick={() => this.toggleExpandBtn('friendsHobbies')}
						className="hobbies__btn"
					>
						{
							this.state.friendsHobbies.isCollapsed ?
							`еще ${
								this.state.friendsHobbies.list.length - 2 >= 0 ?
								this.state.friendsHobbies.list.length - 2 :
								0
							} интереса` :
							'Скрыть'
						}
					</button>
				</div>
			</React.Fragment>
		);
    }

  }
  
  export default Hobbies;