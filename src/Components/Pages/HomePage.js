import React from 'react';
import {Link} from 'react-router-dom';
import T from '../../Localization/i18n';

function HomePage() {
  return (
    <React.Fragment>
      <div className="buttons">
        <Link to="./record/manage" className="button is-primary is-fullwidth">
          {T.t("createRecord")}
        </Link>

        <Link to="./records" className="button is-fullwidth">
          {T.t("recordList")}
        </Link>
      </div>
    </React.Fragment>
  );
}

export default HomePage;