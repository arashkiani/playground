import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import css from "./styles.module.css";
import Text from "../Text";

const styles = classnames.bind(css);

const Address = ({ lines = [] }) => (
  <address className={styles("address")}>
    {lines.map(
      (addressLine, addressIndex) =>
        addressLine && (
          <Text
            element="span"
            className={styles("address__line")}
            key={addressIndex}
          >
            {addressLine}
          </Text>
        )
    )}
  </address>
);

Address.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.string)
};

export default Address;
