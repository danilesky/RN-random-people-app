import { NavigationContainer } from '@react-navigation/native';
import { NavigationBar } from './navigation/NavigationBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import peopleObjects from './api/peopleApi'

export default function App() {
  const [people, setPeople] = useState(peopleObjects)

  return (
    <NavigationContainer>
      <NavigationBar people={people} />
    </NavigationContainer>
  );
}
