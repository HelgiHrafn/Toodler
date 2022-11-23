import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Toolbar from '../../components/Toolbar'
import BoardList from '../../components/BoardList'
import data from '../../resources/data.json'
import styles from './styles'

const Boards = ({ navigation }) => {
  // All boards within the application directory
  const [boardSmall, setBoardSmall] = useState(data.boards);
  // All selected boards
  const [selectedBoardSmall, setSelectedBoardSmall] = useState([]);

  const onBoardSmallLongPress = name =>  {
    if (selectedBoardSmall.indexOf(name) !== -1)  {
      // The smallboard is already within the list
      setSelectedBoardSmall(selectedBoardSmall.filter(boardSmall => boardSmall !== name ))
    } else {
      // Add it to the list
      setSelectedBoardSmall([...selectedBoardSmall, name]);

    }
  };
  return (
        <View style={styles.main}>
            <Toolbar hasSelectedBoards={selectedBoardSmall.length > 0} />
            <BoardList 
              onLongPress={name => onBoardSmallLongPress(name)}
              selectedBoardSmall={selectedBoardSmall}
              boards={boardSmall} navigation={navigation}/>
        </View>
  )
}

export default Boards
