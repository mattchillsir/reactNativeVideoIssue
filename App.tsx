/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Video, {VideoRef} from 'react-native-video';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const videoRef = useRef<VideoRef>(null);

  return (
    <SafeAreaView style={[{flex: 1}, backgroundStyle]}>
      <Video
        ref={videoRef}
        volume={0}
        controls={true}
        style={{flex:1}}
        onEnd={() => {console.log('ended');}}
        onLoad={e => {
          console.log('loading', e);
        }}
        onProgress={e=>{
          console.log('progress', e);
        }}
        source={{
          uri: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8',
        }}
      />
    </SafeAreaView>
  );
}

export default App;
