// imports
import { createSelector } from 'reselect';

// local imports

const selectDirectory = state => state.directory;

const selectDirectorySection = createSelector([selectDirectory], directory => directory.sections);

export default selectDirectorySection;
