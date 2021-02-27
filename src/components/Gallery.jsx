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

  async componentDidMount() {
    const query = this.props.match.params.query;
    const searchQuery = query ? query : "dardanelles";

    await this.getPhotos(searchQuery);
  }


  async componentDidUpdate(prevProps, prevState) {
    const query = this.props.match.params.query;
    if (query && this.state.searchQuery !== query) {
      await this.getPhotos(query);
    }
  }

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
