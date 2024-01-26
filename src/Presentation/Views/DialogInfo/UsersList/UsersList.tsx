import React, { useEffect } from 'react';
import './UsersList.scss';
import { UserEntity } from '../../../../Domain/entity/UserEntity';
import ScrollableContainer from '../../../components/containers/ScrollableContainer/ScrollableContainer';
import SingleUser from './SingleUser/SingleUser';

type UsersListProps = {
  usersFirstPageToView: UserEntity[];
  allUsers: UserEntity[];
  usersInDialogCount: number;
  maxHeight?: number;
};
// eslint-disable-next-line react/function-component-definition
const UsersList: React.FC<UsersListProps> = ({
  usersFirstPageToView,
  allUsers,
  usersInDialogCount = 0,
  maxHeight = 0,
}) => {
  const [hasMore, setHasMore] = React.useState(false);
  const [usersToView, setUsersToView] = React.useState<UserEntity[]>([
    ...usersFirstPageToView,
  ]);

  useEffect(() => {
    setUsersToView([...usersFirstPageToView]);
  }, [usersFirstPageToView, allUsers]);

  const renderUserComponent = (user: UserEntity, index: number) => {
    return <SingleUser user={user} keyValue={user.id + index} />;
  };

  const fetchMoreData = () => {
    if (usersToView.length >= usersInDialogCount) {
      setHasMore(false);

      return;
    }
    if (
      hasMore &&
      usersToView.length > 0 &&
      usersToView.length < usersInDialogCount
    ) {
      setUsersToView((prevState) => {
        const newState = [...prevState];

        const newUserEntity: UserEntity = allUsers[prevState.length];

        newState.push(newUserEntity);

        return newState;
      });
    }
  };
  const rootStyles = maxHeight > 0 ? { maxHeight: `${maxHeight}px` } : {};

  return (
    <ScrollableContainer
      rootStyles={rootStyles}
      data={usersToView}
      renderItem={renderUserComponent}
      onEndReached={fetchMoreData}
      onEndReachedThreshold={0.8}
      refreshing={false}
    />
  );
};

export default UsersList;
