import type { NextPage } from 'next';
import styled from '@emotion/styled';

const Home: NextPage = () => {
  return (
    <HomeContainer isOpen={false}>
      <Text>NEXTJS Emotion</Text>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Text = styled.p`
  user-select: none;
`;
