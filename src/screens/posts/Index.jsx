  import {View,
          Text,
          StyleSheet,
          ActivityIndicator,
          ToastAndroid, 
          TouchableOpacity,
          Image,
      } from 'react-native';

  import React, {useState, useEffect} from 'react';

  //import component RNEUI
  // import {ListItem, Avatar, Button, Icon} from '@rneui/themed';

  //import api
  import Api from '../../services/api';

  //import BACKEND_API_URL from .env file
  // import {BACKEND_API_URL} from '@env';

  export default function PostsIndex({navigation}) {

      const [posts, setPosts] = useState([]);
      const [loading, setLoading] = useState(true);
      const [title, setTitle] = useState([]); 

      
    
      //method fetchDataPosts
      const fetchDataPosts = async () => {
        //set loading true
        setLoading(true);

        await Api.get('/api/posts/')
        .then(response => {
          setPosts(response.data.data.data)
          console.log(response.data.data.data);
        })

        //set loading false
        setLoading(false);


      };

      // getData = () => {
      //     var url = "https://reqres.in/api/uses/1";
      //     fetch(url, {
      //       method: 'GET',
      //       headers: {
      //         'x-api-key': 'reqres-free-v1',
      //       },
      //     }).then(data => data.json()).then(result => {
      //     console.log(result);    
      //     // this.setState({jml:this.result.length}) 
      //       setNama(result.data.name)
      //     console.log(result.data.first_name);    


      //     })
      //   } 

      
      // getData = () => {
      //   var url = "http://192.168.200.5:8080/api/posts/";
      //   fetch(url, {
      //     method: 'GET',
      //           headers: {
      //             Accept: 'application/json',
      //             'Content-Type': 'application/json'
      //           },
      //   }).then(data => data.json()).then(result => {
          
      //   // this.setState({jml:this.result.length}) 
      //     setTitle(result.data.data)
      //   console.log(result.data.data);    


      //   })
      // } 
    
      //hook useEffect
      useEffect(() => {
        //call method "fetchDataPosts"
        fetchDataPosts();
        // getData();
        
      }, []);

          
      //method deletePost
      const deletePost = async id => {
        //delete with api
        await Api.delete(`/api/posts/${id}`).then(() => {
          //call method "fetchDataPosts"
          fetchDataPosts();
          //show toast
          ToastAndroid.show('Post Deleted Successfully!', ToastAndroid.LONG);

          
          //redirect to home
          navigation.push('PostIndex');
        });
      };


    return (
      <>
          <View style={styles.container}>
              <Text style={styles.text}>Tutorial React Native + Laravel</Text>
              <View style={styles.line}></View>
              <Text>Posts : {posts.length}</Text>
              {/* <Text>Title : {title.length}</Text> */}
              {/** data posts */}
              {loading ? (
              <ActivityIndicator
                  size="large"
                  color="#e91e63"
                  style={{marginTop: 20}}
              />
              ) : (
                posts.map((post, index) => (
                  <View key={index} style={styles.postContainer}>
                  <Image
                      source={{
                      uri: post.image,
                      }}
                      style={styles.avatar}
                  />
                  <View style={styles.content}>
                      <Text style={styles.title}>{post.title}</Text>
                  </View>
                  <View style={styles.buttonsContainer}>
                      <TouchableOpacity
                      onPress={() => navigation.push('PostEdit', {id: post.id})}
                      style={styles.button}>
                      <Text style={styles.buttonText}>Edit</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                      style={styles.button}
                      onPress={() => deletePost(post.id)}>
                      <Text style={styles.buttonText}>Delete</Text>
                      </TouchableOpacity>
                  </View>
                  </View>
              ))
              )}

              {/* Floating Button */}
              <TouchableOpacity
              style={styles.floatingButton}
              onPress={() => navigation.push('PostCreate')}>
              <Text style={styles.floatingButtonText}>+</Text>
              </TouchableOpacity>
          </View>
      </>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 30,
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#000',
    },
    line: {
      marginTop: 15,
      width: '100%',
      backgroundColor: '#ddd',
      height: 2,
    },
    postContainer: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    buttonsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    postContainer: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    buttonsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    floatingButton: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#e91e63',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 15, // for shadow on Android
      shadowColor: '#000', // for shadow on iOS
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    floatingButtonText: {
      fontSize: 24,
      color: '#fff',
      fontWeight: 'bold',
    },
    button: {
      marginLeft: 10,
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderRadius: 5,
      backgroundColor: '#e91e63',
    },
    buttonText: {
      color: '#fff',
      fontSize: 14,
    },
  });