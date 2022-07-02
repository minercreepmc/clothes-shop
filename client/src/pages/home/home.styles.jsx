import styled from 'styled-components';
import landingBackground from 'assets/img/bg-masthead.jpg';

export const LandingHeader = styled.header`
  padding-top: 10rem;
  padding-bottom: calc(10rem - 4.5rem);
  background: linear-gradient(
      to bottom,
      rgba(92, 77, 66, 0.8) 0%,
      rgba(92, 77, 66, 0.8) 100%
    ),
    url(${landingBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;

  h1 {
    font-size: 2.25rem;
  }

  @media (min-width: 992px) {
    height: 100vh;
    min-height: 40rem;
    padding-top: 4.5rem;
    padding-bottom: 0;

    p {
      font-size: 1.15rem;
    }
    h1,
    .h1 {
      font-size: 3rem;
    }
  }

  @media (min-width: 1200px) {
    h1,
    .h1 {
      font-size: 3.5rem;
    }
  }
`;

export const Divider = styled.hr`
  height: 0.2rem;
  max-width: 3.25rem;
  margin: 1.5rem auto;
  background-color: #f4623a;
  opacity: 1;
`;
