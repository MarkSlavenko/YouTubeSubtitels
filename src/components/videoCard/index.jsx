/* eslint-disable no-unused-expressions */
import React from 'react'
import "./style.css"

export function VideoPart ({item}) {
    console.log(item);
    const subs = item.subs.slice(0, 10);
    return(
        <div className="col-md-12">
            <div className="card">
                <img className="card-img-top" src={item.pic}/>
                <ul>
                    {subs.map((sub) =>
                        <li>
                            <a href={`http://www.youtube.com/embed/${item.id}?autoplay=0&start=${sub.start}&end=${sub.start + sub.dur}`}>{sub.text}</a>
                        </li>)}
                </ul>
            </div>
        </div>);
}