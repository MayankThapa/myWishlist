import React from 'react';

export default class Wishlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       
        }   
  }
//   toggleActive(wishId) { 
//     let newState = Object.assign({}, this.state)
//     let wish = _.find(newState.books, {id: wishId});
//     wish.have = !wish.have
//     this.setState(newState)
//   }
  render() {
    return (<SingleBook books={this.state.books} 
        // toggleActive={(wishId)=>this.toggleActive(wishId)} 
        />);
  }  
}

class SingleBook extends React.Component  {
  render() {  
    const listItem = this.props.books.map((wish) => {
      return (
        <li className={wish.have ? 'active' : 'notactive'} key={wish.id}>
          <a >{wish.volumeInfo.title}</a>
          {/* <span>{wish.have ? 'Have this one' : 'Want this one'}</span> */}
          <button 
            // onClick={() => this.props.toggleActive(wish.id)}
          >{wish.have ? 'Remove from wishlist' : 'Add to Wishlist'}</button>
        </li>
      );
    })
    
    return (
      <ul className="wish-list">
        { listItem }
      </ul>
      );
  }
}