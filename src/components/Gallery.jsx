import React, { Component } from "react";

import config from "../config.json";
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
    const searchQuery = config.defaultTag;

    const photos = await getPhotosByTag(searchQuery);
    this.setState({
      loading: false,
      searchQuery,
      photos,
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    const query = this.props.match.params.query;
    let photos;
    if (query && this.state.searchQuery !== query) {
      photos = await getPhotosByTag(query);
      this.setState({
        searchQuery: query,
        loading: false,
        photos,
      });
    }
  }

  render() {
    const { searchQuery, loading, photos } = this.state;
    return (
      <React.Fragment>
        <SearchForm />
        <Navbar />
        <PhotoContainer query={searchQuery} photos={photos} />
      </React.Fragment>
    );
  }
}

export default Gallery;
