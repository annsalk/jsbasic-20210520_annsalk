function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  for (const item of friends) {
    let li = document.createElement('li');
    li.innerHTML = `${item.firstName} ${item.lastName}`;
    ul.append(li);
  }
  return ul;
}