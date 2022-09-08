import { NavigationContainer } from '@react-navigation/native';
import { NavigationBar } from './navigation/NavigationBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import peopleObjects from './api/peopleApi'

export default function App() {
  const [people, setPeople] = useState(peopleObjects)
  const [favoritePeople, setFavoritePeople] = useState([])

  const favoriteHandler = (people) => {
    const newPeople = people
    setFavoritePeople((previousPeople) => [people, ...previousPeople])
  }

  const removeFavoriteHandler = (currrentPerson) => {
    setFavoritePeople((previousFavorites) => previousFavorites.filter(person => person.login.username !== currrentPerson.login.username))
  }

  const removePeopleHandler = (currrentPerson) => {
    setPeople((previousPeople) => previousPeople.filter(person => person.login.username !== currrentPerson.login.username))
  }

  return (
    <NavigationContainer>
      <NavigationBar favoritePeople={favoritePeople} people={people} setFavoritePeople={favoriteHandler} removeFavorite={removeFavoriteHandler} removePeople={removePeopleHandler} />
    </NavigationContainer>
  );
}