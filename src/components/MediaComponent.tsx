import React from "react";
import MediaItem from "../models/media"

class MediaItems extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: Array<MediaItem>
    };
  }

  render() {
    return (

      <div className="items">
        {this.props.items.forEach(element => {
          <div>{element.name}</div>
        })}
      </div>
      
    )
  }

}

export default MediaItems