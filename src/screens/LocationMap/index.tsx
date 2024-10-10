import React from 'react';
import { useEffect, useState } from 'react';
import MapView, { Marker, Polyline, Region } from 'react-native-maps';
import { styles } from './styles'
import * as Location from "expo-location";
import { colors } from '../../styles/globalstyle';
import { View, Text } from 'react-native';


export function LocationMap() {
    const [location, setLocation] = useState<null | Location.LocationObject>(null);
    const [region, setRegion] = useState<Region>();
    const [marker, setMarker] = useState<Region[]>();
    const [errorMsg, setErrorMsg] = useState<null | string>(null);


    useEffect(() => {
        const handleLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync();
            if (location) {
                setLocation(location);
                setRegion({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.004,
                    longitudeDelta: 0.004,
                });

                setMarker([
                    {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.004,
                        longitudeDelta: 0.004,
                    },
                ]);
            }
        };
        handleLocation();
    }, []);


    let text = "Waiting..";
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={styles.container}>
            {!region && <Text style={styles.paragraph}>{text}</Text>}
            {region && (
                <MapView style={styles.map} region={region}
                    showsUserLocation={true}
                >
                    {marker &&
                        marker.map((item) => (
                            <Marker key={item.latitude} coordinate={item} />
                        ))}
                    <Polyline
                        coordinates={[
                            { latitude: - 21.5777163, longitude: -45.446078 },
                            { latitude: -21.573369, longitude: -45.448295 },
                        ]}

                        strokeColor={"#000000"}
                        strokeWidth={7}
                    />
                </MapView>
            )}
        </View >
    );
}