import React from 'react';

const SongDetail = (props) => {
  if(!props.song) return null;
  return(
    <div>
    <h1>This Song's Postion is : {props.song.category.attributes['im:id']}</h1>
    <img src={props.song['im:image'][2].label} width="400" alt="cover"/>
    <h1>The Genre is : {props.song.category.attributes.label}</h1>
    <h2> Song Title : {props.song['im:name'].label}</h2>
    <h2> Album Name : {props.song['im:collection']['im:name'].label}</h2>
    </div>
  )
}

export default SongDetail;
