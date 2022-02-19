import React from "react";
import "./Directory.scss";
import MenuItem from "../MenuItem/MenuItem";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directorySelector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
