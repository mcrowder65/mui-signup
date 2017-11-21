import React from "react";
import PropTypes from "prop-types";

const Home = props => {
    return (
        <div>
            Home
        </div>
    );
};

Home.propTypes = {
    input: PropTypes.string,
    setInput: PropTypes.func,
    pingServer: PropTypes.func,
    ping: PropTypes.string
};
export default Home;
