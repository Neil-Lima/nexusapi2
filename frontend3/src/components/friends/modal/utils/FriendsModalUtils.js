import { useState } from 'react';

export const useFriendsModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);

    const openModal = (friend) => {
        setSelectedFriend(friend);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedFriend(null);
    };

    return {
        showModal,
        selectedFriend,
        openModal,
        closeModal
    };
};
