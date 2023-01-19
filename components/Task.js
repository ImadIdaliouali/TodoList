import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Task = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.taskText}>{text}</Text>
            <TouchableOpacity style={styles.deleteButton}>
                <Ionicons name="trash-outline" size={26} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 7,
        backgroundColor: 'lightblue',
        marginBottom: 12,
    },
    taskText: {
        fontSize: 18,
    },
    deleteButton: {
        backgroundColor: 'blue',
        borderRadius: 7,
        padding: 7,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Task;