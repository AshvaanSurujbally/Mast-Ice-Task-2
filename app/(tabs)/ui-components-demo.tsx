import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, FlatList, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function UIComponentsDemo() {
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonPressCount, setButtonPressCount] = useState(0);

  const sampleData = [
    { title: 'TouchableOpacity', description: 'TouchableOpacity example' },
    { title: 'Modal', description: 'Modal demonstration' },
    { title: 'Image', description: 'Image showcase' },
    { title: 'Button', description: 'Button functionality' },
    { title: 'FlatList', description: 'FlatList rendering' },
  ];

  const handleButtonPress = () => {
    setButtonPressCount(prev => prev + 1);
    Alert.alert('Button Pressed!', `Button has been pressed ${buttonPressCount + 1} times!`);
  };

  const renderFlatListItem = ({ item }: { item: any }) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemTitle}>{item.title}</Text>
      <Text style={styles.listItemDescription}>{item.description}</Text>
    </View>
  );

  return (
    <>
      <Stack.Screen options={{ title: 'UI Components Demo' }} />
      <ScrollView style={styles.container}>
        <Text style={styles.header}>UI Components Demo</Text>
        
        {/* Component 1: TouchableOpacity */}
        <View style={styles.componentSection}>
          <Text style={styles.componentTitle}>1. TouchableOpacity</Text>
          <Text style={styles.componentDescription}>
            TouchableOpacity makes buttons that change opacity when touched.
          </Text>
          <TouchableOpacity 
            style={styles.touchableButton}
            onPress={() => Alert.alert('TouchableOpacity', 'You tapped the TouchableOpacity!')}
          >
            <Text style={styles.touchableButtonText}>Tap Me!</Text>
          </TouchableOpacity>
        </View>

        {/* Component 2: Modal */}
        <View style={styles.componentSection}>
          <Text style={styles.componentTitle}>2. Modal</Text>
          <Text style={styles.componentDescription}>
            Modal shows content in a popup overlay.
          </Text>
          <Button 
            title="Open Modal" 
            onPress={() => setModalVisible(true)}
          />
          
          <Modal
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Modal Example</Text>
                <Text style={styles.modalText}>
                  This is a modal component.
                </Text>
                <Button 
                  title="Close Modal" 
                  onPress={() => setModalVisible(false)}
                />
              </View>
            </View>
          </Modal>
        </View>

        {/* Component 3: Image */}
        <View style={styles.componentSection}>
          <Text style={styles.componentTitle}>3. Image</Text>
          <Text style={styles.componentDescription}>
            Image shows pictures from the internet or device.
          </Text>
          <Image
            source={{ uri: 'https://picsum.photos/200/150' }}
            style={styles.image}
          />
          <Text style={styles.imageCaption}>Random image </Text>
        </View>

        {/* Component 4: Button */}
        <View style={styles.componentSection}>
          <Text style={styles.componentTitle}>4. Button</Text>
          <Text style={styles.componentDescription}>
            Button is a clickable component that does something when pressed.
          </Text>
          <Button 
            title={`Press Count: ${buttonPressCount}`}
            onPress={handleButtonPress}
          />
        </View>

        {/* Component 5: FlatList */}
        <View style={styles.componentSection}>
          <Text style={styles.componentTitle}>5. FlatList</Text>
          <Text style={styles.componentDescription}>
            FlatList shows a list of items.
          </Text>
          <FlatList
            data={sampleData}
            renderItem={renderFlatListItem}
            style={styles.flatList}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: 'black',
  },
  componentSection: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
  },
  componentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'blue',
  },
  componentDescription: {
    fontSize: 14,
    marginBottom: 15,
    color: 'black',
  },
  touchableButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  touchableButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'black',
  },
  modalText: {
    fontSize: 14,
    marginBottom: 20,
    color: 'black',
  },
  image: {
    width: 200,
    height: 150,
    alignSelf: 'center',
  },
  imageCaption: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 12,
    color: 'gray',
  },
  flatList: {
    maxHeight: 150,
  },
  listItem: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 2,
    borderRadius: 3,
  },
  listItemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  listItemDescription: {
    fontSize: 12,
    color: 'gray',
  },
});
