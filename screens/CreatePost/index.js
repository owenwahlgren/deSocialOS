import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../assets/colors'
import { Video, AVPlaybackStatus } from 'expo-av';
import CheckBox from 'react-native-check-box';


const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const onPublish = () => {
    }

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <View style={styles.contentPreview}>
                </View>
                <TextInput 
                    value={title}
                    onChangeText={setTitle}
                    numberOfLines={5}
                    placeholder={'Enter post title'}
                    style={styles.titleInput}
                />
            </View>
            <CheckBox 
                style={{flex: 1, padding: 10}}
                onClick={() => {
                    this.setState({
                        isChecked:!this.state.isChecked
                    })
                }}
                isChecked={this.state.isChecked}
                leftText={'CheckBox'}
            />
            <TouchableOpacity onPress={onPublish}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Mint NFT ✨</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CreatePost;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    titleInput: {
        backgroundColor: 'white',
        flex: 1,
        marginLeft: 8,
    },
    contentPreview: {
        backgroundColor: colors.lightGray,
        width: 120,
    },
    button: {
        width: 300,
        borderRadius: 6,
        height: 52,
        marginBottom: 32,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    },
    topSection: {
        flexDirection: 'row',
        height: 120,
        marginTop: 16,
        marginHorizontal: 16,
    }
  });
  