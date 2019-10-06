import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Actions
import { getCoffeeShops } from "../../redux/actions";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";

class HomePage extends Component {
  async componentDidMount() {
    await this.props.getCoffeeShops();
  }
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <Header style={styles.transparent} />
        <CoffeeList />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCoffeeShops: () => dispatch(getCoffeeShops())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
