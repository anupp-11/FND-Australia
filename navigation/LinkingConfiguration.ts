import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Products: {
            screens: {
              ProductsScreen: 'one',
            },
          },
          Account: {
            screens: {
              AccountScreen: 'two',
            },
          },
          Cart: {
            screens: {
              CartScreen: 'three',
            },
          },
          Orders: {
            screens: {
              OrdersScreen: 'four',
            },
          },
          Product: {
            screens: {
              ProductScreen: 'five',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
