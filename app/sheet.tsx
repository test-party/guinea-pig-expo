import { Alert, Modal, Pressable, StyleSheet, View, Text, ScrollView } from 'react-native';
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { useCallback, useRef, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet';

export default function SheetScreen() {
    const [modalVisible, setModalVisible] = useState(false);

    // ref
    const bottomSheetFailModalRef = useRef<BottomSheetModal>(null);
    const bottomSheetPassModalRef = useRef<BottomSheetModal>(null);
    // callbacks
    const handlePresentFailModalPress = useCallback(() => {
        bottomSheetFailModalRef.current?.present();
    }, []);
    const handlePresentPassModalPress = useCallback(() => {
        bottomSheetPassModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index: number) => {
    }, []);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
                <ThemedView style={{ flex: 1 }}>
                    <ThemedView style={styles.container}>
                        <ThemedText style={styles.title}>Testing "sheet" rule</ThemedText>
                    </ThemedView>
                    <ThemedText style={styles.margin}>Default Passing React Native Modal</ThemedText>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Hello World!</Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Hide Modal</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}>
                        <Text style={styles.textStyle}>Show Modal</Text>
                    </Pressable>
                    <ThemedText style={styles.margin}>Fail Case: React Native Bottom Sheet, No Scroll View</ThemedText>

                    <Pressable
                        onPress={handlePresentFailModalPress}
                        style={[styles.button, styles.buttonOpen]}>
                        <Text style={styles.textStyle}>Show Bottom Sheet</Text>
                    </Pressable>

                    <ThemedText style={styles.margin}>Pass Case: React Native Bottom Sheet, With Scroll View</ThemedText>
                    <Pressable
                        onPress={handlePresentPassModalPress}
                        style={[styles.button, styles.buttonOpen]}>
                        <Text style={styles.textStyle}>Show Bottom Sheet</Text>
                    </Pressable>
                </ThemedView>

                <BottomSheetModal
                    accessible={false}
                    ref={bottomSheetFailModalRef}
                    index={0}
                    snapPoints={['25%', '50%']}
                    onChange={handleSheetChanges}
                >
                    <BottomSheetView style={styles.contentContainer}>
                        <Text>Awesome 🎉</Text>
                    </BottomSheetView>
                </BottomSheetModal>

                <BottomSheetModal
                    accessible={false}
                    ref={bottomSheetPassModalRef}
                    index={0}
                    snapPoints={['25%', '50%']}
                    onChange={handleSheetChanges}
                >
                    <BottomSheetView style={styles.contentContainer}>
                        <ScrollView>
                            <Text>Awesome 🎉</Text>
                        </ScrollView>
                    </BottomSheetView>
                </BottomSheetModal>


            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        display: "flex",
        alignItems: "center"
    },
    title: {
        fontSize: 24,
    },
    margin: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#294CFF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    contentContainer: {
        flex: 1,
        padding: 36,
        alignItems: 'center',
    },
});
