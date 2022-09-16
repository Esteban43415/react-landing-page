import React, { Component } from 'react';

class Footer extends Component {
  render() {



    return (
      <footer>

        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://www.facebook.com/profile.php?id=100084407841702" rel='noreferrer' target='_blank' className="fa fa-facebook">&nbsp;</a></li>
              <li><a href="https://www.instagram.com/boca_de_pez/" target='_blank' rel='noreferrer' className="fa fa-instagram">&nbsp;</a></li>

            </ul>
            <ul className="copyright">
              <li>&copy; Boca de pez Trail Journey 2022 - Cuenca - Ecuador</li>
              {/* <li>Black Funned Machine - Cuenca </li> */}
            </ul>

          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
