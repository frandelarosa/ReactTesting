import React from 'react';
import Media from '../models/media'

export function MediaItems({ items }: { items: Array<Media> }) {

  return (

      items.map(element => {
        return <MediaItem item={element}/>
      })

  );

}

export default function MediaItem({item}){

  return(
    <div className="card">
      <div>
      {item.getName()}
      </div>
      <div>
      {item.getYear()}
      </div>
    </div>
  )
  
}