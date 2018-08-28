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
                    <div className="productList">
                    <header className="cardTitle">{_categoryData.title}</header>
                    <p className="categoriesParagraph">{_categoryData.description}</p>
                    <section className="productImagesList">
                        <section className="listImages">
                            {
                                _categoryData.photos.map((photo, i) => {
                                    return <section className="imagesList" key={i}>
                                        <p>{photo.title}</p>
                                        <Link to={`/${_category}/${i}`} key={i}>
                                            <img className="cardImages" src={photo.imageURL} alt={photo.title} key={i} />
                                        </Link>
                                    </section>
                                })
                            }
                        </section>
                    </section>
                </div>
                </div>
            );
        }
    }
}

export default PhotoList;