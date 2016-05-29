import React, { Component } from 'react';

export default class Love extends Component {
  render() {
    return (
      <section id="love" style={{padding: 20}}>
        <h1 style={{marginTop: 0}}>Thanks for the interest</h1>

        <p>This is an initial proof of concept to show what a bank ui could be like. More experiments will be added here, and when the APIs allow for public release, you can login a review your own transactions too. Features to come include being able to save filters into segments, setting up alerts for those segments and dashboards showing you at a glance spending. If you have any other suggestions, drop me an email at <a href="mailto:ledger@likeminded.io">ledger@likeminded.io</a></p>
        <p>The design is hand-copied with ♥ from  <a href="http://intercom.io" target="_blank">Intercom</a>. If you need crm, go there; their service is pretty good; this whole idea spawned off using their product.</p>
        <p>If your from intercom please ping me a message, it would be great to chat.</p>
        <p>This was and still is a hack for the <a href="http://getmondo.co.uk" target="_blank">Mondo</a> Hackathon</p>
      </section>
    );
  }
}
