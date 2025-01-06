/* eslint-disable prettier/prettier */
export interface FriendshipStatus {
    status: 'none' | 'pending_incoming' | 'pending_outgoing' | 'friends';
    since?: Date;
  }
  
  export interface FriendshipAction {
    userId: string;
    friendId: string;
    action: 'send' | 'accept' | 'reject' | 'remove';
  }
  