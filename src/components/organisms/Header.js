import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../atoms/Button';
import './Header.sass';

export const Header = ({ title, user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="wrapper">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 190" width="32" height="32">
          <defs>
            <image  width="140" height="160" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACgAgMAAACjwGzgAAAAAXNSR0IB2cksfwAAAAxQTFRFAAAAAAAA/////8AubPizSwAAAAR0Uk5TAP///7MtQIgAAACbSURBVHic7dgxCoAwDAXQLr2fi4v3c3Hp/VwUYoJtjSgmQtH/t5K3JRWbENTEXtLpAMZmuDJMW+gA42roPNUZYTxNVMow3mYf8irZtwXGaNpq+cdNWiQzC+pP0QsYg+FxT1wmRm1gCPOmKWcextfcmXkYu5HyxczDuBmB6r2AeWAa/f/5jynWHzB2Ew5vmZPtCIzV5Es8tQxjNCsro8hwjDJdogAAAABJRU5ErkJggg=="/>
          </defs>
          <use id="Background" href="#img1" x="20" y="20" />
        </svg>
        <h1>{title}</h1>
      </div>
      <div>
        {user ? (
          <Button size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
