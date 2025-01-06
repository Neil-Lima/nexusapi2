'use client';
import React from 'react';
import { Row, Col, Pagination } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faUserPlus, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/theme/ThemeContext';
import { 
  FriendCard, 
  FriendImage, 
  StatusBadge,
  FriendInfo,
  FriendActions,
  ActionButton,
  PaginationContainer,
  StyledPagination,
  ViewProfileButton
} from '../styles/FriendsListStyles';
import { useFriendsList } from '../utils/FriendsListUtils';
import { useFriendsModal } from '../../modal/utils/FriendsModalUtils';
import FriendsModalComp from '../../modal/components/FriendsModalComp';

function FriendsListComp() {
  const { theme } = useTheme();
  const {
    friends,
    totalPages,
    currentPage,
    handlePageChange,
    toggleFriendStatus
  } = useFriendsList();

  const {
    showModal,
    selectedFriend,
    openModal,
    closeModal
  } = useFriendsModal();

  const handleConfirmUnfriend = () => {
    toggleFriendStatus(selectedFriend.id);
    closeModal();
  };

  return (
    <>
      <Row xs={1} sm={2} md={3} lg={4} className="g-3">
        {friends.map((friend) => (
          <Col key={friend.id}>
            <FriendCard theme={theme}>
              <FriendImage>
                <img src={friend.image} alt={friend.name} />
                <StatusBadge data-online={friend.isOnline}>
                  <FontAwesomeIcon icon={faCircle} />
                </StatusBadge>
              </FriendImage>
              
              <FriendInfo>
                <h5>{friend.name}</h5>
                <span>{friend.role}</span>
              </FriendInfo>

              <FriendActions>
                {friend.isFriend ? (
                  <ActionButton 
                    danger
                    theme={theme}
                    onClick={() => openModal(friend)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </ActionButton>
                ) : (
                  <ActionButton 
                    primary
                    theme={theme}
                    onClick={() => toggleFriendStatus(friend.id)}
                  >
                    <FontAwesomeIcon icon={faUserPlus} />
                  </ActionButton>
                )}
                <ViewProfileButton theme={theme} href={`/profile/${friend.id}`}>
                  <FontAwesomeIcon icon={faEye} />
                </ViewProfileButton>
              </FriendActions>
            </FriendCard>
          </Col>
        ))}
      </Row>

      <FriendsModalComp
        showModal={showModal}
        selectedFriend={selectedFriend}
        onClose={closeModal}
        onConfirm={handleConfirmUnfriend}
      />

      <PaginationContainer>
        <StyledPagination theme={theme}>
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={currentPage === index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </StyledPagination>
      </PaginationContainer>
    </>
  );
}

export default FriendsListComp;
