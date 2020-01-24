// imports
import React from 'react';
import { connect } from 'react-redux';

// local imports
import './collection.styles.scss';
// import CollectionItems from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector';

const CollectionPage = ({ collection }) => {
  return (
    <div className="collection-page">
      <h2>Collection Page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
