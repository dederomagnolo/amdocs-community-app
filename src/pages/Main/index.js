import React, { useEffect, useState, useContext } from 'react';
import api from '../../services/api';
import { ThemeContext } from '../../contexts/themeContext';
import { FooterColoredRow } from '../Login/styles';
import Header from '../../components/Header';
import Card from './CardUser';
import MatchModal from './MatchModal';
import InfoModal from './infoModal';
import FixedButton from './FixedButton';
import {avatars} from '../../data';
import { Container, Content, Alert } from './styles';

export default function Main({ match }) {
  const { theme } = useContext(ThemeContext);
  const [registers, setRegisters] = useState(null);
  const [adoptMatch, setAdoptMatch] = useState(null);
  const [newNotification, setNewNotification] = useState(false);
  const [selected, setSelected] = useState("");
  const [info, setInfo] = useState(false);

  useEffect(async () => {
    try{
      const registersResponse = await api.get('/registers', {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNWU4MmI1MGZjNTQwMTUxNGNkOWMzNiIsImlhdCI6MTYwMDAyOTQ2MSwiZXhwIjoxNjAwMTE1ODYxfQ.n1GEKB9obB7pBs6GHUSWxk2KP4CQTbQBhrOLA-H-RPs"
        }
      });
      setRegisters(registersResponse);
    } catch(err) {
      console.log(err);
    }
  }, [])

  const handleAdopt = (adoptable) => {
    setSelected(adoptable);
    setAdoptMatch(true);
  }

  const adoptables = [
    {
      _id: 1,
      name: "Lúcia Freitas",
      age: "68",
      bio: "Lorem lorem ipsum ispsusm alo vose nachos nachos eu gosto de nachos",
      avatar: avatars[0],
      desired: "cool hat",
      clothSize: "40",
      shoesSize: 38
    },
    {
      _id: 2,
      name: "Sara Ramos",
      age: "66",
      bio: "Lorem lorem ipsum ispsusm alo vose nachos nachos eu gosto de nachos",
      avatar: avatars[1],
      desired: "cool hat",
      clothSize: "40",
      shoesSize: 38
    },
    {
      _id: 3,
      name: "Vovó Debinha",
      age: "68",
      bio: "Lorem lorem ipsum ispsusm alo vose nachos nachos eu gosto de nachos",
      avatar: avatars[2],
      desired: "cool hat",
      clothSize: "40",
      shoesSize: 38
    },
    {
      _id: 4,
      name: "Pedro Ramalho",
      age: "71",
      bio: "Lorem lorem ipsum ispsusm alo vose nachos nachos eu gosto de nachos",
      avatar: avatars[3],
      desired: "cool hat",
      clothSize: "40",
      shoesSize: 41
    },
    {
      _id: 5,
      name: "José Roberto Reis",
      age: "71",
      bio: "Lorem lorem ipsum ispsusm alo vose nachos nachos eu gosto de nachos",
      avatar: avatars[4],
      desired: "cool hat",
      clothSize: "46",
      shoesSize: 42
    }
  ]

  return (
    <Container>
      <Header
        notification={newNotification}
        viewNewNotification={true}
        user={match.params.id}
      />
      <Content>
        {adoptables.length > 0 ? (
          <ul id="card-users">
            {adoptables.map((adopatable) => (
              <Card
                key={adopatable._id}
                user={adopatable}
                styles={theme}
                adopt={() => handleAdopt(adopatable)}
              />
            ))}
          </ul>
        ) : (
          <Alert>Sorry, try again later :(</Alert>
        )}
        {adoptMatch ? (
          <MatchModal user={selected} onClose={() => setAdoptMatch(null)} />
        ) : <FixedButton styles={theme} onClick={() => setInfo(true)} />}
        {info && <InfoModal onClose={() => setInfo(null)}/>}
      </Content>
      <FooterColoredRow/>
    </Container>
  );
}
