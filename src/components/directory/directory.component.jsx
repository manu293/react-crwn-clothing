// imports
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// local impots
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import selectDirectorySection from '../../redux/directory/directory.selector';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ title, id, imageUrl, size, linkUrl }) => (
      <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
