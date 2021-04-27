import styled from "styled-components";
import Text from "components/atoms/Text";
import Image from "components/atoms/Image";
export const Container = styled.div`
  position: relative;
  border-bottom: 0.1rem lightgray solid;
`;
export const ProfileContainer = styled.div`
  width: ${({ theme }) => theme.deviceSizes.tabletL};
  margin: 0 auto;
  display: flex;

  @media ${({ theme }) => theme.device.tabletL} {
    width: ${({ theme }) => theme.deviceSizes.tablet};
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: ${({ theme }) => theme.deviceSizes.mobileL};
  }
  @media ${({ theme }) => theme.device.mobileL} {
    width: ${({ theme }) => theme.deviceSizes.mobileM};
  }
`;

export const PosterWrapper = styled.div`
  position: relative;
  width: 12rem;
  top: -2rem;
  border: solid white 0.2rem;
  box-shadow: 0 0 2px rgb(0, 0, 0, 30%);
  overflow: hidden;
  border-radius: 5px;

  @media ${({ theme }) => theme.device.mobileL} {
    position: absolute;
    top: 1rem;
  }
`;
export const TextContainer = styled.div`
  margin: 1rem;
  flex: 1;
`;
export const Title = styled(Text)`
  font-size: 2rem;
  font-weight: bold;
`;
export const BriefInfo = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  font-size: 1rem;
  opacity: 50%;
  margin-bottom: 0.5rem;
`;
export const Flag = styled.div`
  width: 1.2rem;
  margin-right: 0.3rem;
`;

export const VoteAverage = styled.div`
  border-top: 0.1rem #a9a9a922 solid;
  padding-top: 0.5rem;
  /* border-bottom: 0.1rem #a9a9a922 solid; */
`;
