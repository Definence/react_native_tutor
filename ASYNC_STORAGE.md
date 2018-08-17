# Async storage

See more on:
> https://facebook.github.io/react-native/docs/asyncstorage.html

Methods:
* getItem
* setItem
* removeItem
* mergeItem
* clear
* getAllKeys
* flushGetRequests
* multiGet
* multiSet
* multiRemove
* multiMerge

### Importing:
```
import { AsyncStorage } from 'react-native'
```

### Persisting data:
```
_storeData = async () => {
  try {
    await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
  } catch (error) {
    console.log(error)
  }
}
```

### Fetching data:
```
_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('TASKS');
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
   } catch (error) {
     // Error retrieving data
   }
}
```
