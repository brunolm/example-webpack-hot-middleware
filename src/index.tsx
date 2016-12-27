import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Home extends React.Component<any, any> {
  render() {

    return (
      <div>
        If you change this text it updates without a full page reload.
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));

if ((module as any).hot) {
  (module as any).hot.accept();
}
