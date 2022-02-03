function makeFriendsList(friendsObject) {
  let ulElement = document.createElement('ul');
  friendsObject.forEach(friend => {
    let liElement = document.createElement('li');
    liElement.innerHTML = friend.firstName + ' ' + friend.lastName;
    ulElement.appendChild(liElement);
  });
  return ulElement;
}
