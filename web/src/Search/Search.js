import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import queryString from 'query-string';

import config from '../config';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';

const decodeOrElse = (param, els) =>
  (param && decodeURIComponent(param)) || els;

export const searchFromRoute = ({location, match}) => {
  const color = decodeOrElse(match.params.color, config.default.color);
  const isByColor = !/\/items/.test(location.pathname);
  const item = decodeOrElse(match.params.item, config.default.item);
  const shouldSearch = true;
  const slot = queryString.parse(location.search).slot;

  return {color, isByColor, item, shouldSearch, slot};
};

const Search = props => {
  const {location} = props;

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <div>
      <SearchBox />
      <SearchResults />
    </div>
  );
};

export default Search;
