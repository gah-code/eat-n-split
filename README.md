# eat-n-split

A simple web application built with React for managing a list of friends and splitting bills with them.

Initial Data:

The code starts with an array named initialFriends containing objects that represent friends. Each object includes an id, name, image (avatar URL), and balance (amount of money owed or owed by the friend).
React Component:

The code defines a React functional component called App. This is the main component responsible for rendering the user interface and managing the application's state.
State Management:

Within the App component, several pieces of state are managed using React's useState hook. These include friends (for storing the list of friends), showAddFriend (for controlling the visibility of an "Add Friend" form), and selectedFriend (for tracking the currently selected friend).
UI Components:

The code defines several UI components, including Button, FriendsList, Friend, FormAddFriend, and FormSplitBill, which are used to structure and render different parts of the application's user interface.
User Interaction:

Users can interact with the application in various ways:
They can select a friend from the list, which displays details about the friend and allows them to split a bill with that friend.
They can add new friends using the "Add Friend" form, providing a name and an image URL.
Users can enter bill details and specify who is paying the bill when splitting bills with a selected friend.
User Interface:

The user interface displays a list of friends, each with their name, image, balance information, and buttons for selecting and splitting bills.
The application handles bill splitting calculations based on user input.
