import { useState } from 'react';
import './App.css';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [friends, setFriends] = useState(initialFriends);

  return (
    <>
      <div className='app'>
        <div className='sidebar'>
          <FriendsList />

          <Button>Add friend</Button>
        </div>
      </div>
    </>
  );
}

function FriendsList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return <li>{friend.name}</li>;
}

function FormAddFriend(params) {
  return (
    <form action=''>
      <label htmlFor=''></label>
      <input type='text' />

      <label htmlFor=''>
        <input type='text' name='' id='' />
      </label>
    </form>
  );
}

function FormSplitBill(params) {
  return (
    <form className='form-split-bill' action=''>
      <h2>split</h2>
      <label htmlFor=''></label>
      <input type='text' name='' id='' />
    </form>
  );
}
