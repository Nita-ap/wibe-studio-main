import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 6;

  width: 100%;
  width: fit-content;

  a {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }

  svg {
    width: 4rem;

    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #fff;
      }
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
`;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      delay: 3,
      ease: 'easeInOut',
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2,
      delay: 5,
      ease: 'easeInOut',
    },
  },
};

const Logo = () => {
  return (
      <Container>
        <Link to="/">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFFFFF"
              width="48px"
              height="48px"
              viewBox="0 0 48 48"
              style={{ enableBackground: "new 0 0 48 48" }}
              xmlSpace="preserve"
          >
            <path style={{ fill: "#0000" }} d="M0 0h48v48H0z" />
            <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                d="M36 30c-.15 0-.298.012-.445.023l-6.144-13.965A5.975 5.975 0 0 0 31 12a6 6 0 1 0-12 0c0 1.104.303 2.135.824 3.024l-6.283 9.183A5.98 5.98 0 0 0 12 24a6 6 0 1 0 6 6 5.961 5.961 0 0 0-1.159-3.534l6.057-8.852A5.982 5.982 0 0 0 25 18c.294 0 .581-.028.864-.069l6.029 13.703A5.976 5.976 0 0 0 30 36a6 6 0 1 0 6-6z"
                stroke="#FFFFFF"
                strokeWidth="2"
                fill="none"
            >
              <animate
                  attributeName="stroke-dasharray"
                  from="0,200"
                  to="200,0"
                  dur="2s"
                  repeatCount="indefinite"
              />
            </motion.path>
          </svg>

          <Text variants={textVariants} initial="hidden" animate="visible">
            The LYNK
          </Text>
        </Link>
      </Container>
  );
};

export default Logo;
