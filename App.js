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
    console.log(favoritePeople)
  }

  return (
    <NavigationContainer>
      <NavigationBar favoritePeople={favoritePeople} people={people} setFavoritePeople={favoriteHandler} />
    </NavigationContainer>
  );
}