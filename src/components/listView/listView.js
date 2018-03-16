import React, { Component } from 'react';

import ListItem from '../listItem/listItem';
import './listView.css';

class ListView extends Component {
  render() {
    
    const listItems = this.props.data.map((item, index) => {
      return <ListItem itemData={item} key={index} />;
    });

    return (
      <div className="ListView">
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}
export default ListView;
