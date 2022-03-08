import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text,View } from 'react-native';
import Error from './ErrorCard';


storiesOf('Error', module)
.addDecorator(story => <View style={{ flex: 1, marginVertical: 40, marginHorizontal: 20 }}>{story()}</View>)
  .add('with default text', () => (
    <Error/>
))

.add('warning', () => (
  <Error />
))
.add('with default text', () => (
  <Error/>
))