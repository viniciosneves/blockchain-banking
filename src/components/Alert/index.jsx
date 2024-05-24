import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const AlertWrapper = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid transparent;
  border-radius: 0.25rem;

  ${(props) =>
        props.variant === 'success' &&
        css`
      color: #155724;
      background-color: #d4edda;
      border-color: #c3e6cb;
    `}

  ${(props) =>
        props.variant === 'error' &&
        css`
      color: #721c24;
      background-color: #f8d7da;
      border-color: #f5c6cb;
    `}
`;

const Alert = ({ variant, children }) => {
    return <AlertWrapper variant={variant}>{children}</AlertWrapper>;
};

Alert.propTypes = {
    variant: PropTypes.oneOf(['success', 'error']).isRequired,
    children: PropTypes.node.isRequired,
};

export default Alert;
