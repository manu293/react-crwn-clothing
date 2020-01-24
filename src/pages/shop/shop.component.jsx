// imports
import React from 'react';
import { Route } from 'react-router-dom';

// local imports
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
