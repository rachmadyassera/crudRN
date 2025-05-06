import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  form: {
    padding: 12,
  },
  upload: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  textarea: {
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    marginLeft: 10,
  },
});

export default styles;