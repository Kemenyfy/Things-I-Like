import React, { Component } from 'react';

import hobbies from '../Data/hobbies.json'



class PhotoDetail extends Component {
    render() {
        const _category = this.props.match.params.category;
        const _index = this.props.match.params.index;
        const _photoData = hobbies[_category].photos[_index]

        return (
            <div className="photoList">
            <header className="title">{_photoData.title}</header>
            <p className="paragraph">{_photoData.description}</p>
            <img src={_photoData.imageURL} alt={_photoData.title} />
            </div>
        );
    }
}

export default PhotoDetail;