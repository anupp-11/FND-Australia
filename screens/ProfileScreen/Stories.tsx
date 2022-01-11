import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  Image,
} from 'react-native';
import { Feather as Icon, MaterialIcons as MIcon } from '@expo/vector-icons';
import Swiper from 'react-native-swiper'




export default function StoryScreen(){
 

  const [stories, setStories] = useState([
    {
      userImage: 'https://randomuser.me/api/portraits/men/60.jpg',
      userName: 'Brayden Willis',
      storyImage:
        'https://images.pexels.com/photos/4726898/pexels-photo-4726898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      isSeen: false,
    },
    {
      userImage: 'https://randomuser.me/api/portraits/women/81.jpg',
      userName: 'Sophie Price',
      storyImage:
        'https://images.pexels.com/photos/5257534/pexels-photo-5257534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      isSeen: false,
    },
    {
      userImage: 'https://randomuser.me/api/portraits/men/79.jpg',
      userName: 'Rick Perry',
      storyImage:
        'https://images.pexels.com/photos/3380805/pexels-photo-3380805.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      isSeen: false,
    },
    {
      userImage: 'https://randomuser.me/api/portraits/men/85.jpg',
      userName: 'Dave Pena',
      storyImage:
        'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      isSeen: false,
    },
    {
      userImage: 'https://randomuser.me/api/portraits/women/74.jpg',
      userName: 'Layla Kennedy',
      storyImage:
        'https://images.pexels.com/photos/33287/dog-viszla-close.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      isSeen: false,
    },
  ]);

 

  const [currentStoryView, setCurrentStoryView] = useState(stories);
  const [storyModalVisible, setStoryModalVisible] = useState(false);

  // if (!loaded) {
  //   return (
  //     <View>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={{ flex: 1 }}>
      
      
        {/* Stories */}
        <View style={[styles.storiesView]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ marginLeft: 10, alignItems: 'center' }}>
              <TouchableOpacity style={styles.storyContentView}>
                <Icon name='plus' color={'#dfe4ea'} size={40} />
              </TouchableOpacity>
              <View style={{ marginTop: -20, alignItems: 'center' }}>
                <Image
                  style={styles.storyUserImage}
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/86.jpg',
                  }}
                />
                <Text style={{ marginTop: 4, fontWeight:'normal' }}>
                  Your Story
                </Text>
              </View>
            </View>
            {/* Other User Stories */}
            {stories.map((story, i) => (
              <View style={{ marginLeft: 10, alignItems: 'center' }}>
                <TouchableOpacity
                  style={styles.storyContentView}
                  onPress={() => {
                    let newStories = stories.map((s, index) => {
                      if (i === index) {
                        return { ...s, isSeen: true };
                      }
                      return { ...s };
                    });
                    setStories(newStories);
                    setCurrentStoryView(stories.slice(i));
                    setStoryModalVisible(true);
                  }}
                >
                  <Image
                    style={{
                      width: 90,
                      height: 130,
                      borderRadius: 10,
                      opacity: story.isSeen ? 0.5 : 1,
                    }}
                    source={{
                      uri: story.storyImage,
                    }}
                  />
                </TouchableOpacity>
                <View style={{ marginTop: -20, alignItems: 'center' }}>
                  <Image
                    style={styles.storyUserImage}
                    source={{
                      uri: story.userImage,
                    }}
                  />
                  <Text style={{ marginTop: 4, fontWeight:'normal' }}>
                    {story.userName}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        
        <View style={{ height: 20 }}></View>
        {/* Story Modal */}
        <Modal
          animationType='slide'
          transparent={true}
          visible={storyModalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  zIndex: 1,
                  backgroundColor: 'rgba(51, 51, 51, 0.3)',
                  borderRadius: 100,
                  padding: 2,
                }}
                onPress={() => {
                  setStoryModalVisible(false);
                }}
              >
                <Icon name='x' color='#fafafa' size={26} />
              </TouchableOpacity>
              <Swiper
                showsButtons={true}
                style={{ height: '100%' }}
                loop={false}
                showsPagination={false}
              >
                {currentStoryView.map((story) => (
                  <View style={{ alignItems: 'center' }}>
                    <View
                      style={{
                        position: 'absolute',
                        zIndex: 2,
                        bottom: 10,
                        left: 10,
                        backgroundColor: 'rgba(51, 51, 51, 0.3)',
                        padding: 10,
                        borderRadius: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Image
                        style={styles.storyUserImage}
                        source={{ uri: story.userImage }}
                      />
                      <Text
                        style={{
                          color: '#fff',
                          marginLeft: 10,
                          fontSize: 16,
                          fontWeight:'bold',
                        }}
                      >
                        {story.userName}
                      </Text>
                    </View>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                      source={{ uri: story.storyImage }}
                    />
                  </View>
                ))}
              </Swiper>
            </View>
          </View>
        </Modal>
      
    </View>
  );
};

const Explore = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View
        style={{
          height: 80,
          backgroundColor: '#3c40c6',
        }}
      >
        <View
          style={{
            // marginTop: Number(StatusBar.currentHeight),
            marginTop: 30,
            // backgroundColor: 'red',
            // paddingVertical: 20,
            paddingHorizontal: 10,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              marginLeft: 14,
              fontSize: 22,
              color: '#fff',
              fontWeight:'bold',
            }}
          >
            Explore
          </Text>
        </View>
      </View>
    </View>
  );
};

const Profile = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View
        style={{
          height: 80,
          backgroundColor: '#3c40c6',
        }}
      >
        <View
          style={{
            // marginTop: Number(StatusBar.currentHeight),
            marginTop: 30,
            // backgroundColor: 'red',
            // paddingVertical: 20,
            paddingHorizontal: 10,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              marginLeft: 14,
              fontSize: 22,
              color: '#fff',
              fontWeight:'bold',
            }}
          >
            Profile
          </Text>
        </View>
      </View>
    </View>
  );
};

const Settings = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View
        style={{
          height: 80,
          backgroundColor: '#3c40c6',
        }}
      >
        <View
          style={{
            // marginTop: Number(StatusBar.currentHeight),
            marginTop: 30,
            // backgroundColor: 'red',
            // paddingVertical: 20,
            paddingHorizontal: 10,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              marginLeft: 14,
              fontSize: 22,
              color: '#fff',
              fontWeight:'bold',
            }}
          >
            Settings
          </Text>
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  storiesView: {
    paddingVertical: 10,
    paddingRight: 10,
    backgroundColor: '#fafafa',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  storyContentView: {
    width: 90,
    height: 130,
    borderRadius: 10,
    borderColor: '#dfe4ea',
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyUserImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '90%',
    height: '90%',
    borderRadius: 20,
    overflow: 'hidden',
  },
});