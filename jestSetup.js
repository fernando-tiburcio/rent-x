jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: () => {},
  }),
}));
