import React,{useState} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import styles from "./mapSearch.module.css";
import tennisBall from './assets/tennisball.png';

export const MapSearchMatch = ({google, matchs}) => {

    const [state, setState] = useState({
        activeMarker:{},
        selectedPlace: {},
        showingInfoWindow: false,
    });

    if (!matchs) {
        return(<div>

        </div>);
    }

    const onClick = () => {
        if(state.showingInfoWindow){
            setState({
                activeMarker: null,
                showingInfoWindow: false,
            });
        }
    };

    const onInfoWindowClose = () => {

    };

    const onMarkerClick = (props, marker) =>{
        setState({
            activeMarker: marker,
            selectedPlace: props,
            showingInfoWindow: true,
        });
    };

    const container = {
        position: 'relative',
        width: '100%',
        height: '550px'
    }

    return (
        <>
            <Map google={google}
                 onClick={onClick}
                 containerStyle={container}
                 zoom={11}
                 initialCenter={{lat:-34.5710578,lng:-58.5254952}}>

                {matchs && matchs.map(match => {
                        return (
                            <Marker onClick={onMarkerClick}
                                    id={match.id}
                                    icon={tennisBall}
                                    name={match.host.first_name + ' ' + match.host.last_name}
                                    position={{lat:match.latitude,lng:match.longitude}}/>
                        );
                    }
                )}

                <InfoWindow marker={state.activeMarker} visible={state.showingInfoWindow} onClose={onInfoWindowClose}>
                    <div>
                        <span>{state.selectedPlace && state.selectedPlace.name}</span>
                    </div>
                </InfoWindow>

            </Map>
            <div/>
        </>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDGxtek3ucjCikFPL6t4JLMSLJAk4kicFk'
})(MapSearchMatch);