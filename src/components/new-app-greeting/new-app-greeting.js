import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class NewAppGreeting extends React.Component {
  render() {
    return (
      <div>
        <h2 data-test-application-greeting>
          <FormattedMessage id="ui-marva.new-app.greeting" />
        </h2>
        <FormattedMessage id="ui-marva.new-app.message" />
      </div>
    );
  }
}
