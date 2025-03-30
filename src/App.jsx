import BlogCard from './components/BlogCard/BlogCard';
import Container from './components/Container/Container';
import CryptoHistory from './components/CryptoHistory/CryptoHistory';
import ForbesList from './components/ForbesList/ForbesList';
import Heading from './components/Heading/Heading';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import stats from './data/stats.json';
import forbes from './data/forbes.json';
import article from './data/article.json';
import UserList from './components/UserCard/UserList/UserList';
import usersData from './data/users.json';
import { useState } from 'react';

export const App = () => {
  const [users, setUsers] = useState(usersData);

  const handleDeleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard
          poster={article.poster}
          tag={article.tag}
          title={article.title}
          description={article.description}
          name={article.name}
          avatar={article.avatar}
          postedAt={article.postedAt}
        />
        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" stats={stats} />
        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList title="Main Forbes" list={forbes} />
        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory />
        <Heading title="Task 6 User List" top bottom />
        <UserList users={users} onDelete={handleDeleteUser} />{' '}
      </Container>
    </Section>
  );
};
