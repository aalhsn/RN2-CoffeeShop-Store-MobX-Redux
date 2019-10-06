import React, { Component } from "react";
import { connect } from "react-redux";
// NativeBase Components
import { List, Content } from "native-base";

// Store

// Component
import CoffeeItem from "./CoffeeItem";

class CoffeeList extends Component {
  render() {
    let shops;
    if (this.props.coffeeshops) {
      shops = this.props.coffeeshops.map(coffeeShop => (
        <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
      ));
    }
    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    coffeeshops: state.rootCoffee.coffeeShops
  };
};

export default connect(mapStateToProps)(CoffeeList);
