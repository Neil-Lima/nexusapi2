export const handleFriendAction = (friendId, currentStatus, updateCallback) => {
    updateCallback(friendId, !currentStatus);
  };
  
  export const getActionButtonProps = (isFriend) => ({
    variant: isFriend ? 'danger' : 'success',
    icon: isFriend ? 'faUserMinus' : 'faUserPlus',
    title: isFriend ? 'Remove Friend' : 'Add Friend'
  });
  