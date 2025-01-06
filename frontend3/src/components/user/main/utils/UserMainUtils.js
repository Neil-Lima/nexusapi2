'use client';
import { useParams } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";

export const useUserMain = () => {
  const params = useParams();
  const profileId = params?.id;
  const queryClient = useQueryClient();

  const { data: loggedUser, isLoading: isLoadingLogged } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => {
      const response = await api.get('/users/me');
      return response.data;
    }
  });

  const { data: profileUser, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['userProfile', profileId],
    queryFn: async () => {
      if (!profileId) return loggedUser;
      const response = await api.get(`/users/${profileId}`);
      return response.data;
    },
    enabled: !!profileId || !!loggedUser
  });

  const isOwnProfile = !profileId || profileId === loggedUser?._id;

  const friendStatus = {
    isFriend: loggedUser?.friends?.includes(profileId),
    hasPendingRequest: loggedUser?.sentRequests?.includes(profileId),
    hasReceivedRequest: loggedUser?.friendRequests?.includes(profileId)
  };

  const sendFriendRequestMutation = useMutation({
    mutationFn: async (friendId) => {
      const response = await api.post(`/users/friends/request/${friendId}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['userData']);
      queryClient.invalidateQueries(['userProfile']);
    }
  });

  const acceptFriendRequestMutation = useMutation({
    mutationFn: async (friendId) => {
      const response = await api.post(`/users/friends/accept/${friendId}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['userData']);
      queryClient.invalidateQueries(['userProfile']);
    }
  });

  const rejectFriendRequestMutation = useMutation({
    mutationFn: async (friendId) => {
      const response = await api.post(`/users/friends/reject/${friendId}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['userData']);
      queryClient.invalidateQueries(['userProfile']);
    }
  });

  const removeFriendMutation = useMutation({
    mutationFn: async (friendId) => {
      const response = await api.delete(`/users/friends/${friendId}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['userData']);
      queryClient.invalidateQueries(['userProfile']);
    }
  });

  const handleFriendAction = {
    sendRequest: (friendId) => sendFriendRequestMutation.mutate(friendId),
    acceptRequest: (friendId) => acceptFriendRequestMutation.mutate(friendId),
    rejectRequest: (friendId) => rejectFriendRequestMutation.mutate(friendId),
    removeFriend: (friendId) => removeFriendMutation.mutate(friendId)
  };

  return {
    loggedUser,
    profileUser,
    isOwnProfile,
    friendStatus,
    handleFriendAction,
    isLoading: isLoadingLogged || isLoadingProfile
  };
};
