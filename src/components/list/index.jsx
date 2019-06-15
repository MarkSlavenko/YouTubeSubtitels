/* eslint-disable no-unused-expressions */
import React from 'react'
import _ from 'lodash'
import {VideoPart} from '../videoCard'


export function List ({data}) {
    console.log(data)
    let dat1=[], dat2=[];
    if (!_.isEmpty(data)) {for (let i = 0; i < data.length; i += 2) {
        dat1.push(data[i]);
        data[i+1] && dat2.push(data[i+1]);
    }}

    return(
        <div className="row">
            <div className="col-md-6">{_.isEmpty(dat1) ? undefined : dat1.map((item, i) =>
                <VideoPart key={i} item={item}/>)}</div>
            <div className="col-md-6">{_.isEmpty(dat2) ? undefined : dat2.map((item, i) =>
                <VideoPart key={dat1.length + i} item={item}/>)}</div>
    </div>);
}
