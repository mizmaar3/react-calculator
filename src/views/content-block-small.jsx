import React from 'react';

export default class extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='contentBlock'>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur ullamcorper turpis vel commodo scelerisque.
            Phasellus luctus nunc ut elit cursus, et imperdiet diam vehicula.
            Duis et nisi sed urna blandit bibendum et sit amet erat.
            Suspendisse potenti. Curabitur consequat volutpat arcu nec elementum.
            Etiam a turpis ac libero varius condimentum.
            Maecenas sollicitudin felis aliquam tortor vulputate,
            ac posuere velit semper.
          </p>
      </div>
    )
  }
}
