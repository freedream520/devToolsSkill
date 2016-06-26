import React, { 
    Component     
} from 'react'

import {
    StyleSheet,
    View,
    Alert
} from 'react-native'

import styleUtils from '../../Styles'
import Editor from '../../Components/Editor'

export default class CommentView extends Component{
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }
    
    componentWillMount() {
        this.props.route.sendComment = this.sendComment.bind(this)
    }

    render() {
        return (
            <View style={styles.container}>  
                <Editor
                    enableTools={'emotion, at'}
                    onChangeText={this.onChangeText.bind(this)} 
                    placeholder={'Write a comment'}
                    text={this.state.text}/>    
            </View> 
        )
    }
    
    sendComment() {
        Alert.alert(
            'Sent successfully',
            this.state.text,
            [
                {text: 'OK', onPress: () => this.props.navigator.pop()}
            ]
        )
    }
    
    onChangeText(text) {
        this.setState({    
            text: text
        })
    }
}

const styles = StyleSheet.create({
    container: {
        ...styleUtils.containerBg,
        flex: 1
    }
})