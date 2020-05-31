import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';

import { Button, Label } from './styles';

export default function PayButton({ onPress, focused }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={
          focused
            ? ['#fff', '#ccc']
            : ['#45C690', '#69F366']
        }
        start={[1, 0.2]}
      >
        <Entypo
          name="archive"
          size={30}
          color={focused ? '#000' : '#fff'}
        />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}