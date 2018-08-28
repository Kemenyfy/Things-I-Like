import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import hobbies from '../Data/hobbies.json'

class CategoryList extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="body">
                {Object.keys(hobbies).map((hobbyKey, i) => {
                    return <section className="image-card" key={i}><Link className="Link" to={`/${hobbyKey}`}>
                        <header className="title">{hobbies[hobbyKey].title}</header>
                            <p className="paragraph">{hobbies[hobbyKey].description}</p>
                            <img src={hobbies[hobbyKey].photos[0].imageURL} alt={hobbies[hobbyKey].photos[0].title} />
                        </Link>
                    </section>
                })}
            </div>
        );
    }
}

export default CategoryList;