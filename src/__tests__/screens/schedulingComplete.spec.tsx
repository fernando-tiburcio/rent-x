import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from 'styled-components/native';
import theme from '../../styles/theme';

import { SchedulingComplete } from "../../screens/SchedulingComplete";

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

const component = <SchedulingComplete />

describe("schedulingComplete screen", () => {
  it("should be render screen with svg logo", () => {
    const { getByTestId } = render(component, {
      wrapper: Providers
    });

    const logoSvg = getByTestId("scheduling-complete-logo-svg");

    expect(logoSvg).toBeTruthy();
  });

  it("should be render screen with svg done", () => {
    const { getByTestId } = render(component, {
      wrapper: Providers
    });

    const logoSvg = getByTestId("scheduling-complete-done-svg");

    expect(logoSvg).toBeTruthy();
  });

  it('should call handleRentalFinish button when ConfirmButton is pressed', () => {
    const { getByTestId } = render(component, {
      wrapper: Providers
    });

    const button = getByTestId('scheduling-complete-confirm-button');
    fireEvent(button, 'press');

    const handleFunction = component.props.handleRentalFinish;

    expect(handleFunction).toBeCalledTimes(1);

  });
});
