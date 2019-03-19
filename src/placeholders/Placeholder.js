import React, { Component } from 'react';
import './Placeholder.scss';

class Placeholder extends Component {
  render() {
    return (
      <div className="placeholder">
        <h1> {this.props.match.path.substr(1)} </h1>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed turpis et nisi tincidunt aliquet. Nullam molestie sit amet risus nec auctor. Curabitur felis augue, mollis sit amet venenatis nec, ullamcorper nec nisi. Nunc iaculis tincidunt nisl sed porta. Etiam at augue sit amet purus dapibus blandit. Nulla facilisi. Proin metus justo, consectetur vitae odio laoreet, mattis pharetra arcu. Donec sollicitudin sem at cursus faucibus. Quisque vitae tempus nunc. Nam vel lectus eu sem imperdiet feugiat et at nisl. Cras interdum neque eget purus interdum cursus. Fusce id egestas mi, quis pellentesque tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent posuere tempus condimentum. Suspendisse potenti.

Quisque et sem quis elit pretium mattis et sed ex. Pellentesque in leo quam. Suspendisse iaculis molestie turpis, quis porta elit iaculis non. Morbi non metus felis. Nam pellentesque elit nec erat accumsan gravida. Nulla suscipit id purus id tincidunt. Morbi augue augue, aliquet euismod lacus eu, condimentum dapibus purus. Vestibulum orci ante, sodales at congue nec, fringilla vitae sem.

Aliquam nec nibh lacus. Quisque ac tincidunt mauris. Praesent at tellus turpis. Maecenas sed egestas lectus. Integer ut leo ut neque congue condimentum a vel tellus. Integer pharetra arcu nec condimentum hendrerit. Duis a ante nibh. Curabitur vitae neque nunc.

Etiam vitae sollicitudin mauris. Cras euismod et lorem sed vulputate. Integer mattis hendrerit tortor, sit amet luctus ligula faucibus eget. In aliquet nisl vel odio elementum viverra. Proin scelerisque velit dolor, a malesuada magna laoreet nec. Aenean vitae ante quis neque feugiat ultrices ut eleifend dolor. Praesent non nulla non nisl vehicula tristique vel ac est. Aliquam non ipsum eget magna iaculis sagittis et et justo. Nullam posuere urna sagittis, placerat augue a, pulvinar massa. Donec ac maximus elit. Curabitur interdum nibh enim, molestie tempor tortor fringilla et.
        </p>
      </div>
    );
  }
}

export default Placeholder;
