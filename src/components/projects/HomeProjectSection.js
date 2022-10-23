import React from "react";

import PropTypes from "prop-types";

const HomeProjectSection = (props) => {
  return (
    <section className="waves-spacer waves-1">
      <div className="container">
        <div className="row title-row">
          <div >
            <p className="project-title color-whiteMain">Latest Projects</p>
          </div>
        </div>
        <div>
            {props.projects}
        </div>
      </div>
    </section>
  );
};

HomeProjectSection.propTypes = {
  projects: PropTypes.array,
};

export default HomeProjectSection;
