import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  box-shadow: ${(props) => `4px 6px 10px -4px ${props.color.primaryColor}`};
  @media screen and (max-width: 425px) {
    width: 80px;
    height: 80px;
    bottom: 15px;
    right: calc(50vw - 190px);
    box-shadow: none;
    box-shadow: 0px 1px 11px -4px #ffffff75;
  }
`;
export const Wrapper = styled(NavLink)`
  background: ${(props) => props.color.secondaryColor};
  border-radius: 50px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &.selectedItem {
    background: ${(props) => `linear-gradient(to right, ${props.color.secondaryColor} 50%, ${props.color.secondaryColor} 50%)`};
    p {
      font-weight: 600;
    }
  }
  
  @media screen and (min-width: 1025px) {
    &:hover {
      background: ${(props) => props.color.primaryColor};
      p {
          color: ${(props) => props.color.secondaryColor};
      }
    }
  } 
`;

export const Title = styled.p`
  color: ${(props) => props.color.primaryColor};
  font-size: 12px;
  font-weight: 400;
  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
  text-align: center
`;