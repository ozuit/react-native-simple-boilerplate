import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  // List account
  listContainer: {
    marginTop: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    flex: 1,
  },

  // Detail
  detailContainer: {
    backgroundColor: '#ffffff',
    flex: 1,

  },
  txtStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#e8edf2",
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  lbInput: {
    marginTop: 10,
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5,
  },
  checkboxStyle: {
    marginLeft: 0,
    marginRight: 0,
  },
  selectStyle: {
    marginLeft: -10,
    marginRight: -10,
    marginBottom: -10, 
  },
  timeStyle: {
    width: '100%',
    marginTop: 10,
  },

  // Profile
  container: {
    paddingTop: 0,
  },
  btnStyle: {
    backgroundColor: '#4D4D4D',
    margin: 15,
    height: 40,
    borderRadius: 30,
  },
  btnTextStyle: {
      color: '#ffffff',
      textAlign: 'center',
      lineHeight: 40,
      fontWeight: 'bold',
  },
  txtPass: {
    borderBottomWidth: 1,
    borderBottomColor: "#e8edf2",
    marginTop: Platform.OS === 'ios' ? 10 : 0,
    paddingBottom: Platform.OS === 'ios' ? 10 : 5,
  },
  appVersion: {
    marginTop: 15,
    color: "#999999",
    textAlign: "center",
  },
});
