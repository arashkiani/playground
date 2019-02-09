import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getListQuery } from "../service/graphQueries";
class MyComponents extends Component {
  render() {
    const {
      data: { loading, bye }
    } = this.props;
    if (loading) {
      return "Loading...";
    }
    return <div>{bye}</div>;
  }
}
export default graphql(getListQuery)(MyComponents);
