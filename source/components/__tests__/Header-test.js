jest.dontMock('../Header.react');

describe('Header component', function () {
  it('renders provided header text', function () {
    const React = require('react');
    const ReactDOM = require('react-dom');
    const TestUtils = require('react-addons-test-utils');
    const Header = require('../Header.react');

    const header = TestUtils.renderIntoDocument(
      <Header text="Testing..." />
    );
    const actualHeaderText = ReactDOM.findDOMNode(header).textContent;    expect(actualHeaderText).toBe('Testing...');

    const defaultHeader = TestUtils.renderIntoDocument(
      <Header />
    );
    const actualDefaultHeaderText = ReactDOM.findDOMNode(defaultHeader).textContent;

    expect(actualDefaultHeaderText).toBe('Default header');
  });
});
