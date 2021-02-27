import React, { Component } from "react";

import { getPhotosByTag } from "../services/PhotoService";

import SearchForm from "./common/SearchForm";
import Navbar from "./common/Navbar";
import PhotoContainer from "./common/PhotoContainer";

class Gallery extends Component {
  state = {
    loading: true,
    searchQuery: "",
    photos: [],
  };

  /**
   * get photos for defaul tag when page first rendered
   *
   * @returns {Promise<void>}
   */
  async componentDidMount() {
    const query = this.props.match.params.query;
    const searchQuery = query ? query : "dardanelles";

    await this.getPhotos(searchQuery);
  }

  /**
   * update the photo container component when a navlink is clicked or on search request
   *
   * @param prevProps
   * @param prevState
   * @returns {Promise<void>}
   */
  async componentDidUpdate(prevProps, prevState) {
    const query = this.props.match.params.query;
    if (query && this.state.searchQuery !== query) {
      await this.getPhotos(query);
    }
  }

  /**
   * get photos according to request and update the state
   *
   * @param {String} query
   * @returns {Promise<void>}
   */
  async getPhotos(query) {
    if (this.state.loading === false) {
      this.setState({loading: true});
    }

    const photos = await getPhotosByTag(query);

    this.setState({
      searchQuery: query,
      loading: false,
      photos,
    });
  }

  render() {
    const { searchQuery, loading, photos } = this.state;
    return (
      <React.Fragment>
        <SearchForm query={searchQuery}/>
        <Navbar />
        <PhotoContainer loading={loading} query={searchQuery} photos={photos} />
      </React.Fragment>
    );
  }
}

export default Gallery;
