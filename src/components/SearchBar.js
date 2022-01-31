import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Searchbar({ value, updateSearch, style,searchContainerstyle }) {
    const [query, setQuery] = useState();
    return (
            <Block style={[styles.searchContainer, searchContainerstyle]}>
                <Block style={styles.vwSearch}>
                    <Ionicons name="search" color="black" size={18} />
                </Block>

                <TextInput
                    value={query}
                    placeholder="Search"
                    style={styles.textInput}
                    onChangeText={(text) => {
                        setQuery(text);
                    }}
                />
                {query ? (
                    <TouchableOpacity
                        onPress={() => setQuery("")}
                        style={styles.vwClear}
                    >
                        <Ionicons
                            name="close-circle-sharp"
                            color="black"
                            size={18}
                        />
                    </TouchableOpacity>
                ) : (
                    <Block style={styles.vwClear} />
                )}
            </Block>
    );
}
const styles = StyleSheet.create({
   
    vwClear: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: 'flex-end',
    },
    textInput: {
        flex: 1,
        fontSize:18,
    },

    vwSearch: {
        flex: 0.1,
        justifyContent: "center",
    },
    icSearch: {
        height: 20,
        width: 20,
    },
    searchContainer: {
        backgroundColor: "white",
        width: "100%",
        height: 38,
        marginTop:8,
        marginBottom:6,
        paddingHorizontal:5,
        flexDirection: "row",
        borderWidth: 1,
        flex:0,
        borderRadius:2

    },
});
