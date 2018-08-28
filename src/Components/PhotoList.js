import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import hobbies from '../Data/hobbies.json';


class PhotoList extends Component {

    render() {
        const _category = this.props.match.params.category
        const _categoryData = hobbies[_category]
        if (!_categoryData) {
            return <h3>Nothing was found</h3>
        } else {
            return (
                <div>
                    <div className="photoList">
                        <header className="title">{_categoryData.title}</header>
                        <p className="paragraph">{_categoryData.description}</p>
                        <p className="paragraph">Some of my favorite teams are:</p>
                        <section className="">
                            <section className="">
                                {
                                    _categoryData.photos.map((photo, i) => {
                                        return <section className="" key={i}>
                                            <p className="listTitle">{photo.title}</p>
                                            <Link to={`/${_category}/${i}`} key={i}>
                                                <img className="" src={photo.imageURL} alt={photo.title} key={i} />
                                            </Link>
                                        </section>
                                    })
                                }
                            </section>
                            <p className="tip">(Tip: Click any image to know more)</p>
                        </section>
                    </div>
                </div>
            );
        }
    }
}

export default PhotoList;