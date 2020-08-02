import React, { useEffect, useState, useContext } from 'react';
import io from 'socket.io-client';
import api from '../../services/api';
import { ThemeContext } from '../../contexts/themeContext';
import { FooterColoredRow } from '../Login/styles';
import Header from '../../components/Header';
import Card from './CardUser';
import MatchModal from './MatchModal';
import {avatars} from '../../data';

import { Container, Content, Alert } from './styles';

export default function Main({ match }) {
  const { theme } = useContext(ThemeContext);
  const [users, setUsers] = useState([]);
  const [matchDev, setMatchDev] = useState(null);
  const [newNotification, setNewNotification] = useState(false);
  const [selected, setSelected] = useState("");

  //useEffect que faz a chama API
  useEffect(() => {
    api
      .get('/devs', {
        headers: {
          user: match.params.id,
        },
      })
      .then((response) => {
        setNewNotification(response.data.notification);
        setUsers(response.data.users);
      });
  }, [match.params.id]);

  //useEffect se conecta com o socket.io
  useEffect(() => {
    const socket = io('http://localhost:3333', {
      query: { user: match.params.id },
    });

    socket.on('match', (dev) => {
      setMatchDev(dev);
    });

    socket.on('notification', () => {
      setNewNotification(true);
    });
  }, [match.params.id]);

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id },
    });

    setUsers(users.filter((user) => user._id !== id));
  }

  async function handleViewNotification() {
    setNewNotification(false);
    await api.put('/notifications', null, {
      headers: { user: match.params.id },
    });
  }

  const handleAdopt = (adoptable) => {
    setSelected(adoptable);
    setMatchDev(true);
  }

  const adoptables = [
    {
      _id: 1,
      name: "Lúcia Freitas",
      bio: "Lorem lorem ipsum ispsusm alo vose nachos nachos eu gosto de nachos",
      avatar: avatars[0],
      desired: "cool hat",
      clothSize: "40",
      shoesSize: 38
    },
    {
      _id: 2,
      name: "Sara Ramos",
      bio: "Lorem lorem ipsum ispsusm alo vose nachos nachos eu gosto de nachos",
      avatar: avatars[1],
      desired: "cool hat",
      clothSize: "40",
      shoesSize: 38
    },
    {
      _id: 3,
      name: "Vovó Debinha",
      bio: "Lorem lorem ipsum ispsusm alo vose nachos nachos eu gosto de nachos",
      avatar: avatars[2],
      desired: "cool hat",
      clothSize: "40",
      shoesSize: 38
    },
    {
      _id: 4,
      name: "Pedro Ramalho",
      bio: "Lorem lorem ipsum ispsusm alo vose nachos nachos eu gosto de nachos",
      avatar: avatars[3],
      desired: "cool hat",
      clothSize: "40",
      shoesSize: 38
    }
  ]

  return (
    <Container>
      <Header
        notification={newNotification}
        viewNewNotification={handleViewNotification}
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
          <Alert>Não há perfis ainda.</Alert>
        )}
        {matchDev && (
          <MatchModal user={selected} onClose={() => setMatchDev(null)} />
        )}
      </Content>
      <FooterColoredRow />
    </Container>
  );
}
