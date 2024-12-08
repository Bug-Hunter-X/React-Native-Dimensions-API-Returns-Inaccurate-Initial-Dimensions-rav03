# React Native Dimensions API Inaccuracy Bug

This repository demonstrates a common bug in React Native applications involving the `Dimensions` API.  The `Dimensions` API provides screen width and height, but these values are not immediately available when the component mounts.  Accessing them prematurely results in inaccurate dimensions, leading to misaligned layouts or other rendering issues.

## Bug Description
The primary issue is that `Dimensions.get('window')` or `Dimensions.get('screen')` might return incorrect values during the initial render. This leads to problems like elements being improperly positioned or sized until the dimensions are correctly updated.

## Solution
The solution involves using the `Dimensions` API in conjunction with the `useEffect` hook to ensure the dimensions are accessed only after the layout is finalized. This allows the component to receive the correct dimensions before rendering elements that rely on these values.

## How to Reproduce
1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npx react-native run-android` or `npx react-native run-ios` to start the application. Observe the initial layout and how it corrects itself.