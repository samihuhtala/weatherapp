import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TestRenderer from 'react-test-renderer';
import Weather from './components/Weather';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing 2', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Weather />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const testRenderer = TestRenderer.create(<App />).toJSON();
  expect(testRenderer).toMatchSnapshot();
});
it('renders correctly', () => {
  const testRenderer = TestRenderer.create(<App page="localhost:3000">localhost</App>).toJSON();
  expect(testRenderer).toMatchSnapshot();
});
it('renders correctly part 2 ', () => {
  const testRenderer = TestRenderer.create(<Weather />).toJSON();
  expect(testRenderer).toMatchSnapshot();
});
it('renders correctly part 2 ', () => {
  const testRenderer = TestRenderer.create(<Weather page="localhost:3000">localhost</Weather>).toJSON();
  expect(testRenderer).toMatchSnapshot();
});