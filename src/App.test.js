import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { createStore } from "redux";
import { reducer } from "./redux/reducer";

test("renders learn react link", () => {
  render(
    <Provider store={createStore(reducer)}>
      <App />
    </Provider>
  );

  const buttonElement = screen.getByText(/Add contact/i);
  expect(buttonElement).toBeInTheDocument();
});

test("test click event on add contact button", () => {
  const wrapper = render(
    <Provider store={createStore(reducer)}>
      <App />
    </Provider>
  );

  const buttonElement = screen.getByText(/Add contact/i);
  expect(buttonElement).toBeInTheDocument();
  fireEvent.click(buttonElement);
  expect(screen.getByTestId("addEditModal")).toBeInTheDocument();
});

test("test click event on Edit contact button", () => {
  const wrapper = render(
    <Provider store={createStore(reducer)}>
      <App />
    </Provider>
  );

  const buttonElement = screen.getAllByText(/Edit/i);
  expect(buttonElement[0]).toBeInTheDocument();
  fireEvent.click(buttonElement[0]);
  expect(screen.getByTestId("addEditModal")).toBeInTheDocument();
});
