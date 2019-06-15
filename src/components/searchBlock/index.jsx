import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash';
import { getSubtitles } from 'youtube-captions-scraper';
import {List} from "../list";
import "./style.css"


export class SearchBlock extends React.Component  {
    state = {
        mass_for_video: [], // определили начальное состояние
    }

    your_api_key = 'AIzaSyCseSPofVtKEvdzSFDNELxD8RQu8Z7FaQY';
    language = 'en';

    httpGet = (theUrl) => {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.setRequestHeader('Accept', 'application/json');
        xmlHttp.send(null);
        return xmlHttp.responseText;
    };

    findVideos = (ids, searchWord) => {
        ids.forEach((item) => {

            let param = {
                videoID: item.id, // youtube video id
                lang: this.language // default: `en`
            };

            getSubtitles(param)
                .then(captions => {
                    let afterCheck = [];
                    captions.forEach((item) =>
                        item.text.toLowerCase().indexOf(searchWord) !== -1 ? afterCheck.push(item) : undefined);
                    return afterCheck;
                })
                .then(final => {
                    if (!_.isEmpty(final)) this.setState({
                        mass_for_video: [...this.state.mass_for_video, {id:item.id, pic: item.pic, subs:[...final]}]
                    })
                });
        });
    }

    renderVideos = () => {
        const { mass_for_video } = this.state
        let videosTemplate = null

        if (mass_for_video.length) {
            videosTemplate = <List data={mass_for_video}/>
        } else {
            videosTemplate = <p>No data.</p>
        }
        return videosTemplate
    }

    doSearch = () => {
        this.setState({
            mass_for_video: []});
        let text = document.getElementsByName("InputValue")[0];
        let afterReques = JSON.parse(this.httpGet(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${text.value}&key=${this.your_api_key}`));
        let idsToCheck = [];
        afterReques.items.forEach(item => idsToCheck.push({id: item.id.videoId, pic: item.snippet.thumbnails.medium.url}));
        this.findVideos(idsToCheck, text.value);
    }

    render() {

        const {mass_for_video} = this.state;

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 input-group mb-3">
                        <input name="InputValue"
                               type="text"
                               className="form-control"
                               placeholder="Enter a word or phrase"
                               onKeyPress={
                                   (target) => {
                                       if (target && target.charCode === 13) this.doSearch()
                                   }}/>
                        <div className="input-group-append">
                            <button onClick={() => this.doSearch()} className="btn btn-outline-secondary"
                                    type="button" id="button-addon2">Search
                            </button>
                        </div>
                    </div>
                </div>
                    {this.renderVideos()}
            </div>
        );
    }
}

SearchBlock.propTypes = {

};

export default SearchBlock;