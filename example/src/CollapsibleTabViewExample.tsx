import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SceneMap } from 'react-native-tab-view';

import {
  CollapsibleTabView,
  useCollapsibleScene,
  CollapsibleTabViewProps,
} from 'react-native-collapsible-tab-view';

import { AnimatedAlbums } from './Shared/Albums';
import { AnimatedArticle } from './Shared/Article';
import { AnimatedContacts } from './Shared/Contacts';
import { ExampleComponentType } from './types';

type Route = {
  key: string;
  title: string;
};

export const ContactsScene = () => {
  const scenePropsAndRef = useCollapsibleScene('contacts');
  return <AnimatedContacts {...scenePropsAndRef} />;
};

export const ArticleScene = () => {
  const scenePropsAndRef = useCollapsibleScene('article');
  return <AnimatedArticle {...scenePropsAndRef} />;
};

export const AlbumsScene = () => {
  const scenePropsAndRef = useCollapsibleScene('albums');
  return <AnimatedAlbums {...scenePropsAndRef} />;
};

export const HEADER_HEIGHT = 250;

const renderHeader = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>COLLAPSIBLE</Text>
  </View>
);

const renderScene = SceneMap({
  albums: AlbumsScene,
  contacts: ContactsScene,
  article: ArticleScene,
});

const CollapsibleTabViewExample: ExampleComponentType<Partial<
  Partial<CollapsibleTabViewProps<Route>>
>> = (props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<Route[]>([
    { key: 'article', title: 'Article' },
    { key: 'contacts', title: 'Contacts' },
    { key: 'albums', title: 'Albums' },
  ]);

  const handleIndexChange = (index: number) => {
    setIndex(index);
  };

  return (
    <CollapsibleTabView<Route>
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={handleIndexChange}
      renderHeader={renderHeader}
      headerHeight={HEADER_HEIGHT}
      {...props}
    />
  );
};

CollapsibleTabViewExample.title = 'Default example';
CollapsibleTabViewExample.backgroundColor = '#2196f3';
CollapsibleTabViewExample.appbarElevation = 0;

export default CollapsibleTabViewExample;

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    backgroundColor: '#2196f3',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
  },
});
